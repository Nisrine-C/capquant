import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Simulated terminal lines sequence (realistic API deployment process)
const sequence = [
  { text: '$ connect --user-id 6ac3d9b7 capquant-api', delay: 700 },
  { text: 'Connected to CapQuant API as user 6ac3d9b7', delay: 600 },
  { text: '$ deploy --strategy alpha-v2 --interface prompt', delay: 900 },
  { text: 'Deployment started: validating strategy...', delay: 800 },
  { text: 'Strategy valid | Risk parameters: max_drawdown=5%, stop_loss=2%', delay: 1000 },
  { text: 'Signal generated: SELL NDX @ 15800 | Confidence: 84%', delay: 900 },
  { text: 'Signal status: WAITING FOR NEXT CYCLE (T+1)', delay: 1000 },
  { text: 'Cycle initiated at 13:00 UTC | Pre-processing queue...', delay: 800 },
  { text: 'Signal passed compliance and risk assessment checks', delay: 1000 },
  { text: 'Signal approved for execution queue', delay: 800 },
  { text: 'Delivery scheduled at 13:01:00.043 UTC', delay: 900 },
  { text: '$ monitor --session-id 304x-strategy-alpha-v2', delay: 800 },
  { text: '[SESSION] Signals this cycle: 3 | Approved: 2 | Rejected: 1', delay: 1000 },
  { text: '[RISK ENGINE] Real-time exposure: balanced | Volatility: moderate', delay: 900 },
  { text: '$ fetch-metrics --window 5m', delay: 900 },
  { text: '[METRICS] Avg signal approval latency: 1.8s | Decision rate: 95%', delay: 800 },
  { text: '$ stream-logs --mode live', delay: 900 },
  { text: '[LOG] model=alpha-v2 | feed=SPX | signal=LONG @ 4525.1', delay: 700 },
  { text: '[LOG] signal status: APPROVED | execution assigned to core engine', delay: 800 },
  { text: '[LOG] queue state: 1 pending | 2 processed | next cycle at 13:15 UTC', delay: 900 }
];

export default function ExecutionEngine() {
  const [lines, setLines] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineIndex = useRef(0);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);

    const stream = () => {
      const nextLine = sequence[lineIndex.current % sequence.length];
      setLines((prev) => [...prev, nextLine.text]);
      lineIndex.current++;
      setTimeout(stream, nextLine.delay);
    };

    stream();

    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [lines]);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-6">
                <h2 className="text-4xl font-bold text-white text-center">
                  The CapQuant API
                </h2>
              </div>
              <div className="bg-black rounded-lg shadow-lg border border-zinc-800 font-mono p-6">
                <div
                  ref={containerRef}
                  className="overflow-y-auto h-[400px] md:h-[500px] space-y-1 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 pr-2"
                >
                  {lines.map((line, idx) => (
                    <div key={idx} className="text-sm text-zinc-400 whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                  <div className="text-sm text-zinc-400">
                    {cursorVisible ? <span className="text-green-400">▌</span> : <span>&nbsp;</span>}
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <Badge variant="secondary">API Key: •••• •••• •••• 1234</Badge>
                  <Button size="sm" variant="outline">Deploy Model</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
