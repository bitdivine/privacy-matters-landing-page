import { Shield } from 'lucide-react';
import { SiX, SiGithub } from 'react-icons/si';

export function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* Header */}
            <header className="w-full px-6 py-4 md:px-8 md:py-6">
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-lg">Privacy</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Twitter"
                        >
                            <SiX className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <SiGithub className="h-5 w-5" />
                        </a>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="text-center space-y-8 animate-fade-in">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                        Privacy Matters
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Your data, your rights, your choice.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full px-6 py-6 md:px-8 md:py-8 border-t border-border">
                <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
                    <p>
                        © 2025. Built with{' '}
                        <span className="text-destructive inline-block animate-pulse">♥</span> using{' '}
                        <a
                            href="https://caffeine.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
