import { Zap, Sparkles } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-md opacity-50 animate-pulse-glow"></div>
        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-1.5 sm:p-2 rounded-full">
          <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 animate-pulse" />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            MAI
          </span>
          <span className="text-[10px] sm:text-xs text-gray-400 -mt-1">Business Solutions</span>
        </div>
      )}
    </div>
  );
}