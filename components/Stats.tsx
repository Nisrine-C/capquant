import React from 'react';

export function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-4xl font-light text-white mb-2">$2.4B+</div>
            <div className="text-gray-500 font-light">Assets Under Management</div>
          </div>
          <div>
            <div className="text-4xl font-light text-white mb-2">15,000+</div>
            <div className="text-gray-500 font-light">Active Algorithms</div>
          </div>
          <div>
            <div className="text-4xl font-light text-white mb-2">98.7%</div>
            <div className="text-gray-500 font-light">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}