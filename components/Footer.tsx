import React from 'react';
import { BarChart3 } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-zinc-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          
          <div>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} CapQuant. Backed By <Link href="https://lotuscapital-invest.com" className="hover:text-white transition-colors">
                Lotus Capital
                </Link>
          </p>
          
          </div>
        </div>
    </footer>
  );
}
