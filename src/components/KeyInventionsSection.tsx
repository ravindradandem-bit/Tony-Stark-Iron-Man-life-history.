import React, { useState } from 'react';
import { Cpu, Zap, Radio, Orbit, Activity, RefreshCw } from 'lucide-react';
import { starkAudio } from '../utils/audio';

export const KeyInventionsSection: React.FC = () => {
  const [acceleratorActive, setAcceleratorActive] = useState<boolean>(false);
  const [mobiusAngle, setMobiusAngle] = useState<number>(0);
  const [eigenvalue, setEigenvalue] = useState<number>(4.2189);

  const triggerAccelerator = () => {
    starkAudio.playOverdrive();
    setAcceleratorActive(true);
    setTimeout(() => {
      setAcceleratorActive(false);
    }, 3000);
  };

  const recomputeMobius = () => {
    starkAudio.playClick(1500, 0.04);
    setMobiusAngle((prev) => (prev + 90) % 360);
    setEigenvalue(Number((4.0 + Math.random() * 0.5).toFixed(4)));
  };

  return (
    <section id="key-inventions" className="w-full px-gutter-sm md:px-gutter-lg py-space-xl bg-[#181c24]/40 border-t border-b border-[#262a33]">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-[#00d9ff]">
            <Cpu className="w-5 h-5 text-[#00d9ff]" />
            <span className="font-label-md uppercase tracking-widest font-mono">
              RESEARCH &amp; PATENTS // STARK R&amp;D
            </span>
          </div>
          <h2 className="font-headline-lg font-bold text-[#dfe2ee] uppercase">
            TECHNOLOGICAL GENIUS &amp; DISRUPTIONS
          </h2>
          <p className="font-body-md text-[#bbc9ce] max-w-2xl">
            Revolutionary engineering feats that permanently altered quantum mechanics, artificial intelligence, and global energy infrastructure.
          </p>
        </div>

        {/* Inventions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* Invention 1: Arc Reactor */}
          <div className="p-space-lg rounded-xl bg-[#1c2028] shadow-lg flex flex-col justify-between border border-[#3c494d]/40 hover:border-[#00d9ff]/50 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <Zap className="w-7 h-7 text-[#00d9ff]" />
                <span className="font-label-sm text-[#859398] uppercase font-mono">PATENT #001-ARC</span>
              </div>
              <h3 className="font-title-lg font-bold text-[#dfe2ee] uppercase">
                Miniature Arc Reactor
              </h3>
              <p className="font-body-sm text-[#bbc9ce]">
                Condensing Howard Stark's massive industrial fusion generator into a 3-inch palladium/vibranium cylinder capable of producing 3 to 12 Gigajoules/sec zero-emission clean power.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-[#181c24] p-space-sm rounded border border-[#262a33]">
              <div className="flex justify-between font-label-sm">
                <span className="text-[#859398] font-mono">FUEL EMISSION:</span>
                <span className="text-[#00d9ff] font-bold font-mono">0.00% Zero-Carbon</span>
              </div>
              <div className="flex justify-between font-label-sm mt-1">
                <span className="text-[#859398] font-mono">CORE LIFE:</span>
                <span className="text-[#dfe2ee] font-mono">50 Human Lifetimes</span>
              </div>
            </div>
          </div>

          {/* Invention 2: Clean Energy & Stark Tower */}
          <div className="p-space-lg rounded-xl bg-[#1c2028] shadow-lg flex flex-col justify-between border border-[#3c494d]/40 hover:border-[#ffdeaa]/50 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <Activity className="w-7 h-7 text-[#ecc075]" />
                <span className="font-label-sm text-[#859398] uppercase font-mono">GRID-NYC-01</span>
              </div>
              <h3 className="font-title-lg font-bold text-[#dfe2ee] uppercase">
                Stark Tower Self-Sustaining Microgrid
              </h3>
              <p className="font-body-sm text-[#bbc9ce]">
                The first skyscraper in human history powered completely off-grid by an internal subterranean arc reactor, proving localized self-sufficient clean municipal energy was viable.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-[#181c24] p-space-sm rounded border border-[#262a33]">
              <div className="flex justify-between font-label-sm">
                <span className="text-[#859398] font-mono">METROPOLIS RUNTIME:</span>
                <span className="text-[#ffdeaa] font-bold font-mono">1 Year Independent</span>
              </div>
              <div className="flex justify-between font-label-sm mt-1">
                <span className="text-[#859398] font-mono">EFFICIENCY GAIN:</span>
                <span className="text-[#dfe2ee] font-mono">99.98% Conversion</span>
              </div>
            </div>
          </div>

          {/* Invention 3: AI Neural Systems */}
          <div className="p-space-lg rounded-xl bg-[#1c2028] shadow-lg flex flex-col justify-between border border-[#3c494d]/40 hover:border-[#00d9ff]/50 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <Radio className="w-7 h-7 text-[#00d9ff]" />
                <span className="font-label-sm text-[#859398] uppercase font-mono">AI-SYNTHESIS</span>
              </div>
              <h3 className="font-title-lg font-bold text-[#dfe2ee] uppercase">
                Cognitive Neural AI: J.A.R.V.I.S., F.R.I.D.A.Y., &amp; E.D.I.T.H.
              </h3>
              <p className="font-body-sm text-[#bbc9ce]">
                Pioneered sentient autonomous conversational operating systems. From J.A.R.V.I.S. (Just A Rather Very Intelligent System) to global defense satellite swarm E.D.I.T.H.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-[#181c24] p-space-sm rounded border border-[#262a33]">
              <div className="flex justify-between font-label-sm">
                <span className="text-[#859398] font-mono">HEURISTIC LEVEL:</span>
                <span className="text-[#00d9ff] font-bold font-mono">Sentient Class-IV</span>
              </div>
              <div className="flex justify-between font-label-sm mt-1">
                <span className="text-[#859398] font-mono">GLOBAL DEFENSE:</span>
                <span className="text-[#dfe2ee] font-mono">Orbital Drone Matrix</span>
              </div>
            </div>
          </div>

          {/* Invention 4: Badassium / New Element */}
          <div className="p-space-lg rounded-xl bg-[#1c2028] shadow-lg flex flex-col justify-between border border-[#3c494d]/40 hover:border-[#ffb3b1]/50 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <Orbit className={`w-7 h-7 text-[#ffb3b1] ${acceleratorActive ? 'animate-spin' : ''}`} />
                <span className="font-label-sm text-[#859398] uppercase font-mono">ELEMENT-NEW</span>
              </div>
              <h3 className="font-title-lg font-bold text-[#dfe2ee] uppercase">
                Particle Accelerator New Element Synthesis
              </h3>
              <p className="font-body-sm text-[#bbc9ce]">
                Decoding the hidden atomic blueprint locked inside the 1974 Stark Expo diorama, Tony constructed a prism particle accelerator in his garage to synthesize the non-toxic heavy isotope replacement for palladium.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-[#181c24] p-space-sm rounded border border-[#262a33]">
              <div className="flex justify-between font-label-sm">
                <span className="text-[#859398] font-mono">BLOOD TOXICITY:</span>
                <span className="text-[#00d9ff] font-bold font-mono">Reversed to 0%</span>
              </div>
              <div className="flex justify-between font-label-sm mt-1">
                <span className="text-[#859398] font-mono">ISOTOPE STABILITY:</span>
                <span className="text-[#dfe2ee] font-mono">Absolute Monocrystalline</span>
              </div>
              <button
                onClick={triggerAccelerator}
                className="mt-2 w-full py-1.5 px-2 bg-[#262a33] hover:bg-[#31353e] text-xs font-mono text-[#00d9ff] rounded border border-[#00d9ff]/30 flex items-center justify-center gap-1 cursor-pointer transition-colors"
              >
                <Zap className="w-3 h-3 text-[#ffdeaa]" />
                <span>{acceleratorActive ? 'PRISM BEAM FIRING...' : 'RUN PARTICLE BEAM SYNTHESIS'}</span>
              </button>
            </div>
          </div>

          {/* Invention 5: Time-Space GPS & Nano-Gauntlet */}
          <div className="p-space-lg rounded-xl bg-[#1c2028] shadow-lg flex flex-col justify-between md:col-span-2 lg:col-span-2 border border-[#3c494d]/40 hover:border-[#00d9ff]/50 transition-all">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={recomputeMobius}
                    title="Click to recalculate inverted Möbius strip eigenvalue"
                    className="p-1 hover:bg-[#262a33] rounded transition-colors cursor-pointer"
                  >
                    <RefreshCw
                      className="w-7 h-7 text-[#00d9ff] hover:rotate-180 transition-transform duration-500"
                    />
                  </button>
                  <span className="text-xs text-[#00d9ff] font-mono">[CLICK ICON TO RECALCULATE]</span>
                </div>
                <span className="font-label-sm text-[#859398] uppercase font-mono">QUANTUM-MOBIUS</span>
              </div>
              <h3 className="font-title-lg font-bold text-[#dfe2ee] uppercase">
                Time-Space GPS &amp; The Nano-Gauntlet
              </h3>
              <p className="font-body-sm text-[#bbc9ce]">
                Invented the quantum wrist-stabilizer utilizing the inverted Möbius strip formula, neutralizing Deutsch Proposition divergence during Planck-scale traversal. Paired with the Nano-Gauntlet, which channeled the unconstrained power of all six Infinity Stones without disintegrating before activation.
              </p>
            </div>
            <div className="mt-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-xs font-label-sm">
              <div className="p-space-xs bg-[#181c24] rounded border border-[#262a33]">
                <span className="text-[#859398] block text-[11px] font-mono">EIGENVALUE FORMULA</span>
                <span className="text-[#00d9ff] font-bold font-mono">λ = {eigenvalue} (Möbius Rot: {mobiusAngle}°)</span>
              </div>
              <div className="p-space-xs bg-[#181c24] rounded border border-[#262a33]">
                <span className="text-[#859398] block text-[11px] font-mono">CHRONITON DRIFT</span>
                <span className="text-[#dfe2ee] font-mono">± 0.0000001 femtoseconds</span>
              </div>
              <div className="p-space-xs bg-[#181c24] rounded border border-[#262a33]">
                <span className="text-[#859398] block text-[11px] font-mono">GAUNTLET ALLOY</span>
                <span className="text-[#ffdeaa] font-bold font-mono">Nanite Conductive Lattice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
