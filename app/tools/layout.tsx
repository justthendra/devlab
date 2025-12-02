export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen py-24 w-full bg-transparent relative overflow-hidden">
      <div className="relative z-10">
          {children}
      </div>
    </div>
  );
}
