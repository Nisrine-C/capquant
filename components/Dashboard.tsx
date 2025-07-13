import Image from 'next/image';

export default function Dashboard() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-zinc-700/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="bg-zinc-800 px-6 py-4 border-b border-zinc-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-400 text-sm ml-4">
                    CapQuant Dashboard
                  </span>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="QuantFlow Dashboard"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
