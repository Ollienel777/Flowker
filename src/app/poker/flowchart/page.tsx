'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

// ─── Color maps ───────────────────────────────────────────────────────────────

const HAND_STYLE: Record<string, string> = {
  'CPFS':             'bg-violet-900/50 text-violet-300 border border-violet-500/40',
  'Thick Value':      'bg-emerald-900/50 text-emerald-300 border border-emerald-500/40',
  'Thin Value':       'bg-green-900/50 text-green-300 border border-green-500/40',
  'Showdown Value':   'bg-yellow-900/50 text-yellow-300 border border-yellow-500/40',
  'Combo Draw':       'bg-orange-900/50 text-orange-300 border border-orange-500/40',
  'High-Equity Draw': 'bg-amber-900/50 text-amber-300 border border-amber-500/40',
  'Low-Equity Draw':  'bg-amber-900/30 text-amber-500/70 border border-amber-500/20',
  'Draw':             'bg-amber-900/50 text-amber-300 border border-amber-500/40',
  'Air':              'bg-red-900/30 text-red-400 border border-red-500/30',
  'Bluff':            'bg-red-900/30 text-red-400 border border-red-500/30',
  'Value':            'bg-emerald-900/50 text-emerald-300 border border-emerald-500/40',
};

const ACTION_STYLE: Record<string, string> = {
  'Bet Big':     'bg-emerald-700 text-white',
  'Bet Small':   'bg-emerald-600/80 text-white',
  'Bet Medium':  'bg-emerald-500/80 text-white',
  'Bet Large':   'bg-emerald-800 text-white',
  'Check-Raise': 'bg-violet-700 text-white',
  'Check-Call':  'bg-blue-700 text-white',
  'Check-Fold':  'bg-red-700 text-white',
  'Check':       'bg-slate-600 text-white',
  'Lead / Donk': 'bg-teal-700 text-white',
  'C-Bet Small': 'bg-emerald-700 text-white',
};

// ─── Shared components ────────────────────────────────────────────────────────

function HandBadge({ label }: { label: string }) {
  const style = HAND_STYLE[label] ?? 'bg-slate-700 text-slate-300 border border-slate-600';
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style}`}>
      {label}
    </span>
  );
}

function ActionBadge({ label }: { label: string }) {
  const style = ACTION_STYLE[label] ?? 'bg-slate-600 text-white';
  return (
    <span className={`text-xs px-2.5 py-1 rounded font-semibold uppercase tracking-wide ${style}`}>
      {label}
    </span>
  );
}

type ActionRow = { action: string; hands: string[] };

function ResultBox({ rows, note }: { rows: ActionRow[]; note?: string }) {
  return (
    <div className="bg-slate-900 border border-slate-700/60 rounded-lg overflow-hidden">
      <div className="divide-y divide-slate-800">
        {rows.map((row, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-2.5">
            <div className="shrink-0 pt-0.5 w-28">
              <ActionBadge label={row.action} />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {row.hands.map((h) => (
                <HandBadge key={h} label={h} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {note && (
        <div className="px-4 py-2 bg-slate-800/50 border-t border-slate-700/60 text-xs text-slate-400 italic">
          {note}
        </div>
      )}
    </div>
  );
}

function WhySection({ id, children }: { id: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
      >
        {open ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        <span className="font-medium">Why?</span>
      </button>
      {open && (
        <div className="mt-2 text-sm text-slate-400 leading-relaxed bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 space-y-1.5">
          {children}
        </div>
      )}
    </div>
  );
}

function DecisionHeader({ question, factors }: { question: string; factors?: string[] }) {
  return (
    <div className="bg-amber-950/40 border border-amber-700/40 rounded-lg px-4 py-3 mb-4">
      <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Decision</div>
      <div className="text-amber-200 font-semibold text-base">{question}</div>
      {factors && factors.length > 0 && (
        <div className="mt-2 text-xs text-amber-400/70 space-y-0.5">
          {factors.map((f, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BranchLabel({ label, color }: { label: string; color: 'green' | 'red' | 'blue' | 'orange' | 'purple' | 'teal' }) {
  const styles = {
    green:  'text-emerald-400 border-emerald-700/50',
    red:    'text-red-400 border-red-700/50',
    blue:   'text-blue-400 border-blue-700/50',
    orange: 'text-orange-400 border-orange-700/50',
    purple: 'text-violet-400 border-violet-700/50',
    teal:   'text-teal-400 border-teal-700/50',
  };
  return (
    <div className={`text-xs font-bold uppercase tracking-wide mb-3 pb-2 border-b ${styles[color]}`}>
      {label}
    </div>
  );
}

function SectionCard({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-20">
      <div className="flex items-baseline gap-3 mb-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {subtitle && <span className="text-sm text-slate-500">{subtitle}</span>}
      </div>
      <div>{children}</div>
    </section>
  );
}

// ─── OOP sections ─────────────────────────────────────────────────────────────

function OopFlop() {
  return (
    <SectionCard id="oop-flop" title="OOP Flop" subtitle="You 3-bet pre. Villain calls. You're first to act.">
      <DecisionHeader
        question="Is this spot likely to get stabbed if you check?"
        factors={[
          'Wet board (two-tone or monotone, connected cards)',
          'Dynamic board (many turn cards change the nuts)',
          'Aggressive or loose villain',
          'Your perceived range missed the board',
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* YES branch */}
        <div className="border-l-2 border-emerald-700/50 pl-4">
          <BranchLabel label="YES — Check-heavy spot" color="green" />
          <ResultBox
            rows={[{ action: 'Check', hands: ['All hands'] }]}
            note="Check your entire range — value, draws, air, everything."
          />
          <WhySection id="oop-flop-yes-why">
            <p>Checking the whole range accomplishes several things at once:</p>
            <p>• Villain often <strong className="text-slate-300">over-stabs</strong> — they bet too many hands and make mistakes.</p>
            <p>• Their bet size gives away information. A small stab on a scary board usually means a weak range; a big one means strength.</p>
            <p>• They under-protect their check-back range, so when they do check back, their range becomes weak and capped.</p>
            <p>• You avoid c-betting and getting floated with hands you're unsure about.</p>
            <p>Let villain reveal information before you build a pot.</p>
          </WhySection>
        </div>

        {/* NO branch */}
        <div className="border-l-2 border-slate-600 pl-4">
          <BranchLabel label="NO — Static/dry board" color="teal" />
          <DecisionHeader question="Is SPR > 15?" />

          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">SPR ≤ 15</div>
              <ResultBox
                rows={[
                  { action: 'Bet Small', hands: ['CPFS', 'Thick Value'] },
                  { action: 'Check',     hands: ['Thin Value', 'Showdown Value', 'Draw', 'Air'] },
                ]}
              />
              <WhySection id="oop-flop-spr-low-why">
                <p>With a lower SPR, you don't need a check-raise to get stacks in. You can just bet flop → bet turn → bet river.</p>
                <p>Check-raising creates fold equity — but with thick value, you don't want villain to fold. You want calls from worse hands.</p>
                <p>A small bet on a dry board builds the pot cheaply while keeping villain's range wide.</p>
              </WhySection>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">SPR &gt; 15</div>
              <ResultBox
                rows={[
                  { action: 'Bet Small', hands: ['Thick Value'] },
                  { action: 'Check',     hands: ['CPFS', 'Thin Value', 'Showdown Value', 'Draw', 'Air'] },
                ]}
              />
              <WhySection id="oop-flop-spr-high-why">
                <p>Very deep stacks change the calculus for thick value. TPTK on A-9-2 at 30× SPR is strong — but if you check-raise and get massive action, you may only get called by hands that beat you.</p>
                <p>CPFS hands (sets, two-pair, monster draws) benefit most from a check-raise deep because you can build a huge pot while still having position-exploitable leverage.</p>
              </WhySection>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function OopFacingStab() {
  return (
    <SectionCard id="oop-stab" title="OOP Facing Villain's Stab" subtitle="You checked flop. Villain bet.">
      <DecisionHeader
        question="How big did villain stab?"
        factors={[
          'Absolute size matters — a $150 bet at $2/$5 signals more than a $25 bet, even if both are ~50% pot',
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BIG stab */}
        <div className="border-l-2 border-red-700/50 pl-4">
          <BranchLabel label="BIG stab" color="red" />
          <ResultBox
            rows={[
              { action: 'Check-Raise', hands: ['CPFS', 'Combo Draw'] },
              { action: 'Check-Call',  hands: ['Thick Value', 'Thin Value', 'High-Equity Draw'] },
              { action: 'Check-Fold',  hands: ['Showdown Value', 'Air'] },
            ]}
          />
          <WhySection id="oop-stab-big-why">
            <p>A big bet signals a strong range — villain is rarely bluffing at full pot. Your fold equity is low.</p>
            <p>Only raise hands that are comfortable continuing if called: true monsters and combo draws with 15+ outs.</p>
            <p>Thick value just calls — raising may isolate you against only better hands.</p>
            <p>Showdown value (pocket nines on a K-Q-J board) can fold. The big bet lets you off the hook cheaply.</p>
          </WhySection>
        </div>

        {/* SMALL stab */}
        <div className="border-l-2 border-slate-600 pl-4">
          <BranchLabel label="SMALL stab" color="blue" />
          <DecisionHeader question="What type of board is it?" />

          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Wet / Dynamic board</div>
              <ResultBox
                rows={[
                  { action: 'Check-Raise', hands: ['CPFS', 'Combo Draw', 'Thick Value', 'High-Equity Draw', 'Low-Equity Draw'] },
                  { action: 'Check-Call',  hands: ['Showdown Value'] },
                ]}
                note="Attack aggressively — villain's small size on a scary board usually means a weak/capped range."
              />
              <WhySection id="oop-stab-small-wet-why">
                <p>On a wet dynamic board, if villain had a strong hand they would typically bet bigger for protection and value.</p>
                <p>A small stab often means they're betting range or probing with a weak hand. Your fold equity is high.</p>
                <p>You can raise even thin value and some low-equity bluffs because the pot odds math works in your favor.</p>
              </WhySection>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Static / Dry board</div>
              <ResultBox
                rows={[
                  { action: 'Check-Raise', hands: ['CPFS', 'Combo Draw'] },
                  { action: 'Check-Call',  hands: ['Thick Value', 'Draw', 'Showdown Value'] },
                ]}
              />
              <WhySection id="oop-stab-small-dry-why">
                <p>On a static dry board, a small bet reveals less about villain's hand strength. They don't need to bet big because there aren't many threatening turn cards.</p>
                <p>Don't go crazy check-raising here. Stick to your clearest value raises and strongest draws. Call everything else.</p>
              </WhySection>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function OopTurn() {
  return (
    <SectionCard id="oop-turn" title="OOP Turn" subtitle="You check-called flop. Villain bets turn again.">
      <DecisionHeader question="How big was villain's original flop stab?" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BIG flop stab */}
        <div className="border-l-2 border-red-700/50 pl-4">
          <BranchLabel label="BIG flop stab → continues turn" color="red" />
          <ResultBox
            rows={[
              { action: 'Check-Raise', hands: ['CPFS', 'Combo Draw'] },
              { action: 'Check-Call',  hands: ['Thick Value', 'High-Equity Draw'] },
            ]}
          />
          <WhySection id="oop-turn-big-why">
            <p>Big flop bet + turn continuation = a strong, polarized range. Villain's not bluffing much here.</p>
            <p>Your raises must be polarized: only hands that are genuinely happy getting all the chips in (sets, two-pair, nut draws with 12+ outs).</p>
            <p>Thick value just calls — raising risks isolating against hands that dominate you, especially deep.</p>
            <p>High-equity draws have enough equity to call but not enough fold equity to make a raise profitable.</p>
          </WhySection>
        </div>

        {/* SMALL flop stab */}
        <div className="border-l-2 border-blue-700/50 pl-4">
          <BranchLabel label="SMALL flop stab → continues turn" color="blue" />
          <ResultBox
            rows={[
              { action: 'Lead / Donk', hands: ['CPFS', 'Thick Value'] },
              { action: 'Check-Raise', hands: ['Combo Draw'] },
            ]}
            note="Villain under-double-barrels after small flop bets — lead made hands to capture value before they check back."
          />
          <WhySection id="oop-turn-small-why">
            <p>Villains who bet small on the flop often have a weak range and fail to follow through on the turn. If you check with a strong hand, you risk them checking back and giving you a free river with little pot growth.</p>
            <p><strong className="text-slate-300">Lead made hands</strong> (CPFS, thick value) to capture value from the hands that would have called a bet but would check behind.</p>
            <p><strong className="text-slate-300">Check-raise combo draws</strong> — they benefit from fold equity. If villain checks back, you get a free river. If they bet, you apply maximum pressure.</p>
          </WhySection>
        </div>
      </div>
    </SectionCard>
  );
}

// ─── IP sections ──────────────────────────────────────────────────────────────

function IpFlop() {
  return (
    <SectionCard id="ip-flop" title="IP Flop" subtitle="You 3-bet pre. Villain calls. Villain checks to you.">
      <div className="bg-slate-900 border border-slate-700/60 rounded-lg p-5">
        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Default Action</div>
        <div className="text-white font-semibold text-base mb-4">C-bet your entire range for a small size (1/3 to 40% pot)</div>
        <ResultBox
          rows={[{ action: 'C-Bet Small', hands: ['All hands'] }]}
          note="Strong hands raise, weak hands call. Keep your range wide. Set up turn and river pressure."
        />
      </div>
      <WhySection id="ip-flop-why">
        <p>In 3-bet pots the pot is already large, so you don't need a big bet to accomplish your goals. A small size:</p>
        <p>• Makes <strong className="text-slate-300">strong villain hands raise</strong>, telling you where you stand.</p>
        <p>• Keeps <strong className="text-slate-300">weak villain hands in</strong>, giving them a chance to make mistakes on later streets.</p>
        <p>• <strong className="text-slate-300">Villain has fewer top-pair combos</strong> in 3-bet pots than single-raised pots — more pocket pairs (TT-QQ) that will fold by turn or river.</p>
        <p>• Villain often puts you on A-K, so ace-high boards are good for your perceived range.</p>
        <p>Even if villain occasionally traps, the lower SPR means it's far less catastrophic than in a single-raised pot.</p>
      </WhySection>
    </SectionCard>
  );
}

function IpTurn() {
  return (
    <SectionCard id="ip-turn" title="IP Turn" subtitle="You c-bet small flop. Villain called. Villain checks turn.">
      <DecisionHeader question="Is villain's range capped or uncapped?" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UNCAPPED */}
        <div className="border-l-2 border-orange-700/50 pl-4">
          <BranchLabel label="UNCAPPED — villain can have strong hands" color="orange" />
          <DecisionHeader question="Will villain fast-play strong hands if you bet?" />

          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">NO — villain will trap/call</div>
              <ResultBox
                rows={[
                  { action: 'Bet Big', hands: ['Value'] },
                  { action: 'Check',   hands: ['Showdown Value', 'Bluff'] },
                ]}
              />
              <WhySection id="ip-turn-uncapped-no-why">
                <p>If villain won't raise strong hands, you can't rely on them to build the pot for you. With value, you must put the money in yourself — bet big.</p>
                <p>Don't bluff into an uncapped range that traps. Villain has too many hands that will call or raise you, making bluffs unprofitable.</p>
              </WhySection>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">YES — villain will raise</div>
              <ResultBox
                rows={[
                  { action: 'Bet Small', hands: ['Value', 'Bluff'] },
                  { action: 'Check',     hands: ['Showdown Value'] },
                ]}
              />
              <WhySection id="ip-turn-uncapped-yes-why">
                <p>Small bets work beautifully when villain fast-plays strong hands:</p>
                <p>• With <strong className="text-slate-300">value</strong>: small bet keeps weak hands in, and strong villain hands raise for you — building the pot without risking extra chips.</p>
                <p>• With <strong className="text-slate-300">bluffs</strong>: you risk less, weak hands call and may fold river, and strong villain hands reveal themselves by raising — you can release cheaply.</p>
              </WhySection>
            </div>
          </div>
        </div>

        {/* CAPPED */}
        <div className="border-l-2 border-violet-700/50 pl-4">
          <BranchLabel label="CAPPED — villain unlikely to have the nuts" color="purple" />
          <DecisionHeader question="Does villain have inelastic hands?" factors={['Inelastic = will call even if you bet large (top pair, strong draws, flush draws, pair + draw)']} />

          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">YES — inelastic calling hands</div>
              <ResultBox
                rows={[
                  { action: 'Bet Big', hands: ['Value', 'Bluff'] },
                  { action: 'Check',   hands: ['Showdown Value'] },
                ]}
                note="Plan river SPR carefully when sizing up with bluffs."
              />
              <WhySection id="ip-turn-capped-yes-why">
                <p>Villain is capped and will call big bets anyway — extract maximum value.</p>
                <p>With bluffs, the capped range can't hold the nuts often, so large bets apply real pressure. But size with the river in mind — you want to preserve an SPR that lets you apply pressure on the river too.</p>
              </WhySection>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">NO — elastic, mostly foldable hands</div>
              <ResultBox
                rows={[
                  { action: 'Bet Small', hands: ['Value', 'Bluff'] },
                  { action: 'Check',     hands: ['Showdown Value'] },
                ]}
              />
              <WhySection id="ip-turn-capped-no-why">
                <p>If villain's range is mostly elastic (folds to big bets), a large bet folds out all the value you're trying to extract.</p>
                <p>Small bets keep weaker hands in for another street. Value and bluffs share the same turn plan — they diverge on the river. With value you want two streets of calls; with bluffs you want a call now then a fold on the river.</p>
              </WhySection>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function IpRiver() {
  return (
    <SectionCard id="ip-river" title="IP River" subtitle="The same framework applies — villain's range determines your sizing.">
      <DecisionHeader question="Is villain's range capped or uncapped?" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* UNCAPPED */}
        <div className="border-l-2 border-orange-700/50 pl-4">
          <BranchLabel label="UNCAPPED — villain can have strong hands" color="orange" />
          <DecisionHeader question="Will villain fast-play (raise) strong hands?" />

          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">YES — villain will raise</div>
              <ResultBox
                rows={[
                  { action: 'Bet Small',  hands: ['Value'] },
                  { action: 'Bet Medium', hands: ['Bluff'] },
                ]}
              />
              <WhySection id="ip-river-uncapped-yes-why">
                <p><strong className="text-slate-300">Small value bet:</strong> Gets called by weak hands and induces raises from strong villain hands. You get max value either way.</p>
                <p><strong className="text-slate-300">Medium bluff:</strong> A small bluff gets called by everything, including strong hands that will raise. A huge bluff only gets called by the nuts. A medium size targets the one-pair hands you actually want to fold — top pair, second pair, weak pocket pairs.</p>
              </WhySection>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">NO — villain will call/trap</div>
              <ResultBox
                rows={[
                  { action: 'Bet Big', hands: ['Value'] },
                ]}
                note="With passive opponents, you must size up for value — they won't raise for you."
              />
              <WhySection id="ip-river-uncapped-no-why">
                <p>If villain is passive and won't raise strong hands, you cannot rely on check-inducing action. You need to build the pot yourself with value.</p>
                <p>Be careful bluffing into passive uncapped ranges — villain will call with a wide range of medium-strength hands.</p>
              </WhySection>
            </div>
          </div>
        </div>

        {/* CAPPED */}
        <div className="border-l-2 border-violet-700/50 pl-4">
          <BranchLabel label="CAPPED — villain unlikely to have the nuts" color="purple" />
          <DecisionHeader question="Does villain have inelastic hands (will call big bets)?" />

          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">YES — inelastic calling hands</div>
              <ResultBox
                rows={[
                  { action: 'Bet Big',   hands: ['Value'] },
                  { action: 'Bet Small', hands: ['Bluff'] },
                ]}
              />
              <WhySection id="ip-river-capped-yes-why">
                <p><strong className="text-slate-300">Big value bet:</strong> If villain has top pair and won't fold, punish them with a large bet or jam. They're committed to calling.</p>
                <p><strong className="text-slate-300">Small bluff:</strong> The stubborn top-pair hands aren't folding to a large bluff anyway. Bluff small to fold out the <em>bottom</em> of their range — missed draws, weak pairs — not the inelastic hands.</p>
              </WhySection>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">NO — elastic, foldable hands</div>
              <ResultBox
                rows={[
                  { action: 'Bet Small', hands: ['Value'] },
                  { action: 'Bet Large', hands: ['Bluff'] },
                ]}
              />
              <WhySection id="ip-river-capped-no-why">
                <p>This is the key exploit: if villain's range is capped and elastic (folds to big bets):</p>
                <p><strong className="text-slate-300">Small value:</strong> Jamming for value makes worse hands fold. So you choose the largest size worse hands will still call.</p>
                <p><strong className="text-slate-300">Large bluff:</strong> The exact same hands that would fold to a jam if you had value — top pair, second pair — are now the target of your bluff. Since you can't jam for value because they'd fold, your bluffs can jam for precisely that reason.</p>
                <p>This is a natural balance: your value and bluffs use opposite sizings, making you hard to exploit.</p>
              </WhySection>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Glossary ─────────────────────────────────────────────────────────────────

const GLOSSARY_TERMS = [
  { term: 'CPFS', def: 'Can Play For Stacks — a hand strong enough to be happy getting all the money in (sets, two-pair on a safe board, nut draws).' },
  { term: 'Thick Value', def: 'A strong made hand happy betting for value, but not always happy stacking off very deep (e.g., TPTK).' },
  { term: 'Thin Value', def: 'A hand that beats some of villain\'s range but not a dominant portion of it. Marginal value bet.' },
  { term: 'Showdown Value (SDV)', def: 'A medium-strength hand that can win at showdown but doesn\'t want to inflate the pot (e.g., middle pair, small pocket pair).' },
  { term: 'Combo Draw', def: 'A draw with many outs, typically a straight + flush draw or pair + strong draw (usually 12–15+ outs).' },
  { term: 'Inelastic Hand', def: 'A calling hand that will call regardless of bet size — top pair on a safe board, flush draws, etc. The call frequency doesn\'t drop much as the bet grows.' },
  { term: 'Capped Range', def: 'Opponent\'s range is unlikely to contain the strongest possible hands. Sets a ceiling on how strong they can be.' },
  { term: 'Uncapped Range', def: 'Opponent can still have very strong or nutted hands. No ceiling on their strength.' },
  { term: 'SPR', def: 'Stack-to-pot ratio — effective stack divided by pot. Lower SPR means stacks are in more naturally.' },
  { term: 'OOP / IP', def: 'Out of position / In position. OOP acts first on every post-flop street; IP acts last.' },
  { term: 'Wet / Dynamic Board', def: 'A board with many draws and cards that can significantly change the nuts on later streets (e.g., J♠ T♣ 8♦).' },
  { term: 'Static / Dry Board', def: 'A board with few draws where the nuts rarely change on later streets (e.g., A♠ 9♦ 2♣ rainbow).' },
  { term: 'Lead / Donk Bet', def: 'Betting into the pre-flop aggressor instead of checking to them. Often used OOP on the turn to deny free cards when villain\'s range is weak.' },
];

function Glossary() {
  const [open, setOpen] = useState(false);
  return (
    <section id="glossary" className="mb-10 scroll-mt-20">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-lg font-bold text-white hover:text-slate-300 transition-colors"
      >
        {open ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
        Key Terms
      </button>
      {open && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {GLOSSARY_TERMS.map(({ term, def }) => (
            <div key={term} className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3">
              <div className="text-sm font-semibold text-white mb-0.5">{term}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{def}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '#oop-flop',  label: 'OOP Flop' },
  { href: '#oop-stab',  label: 'OOP vs Stab' },
  { href: '#oop-turn',  label: 'OOP Turn' },
  { href: '#ip-flop',   label: 'IP Flop' },
  { href: '#ip-turn',   label: 'IP Turn' },
  { href: '#ip-river',  label: 'IP River' },
  { href: '#glossary',  label: 'Glossary' },
];

// ─── Right sidebar nav ────────────────────────────────────────────────────────

function SideNav({ activeId }: { activeId: string }) {
  const activeIndex = NAV_LINKS.findIndex(l => l.href.slice(1) === activeId);

  return (
    <nav className="hidden lg:flex flex-col fixed right-6 top-1/2 -translate-y-1/2 z-40 items-end">
      {NAV_LINKS.map(({ href, label }, i) => {
        const isActive = i === activeIndex;
        const isAdjacent = Math.abs(i - activeIndex) === 1;
        const gap = isActive
          ? 'mt-5 mb-5'
          : isAdjacent
          ? 'mt-2 mb-2'
          : 'mt-1 mb-1';

        return (
          <a
            key={href}
            href={href}
            className={[
              'group flex items-center gap-2 justify-end transition-all duration-300',
              gap,
              isActive ? '' : 'opacity-25 hover:opacity-60',
            ].join(' ')}
          >
            <span
              className={[
                'whitespace-nowrap transition-all duration-300',
                isActive
                  ? 'text-sm text-white font-semibold'
                  : 'text-xs text-slate-400 group-hover:text-slate-200',
              ].join(' ')}
            >
              — {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ThreeBetFlowchartPage() {
  const [activeId, setActiveId] = useState('oop-flop');

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top header — no nav links, those moved to right sidebar */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
          <Link href="/poker" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm shrink-0">
            <ChevronLeft className="w-4 h-4" />
            Strategy
          </Link>
          <div className="w-px h-4 bg-slate-700 shrink-0" />
          <div className="text-white font-semibold text-sm shrink-0">3-Bet Pots</div>
        </div>
      </header>

      <SideNav activeId={activeId} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">3-Bet Pot Navigation</h1>
          <p className="text-slate-400 max-w-2xl">
            Complete decision flowchart for post-flop play in 3-bet pots. Click <span className="text-slate-300 font-medium">Why?</span> on any node to see the reasoning behind the recommendation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-700 inline-block" /> Decision</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-700 inline-block" /> Bet / Lead</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-violet-700 inline-block" /> Check-Raise</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-700 inline-block" /> Check-Call</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-700 inline-block" /> Check-Fold</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-600 inline-block" /> Check</div>
          </div>
        </div>

        <Glossary />

        {/* OOP Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-slate-800" />
            <div className="px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-bold text-slate-300 uppercase tracking-widest">
              Out of Position
            </div>
            <div className="h-px flex-1 bg-slate-800" />
          </div>
          <OopFlop />
          <OopFacingStab />
          <OopTurn />
        </div>

        {/* IP Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-slate-800" />
            <div className="px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-sm font-bold text-slate-300 uppercase tracking-widest">
              In Position
            </div>
            <div className="h-px flex-1 bg-slate-800" />
          </div>
          <IpFlop />
          <IpTurn />
          <IpRiver />
        </div>

        {/* Key takeaways */}
        <section className="mb-12">
          <h3 className="text-lg font-bold text-white mb-4">Biggest Takeaways</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Check more OOP',
                body: 'On wet/dynamic boards, checking your entire range lets villain make mistakes — they over-stab, reveal info through sizing, and fail to protect their check-back range.',
              },
              {
                num: '02',
                title: 'C-bet small IP',
                body: 'In 3-bet pots the pot is already large. A small c-bet keeps weak hands in, induces raises from strong hands, and costs little if you\'re behind.',
              },
              {
                num: '03',
                title: 'Think about villain\'s range',
                body: 'On turns and rivers, stop thinking only about your hand. Ask: Is villain capped? Will they fast-play? Do they have inelastic calling hands? That\'s what determines sizing.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="text-3xl font-black text-slate-700 mb-2">{num}</div>
                <div className="text-white font-semibold mb-2">{title}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
