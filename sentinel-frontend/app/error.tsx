'use client';

import { useEffect } from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {

        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="text-center max-w-md">

                <div className="mb-8">
                    <div className="w-24 h-24 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                        <AlertTriangle size={48} className="text-destructive" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-4">
                    Something Went Wrong
                </h2>

                <p className="text-muted-foreground mb-4">
                    Sentinel encountered an unexpected error. Don't worry, our AI is
                    already analyzing what went wrong.
                </p>


                {process.env.NODE_ENV === 'development' && (
                    <details className="mb-6 text-left">
                        <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                            Error details
                        </summary>
                        <pre className="mt-2 p-4 bg-muted rounded text-xs text-destructive overflow-auto max-h-48 whitespace-pre-wrap">
                            {error.message}
                        </pre>
                    </details>
                )}


                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                    >
                        <RefreshCw size={20} />
                        Try Again
                    </button>

                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-colors"
                    >
                        <Home size={20} />
                        Go to Dashboard
                    </Link>
                </div>


                {error.digest && (
                    <p className="text-xs text-muted-foreground mt-8">
                        Error ID: <span className="font-mono">{error.digest}</span>
                    </p>
                )}
            </div>
        </div>
    );
}
