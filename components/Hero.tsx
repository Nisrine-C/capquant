import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="border-zinc-700 text-zinc-300 mb-6"
          >
            Secure Your Spot
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Your Models,<br/>Verified Alpha,<br/> Real Rewards.
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          CapQuant is where data-driven expertise generates market-beating performance.
          Submit your predictive models, score their real-time effectiveness, and earn for every validated outperformance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#waitlist-section">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 text-lg px-8 cursor-pointer"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
