const express = require('express');
const app = express();
const port = 3001;

// We fake the health status here
let healthStatus = 'healthy'; 

app.get('/health', (req, res) => {
  // Simulate slow response
  if (healthStatus === 'slow') {
    setTimeout(() => {
      res.json({ status: 'slow', timestamp: new Date() });
    }, 2000); // 2 seconds delay
  } 
  // Simulate crash/error
  else if (healthStatus === 'down') {
    res.status(500).json({ status: 'down', error: 'Database connection failed' });
  } 
  // Normal healthy response
  else {
    res.json({ 
      status: 'ok', 
      service: 'auth-service', 
      cpu: Math.random() * 100, // Fake CPU usage
      memory: Math.random() * 500
    });
  }
});

// Endpoint to force the service to fail (for your Demo)
app.post('/simulate/:mode', (req, res) => {
  healthStatus = req.params.mode; // mode can be: healthy, slow, down
  console.log(`[Simulation] Switched to mode: ${healthStatus}`);
  res.json({ message: `Service is now simulating: ${healthStatus}` });
});

app.listen(port, () => {
  console.log(`Auth Service listening on port ${port}`);
});
