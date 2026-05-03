import Link from 'next/link';

export default function PokerHome() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">Post-Flop Strategy</h1>
        <p className="text-slate-400 text-lg">
          Decision flowcharts for navigating poker hands after the flop.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Flowcharts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/poker/flowchart">
            <div className="group bg-slate-900 border border-slate-800 hover:border-emerald-600 rounded-xl p-6 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center text-emerald-400 text-lg font-bold">
                  3B
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-emerald-400 transition-colors">3-Bet Pots</div>
                  <div className="text-slate-500 text-sm">Post-flop navigation</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Complete decision tree for 3-bet pot play — OOP and IP strategies across flop, turn, and river.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">OOP</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">IP</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">SPR</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">Range</span>
              </div>
            </div>
          </Link>

          <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 opacity-40 cursor-not-allowed">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-lg font-bold">
                SRP
              </div>
              <div>
                <div className="text-slate-400 font-semibold">Single-Raised Pots</div>
                <div className="text-slate-600 text-sm">Coming soon</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Decision flowchart for single-raised pot play.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Practice</h2>
        <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 opacity-40 cursor-not-allowed">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 text-xl">
              ♠
            </div>
            <div>
              <div className="text-slate-400 font-semibold">Hand Analysis</div>
              <div className="text-slate-600 text-sm">Coming soon</div>
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Interactive hand scenarios — input your hand, position, and board to get the recommended line.
          </p>
        </div>
      </div>
    </div>
  );
}
