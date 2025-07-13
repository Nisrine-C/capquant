import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img className="h-15 w-30" src="./Caplogo.svg" />
          </div>
          <nav className="relative hidden md:flex items-center space-x-8">
            <Link href="#waitlist-section">
              <Button className="bg-white text-black hover:bg-zinc-200 cursor-pointer z-50">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
