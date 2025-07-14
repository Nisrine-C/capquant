import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';
import Image from 'next/image';
export default function Analytics() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-300 mb-4"
              >
                Advanced Analytics
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Deep insights
                <br />
                <span className="text-zinc-400">into performance</span>
              </h2>
              <p className="text-white text-lg mb-8 leading-relaxed">
              An institutional‑grade analytics engine delivering granular metrics, real‑time backtesting, and end‑of‑day live reporting
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Validate against our CapQuant Meta-Model.
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Real-Time Backtesting Suite.
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  End‑of‑Day Live Reports
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-zinc-200">
                Join Waitlist
              </Button>
            </div>
            <div className="lg:order-1 relative">
            <div className="lg:order-1 relative">
                <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden transform -rotate-2 hover:-rotate-1 transition-transform duration-300 perspective-1000">
                  <div
                    className="relative bg-gradient-to-br from-zinc-900 to-black p-6 h-[500px] transform-gpu"
                    style={{ transform: "perspective(1000px) rotateY(12deg) rotateX(-2deg)" }}
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Main Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Signal Score */}
                      <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-zinc-400 text-sm">Firing Score</span>
                          <div className="text-xs text-zinc-400 font-mono">+12.3%</div>
                        </div>
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                            <circle cx="32" cy="32" r="28" stroke="#374151" strokeWidth="6" fill="none" />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="#10b981"
                              strokeWidth="6"
                              fill="none"
                              strokeDasharray="140 176"
                              strokeLinecap="round"
                              className="animate-pulse"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg text-zinc-400 font-bold">87</span>
                          </div>
                        </div>
                        <div className="text-center text-xs text-zinc-500">Strong Signal</div>
                      </div>

                      {/* Priority Allocation */}
                      <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                        <div className="text-zinc-400 text-sm mb-3">Round Allocation</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-zinc-400">Passed</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-12 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                                <div className="w-8/12 h-full bg-zinc-400 rounded-full"></div>
                              </div>
                              <span className="text-xs text-zinc-400">67%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-zinc-400">Deferred</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-12 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                                <div className="w-4/12 h-full bg-zinc-400 rounded-full"></div>
                              </div>
                              <span className="text-xs text-zinc-400">23%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-zinc-400">On Hold</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-12 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                                <div className="w-2/12 h-full bg-zinc-400 rounded-full"></div>
                              </div>
                              <span className="text-xs text-zinc-400">10%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Success Rate Chart */}
                    <div className="bg-zinc-800/50 rounded-lg p-4 mb-4 border border-zinc-700">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-zinc-400 font-medium">Deployment Rate</span>
                        <span className="text-zinc-400 text-sm">73.2%</span>
                      </div>

                      {/* Mini Chart */}
                      <div className="relative h-20 mb-3">
                        <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                          {/* Grid lines */}
                          <defs>
                            <pattern id="analytics-grid" width="25" height="20" patternUnits="userSpaceOnUse">
                              <path
                                d="M 25 0 L 0 0 0 20"
                                fill="none"
                                stroke="#BAC4C8"
                                strokeWidth="0.5"
                                opacity="0.2"
                              />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#analytics-grid)" />

                          {/* Success rate line */}
                          <path
                            d="M0,60 Q25,50 50,45 T100,35 Q125,30 150,25 T200,20"
                            stroke="#BAC4C8"
                            strokeWidth="2"
                            fill="none"
                            className="drop-shadow-sm"
                          />

                          {/* Data points */}
                          <circle cx="50" cy="45" r="2" fill="#BAC4C8" />
                          <circle cx="100" cy="35" r="2" fill="#BAC4C8" />
                          <circle cx="150" cy="25" r="2" fill="#BAC4C8" className="animate-pulse" />
                        </svg>
                      </div>

                      {/* Chart labels */}
                      <div className="flex justify-between text-xs text-zinc-400">
                        <span>1W</span>
                        <span>2W</span>
                        <span>3W</span>
                        <span>4W</span>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700 text-center">
                        <div className="text-zinc-400 font-bold text-lg">24.7%</div>
                        <div className="text-xs text-zinc-400">Total Return</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700 text-center">
                        <div className="text-zinc-400 font-bold text-lg">1.84</div>
                        <div className="text-xs text-zinc-400">Sharpe Ratio</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700 text-center">
                        <div className="text-zinc-400 font-bold text-lg">-2.1%</div>
                        <div className="text-xs text-zinc-400">Max Drawdown</div>
                      </div>
                    </div>

                    {/* Bottom indicators */}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
