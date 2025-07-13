import { TrendingUp } from "lucide-react";
import type { Page } from "../App";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <TrendingUp className="h-6 w-6 text-white group-hover:text-gray-300 transition-colors" />
            <div className="flex items-center space-x-2">
              <span className="text-lg font-light text-white">CapQuant</span>
              <span className="text-xs text-gray-500 font-light">
                by Lotus Capital
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
