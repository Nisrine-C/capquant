export default function PlatformVideo() {
  return (
    <section className="py-16">
      {/* rest of code here */}
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-zinc-700/20 rounded-xl blur-2xl"></div>
            <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-zinc-200 transition-colors">
                    <svg
                      className="w-6 h-6 text-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Click to play demo video
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    Video integration placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
