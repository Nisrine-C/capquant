import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain } from 'lucide-react';
import Image from 'next/image';
export default function StrategyBuilder() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-300 mb-4"
              >
                Predictions Meet Rewards
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Predict, Score, Deploy
                <br />
                <span className="text-zinc-400">Get Compensated.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              The platform where your predictive data, edge and insights turn into real world rewards.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></div>
                  Transparent. Data-Driven. Unbiased.
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></div>
                  Any timeframe: Intraday to Swing.
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></div>
                  Code for Quant, or Drag & Prompt.
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-zinc-200">
                Explore CapQuant
              </Button>
            </div>
            <div className="relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-zinc-800/30 rounded-xl"></div>

                <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden transform rotate-2 hover:rotate-1 transition-transform duration-300 perspective-1000 relative z-10">
                  <div
                    className="relative bg-gradient-to-br from-zinc-900 to-black p-6 h-[500px] transform-gpu"
                    style={{ transform: "perspective(1000px) rotateY(-12deg) rotateX(2deg)" }}
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                        <span className="text-green-300 font-medium text-sm">API Active</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                      </div>
                    </div>
                    {/* Strategy Canvas */}
                  <div className="bg-zinc-800/50 rounded-lg p-4 mb-4 border border-zinc-700 h-48">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-zinc-300 text-sm font-medium">Strategy Canvas</span>
                      <div className="flex items-center space-x-2">
                      
                      </div>
                    </div>

                      <div className="relative h-32 flex items-center">
                      <div className="flex-1">
                        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                          <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                                    refX="9" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" fill="#71717A" />
                            </marker>
                          </defs>
                          <path d="M90,40 Q120,40 150,40" stroke="#71717A" strokeWidth="2" 
                                markerEnd="url(#arrowhead)" />
                          <path d="M240,40 Q270,40 300,40" stroke="#71717A" strokeWidth="2" 
                                markerEnd="url(#arrowhead)" />
                          <path d="M390,40 Q420,40 450,40" stroke="#71717A" strokeWidth="2" 
                                markerEnd="url(#arrowhead)" />
                        </svg>
                        
                        {/* Strategy Nodes */}
                        <div className="absolute top-6 left-4 bg-zinc-800 rounded-lg p-3 border border-zinc-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-zinc-700" style={{ zIndex: 2 }}>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-zinc-700 rounded-md flex items-center justify-center">
                             
                            </div>
                            <span className="text-sm text-zinc-300 font-medium">Data Input</span>
                          </div>
                        </div>
                        <div className="absolute top-6 left-36 bg-zinc-800 rounded-lg p-3 border border-zinc-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-zinc-700" style={{ zIndex: 2 }}>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-zinc-700 rounded-md flex items-center justify-center">
                             
                            </div>
                            <span className="text-sm text-zinc-300 font-medium">Signal Gen</span>
                          </div>
                        </div>
                        
                        <div className="absolute top-6 left-70 bg-zinc-800 rounded-lg p-3 border border-zinc-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-zinc-700" style={{ zIndex: 2 }}>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-zinc-700 rounded-md flex items-center justify-center">
                              <div className="w-3 h-3 bg-zinc-500 rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-sm text-zinc-300 font-medium">Approved</span>
                          </div>
                        </div>
                      
                        
                      </div>

                      {/* Subtle Allocation Chart */}
                     
                    </div>
                  </div>

                    {/* Backtest Results */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zinc-300 text-sm">Backtest Results</span>
                        
                      </div>
                      <div className="text-green-400 font-bold text-lg">+47.2%</div>
                      <div className="text-xs text-zinc-500">Annual Return</div>
                    </div>

                    <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                      <div className="text-zinc-300 text-sm mb-2">Sharpe Ratio</div>
                      <div className="text-blue-400 font-bold text-lg">2.34</div>
                      <div className="text-xs text-zinc-400">Risk-Adjusted</div>
                    </div>
                  </div>
                  {/* Strategy Controls */}
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-zinc-300 text-sm">Strategy Controls</span>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 bg-green-600 rounded hover:bg-green-500 transition-colors">
                          
                        </button>
                        <button className="p-1 bg-yellow-600 rounded hover:bg-yellow-500 transition-colors">
                         
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="text-zinc-400">Status</div>
                        <div className="text-green-400 font-medium">Testing</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zinc-400">Trades</div>
                        <div className="text-zinc-300 font-medium">247</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zinc-400">Win Rate</div>
                        <div className="text-blue-400 font-medium">68%</div>
                      </div>
                    </div>
                  </div>


                    {/* Bottom indicators */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                        </div>
                        <div className="text-zinc-400 text-xs">Last update: 2s ago</div>
                      </div>
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
