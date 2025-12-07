import { Loading } from '@/components/atoms/Loading';

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loading size="lg" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
