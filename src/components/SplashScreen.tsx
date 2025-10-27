import Logo from "./Logo";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Logo and Loading */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="animate-float">
          <Logo className="scale-[2]" />
        </div>
        
        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-[loading_3s_ease-in-out]"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}