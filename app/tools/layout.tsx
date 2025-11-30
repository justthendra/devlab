export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen py-24 w-full bg-transparent relative overflow-hidden">
      
      {/* Blur orb efektleri */}
      <div className="absolute -top-32 -left-28 w-[400px] h-[400px] bg-[rgba(0,255,200,0.15)] blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-50px] -right-10 w-[350px] h-[350px] bg-[rgba(0,150,255,0.15)] blur-[200px] rounded-full animate-pulse" />

      <div className="relative z-10">
          {children}
      </div>
    </div>
  );
}
