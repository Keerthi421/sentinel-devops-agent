'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="text-center max-w-md">

                <div className="relative mb-8">
                    <h1 className="text-[150px] font-bold text-muted/20 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">🛡️</span>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-4">
                    Page Not Found
                </h2>

                <p className="text-muted-foreground mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    Sentinel couldn't locate this resource.
                </p>


                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                    >
                        <Home size={20} />
                        Go to Dashboard
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>


                <p className="text-sm text-muted-foreground mt-8">
                    Need help? Check the{' '}
                    <Link href="/docs" className="text-primary hover:underline">
                        documentation
                    </Link>
                </p>
            </div>
        </div>
    );
}
