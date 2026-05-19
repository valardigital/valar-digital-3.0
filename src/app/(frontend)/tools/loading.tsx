export default function ToolsLoading() {
  return (
    <div className="bg-background-muted mt-[64px] md:mt-[80px] min-h-[60vh] animate-pulse">
      <div className="container mx-auto py-6 md:py-10 px-4 md:px-0">
        <div className="h-10 md:h-14 bg-border/40 rounded max-w-2xl mx-auto mb-4" />
        <div className="h-5 bg-border/30 rounded max-w-md mx-auto" />
      </div>
      <div className="container mx-auto px-4 md:px-0 py-8 space-y-6">
        <div className="h-48 bg-border/30 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-border/30 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
