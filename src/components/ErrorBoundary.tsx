import { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Item: a real app would report this to an error-tracking service —
    // left as a clear extension point rather than a silent console.error.
    console.error('Jirani OS website error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
          <AlertTriangle size={32} className="text-warning" />
          <h1 className="mt-4 text-2xl font-extrabold text-ink">Something went wrong.</h1>
          <p className="mt-2 max-w-sm text-sm text-ink-muted">
            This page ran into an unexpected error. Refreshing usually fixes it.
          </p>
          <Button className="mt-6" onClick={() => window.location.reload()}>
            Refresh page
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
