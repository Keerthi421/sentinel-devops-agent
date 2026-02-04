'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-background text-foreground`}>
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                            <span className="text-5xl">🛡️</span> Sentinel Error
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            A critical error occurred. Please try again.
                        </p>
                        <button
                            onClick={reset}
                            className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                        >
                            Reload Application
                        </button>


                    </div>
                </div>
            </body>
        </html>
    );
}
