import React, { useState, useEffect } from 'react';
import { Bolt, View, Radio, Activity, Shield } from 'lucide-react';
import { starkAudio } from '../utils/audio';

interface HeroSectionProps {
  onExploreArmory: () => void;
  onInitiateProtocol: () => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreArmory,
  onInitiateProtocol,
  isAudioActive,
  onToggleAudio,
}) => {
  const [outputPower, setOutputPower] = useState<number>(3.0);
  const [isOverdrive, setIsOverdrive] = useState<boolean>(false);
  const [nanotechIntegrity, setNanotechIntegrity] = useState<number>(99.8);
  const [chronoTime, setChronoTime] = useState<string>('00:00:01');
  const [logIndex, setLogIndex] = useState<number>(0);

  const logs = [
    { text: 'Nanoparticle flow stabilized across chest lattice.', type: 'normal' },
    { text: 'Flight stabilization thrusters at 100% vector ready.', type: 'primary' },
    { text: 'Sub-cutaneous neural link sync: 0.12ms latency.', type: 'normal' },
    { text: 'Quantum GPS harmonic locked to 1999, 2012, 2014 coordinates.', type: 'primary' },
    { text: 'Cosmic radiation dampener conduits armed.', type: 'tertiary' },
    { text: 'Repulsor capacitor pre-charged to 4.2 Gigawatts.', type: 'normal' },
  ];

  // Chrono tick
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const hrs = String(Math.floor(elapsed / 3600)).padStart(2, '0');
      const mins = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
      const secs = String(elapsed % 60).padStart(2, '0');
      setChronoTime(`${hrs}:${mins}:${secs}`);
    }, 1000);

    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 4500);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [logs.length]);

  const handleProtocolClick = () => {
    starkAudio.playOverdrive();
    setIsOverdrive(true);
    setOutputPower(12.0);
    setNanotechIntegrity(100);
    onInitiateProtocol();

    setTimeout(() => {
      setIsOverdrive(false);
      setOutputPower(3.0);
      setNanotechIntegrity(99.8);
    }, 4000);
  };

  const handleReactorClick = () => {
    starkAudio.playRepulsor();
    setIsOverdrive((prev) => !prev);
    setOutputPower((prev) => (prev === 3.0 ? 12.0 : 3.0));
  };

  return (
    <section id="overview" className="relative w-full px-gutter-sm md:px-gutter-lg pt-space-lg pb-space-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Column: Biography & Call To Action */}
        <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
          {/* Top Status Pill */}
          <div className="flex items-center gap-space-sm w-fit px-space-md py-space-xs rounded-full bg-[#262a33] shadow-sm border border-[#00d9ff]/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d9ff] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d9ff]"></span>
            </span>
            <span className="font-label-sm tracking-widest text-[#00d9ff] uppercase font-bold">
              STARK INDUSTRIES // CLASSIFIED ARCHIVE ALPHA-1
            </span>
          </div>

          {/* Hero Headline */}
          <div className="flex flex-col">
            <span className="font-label-md text-[#ffdeaa] tracking-[0.25em] uppercase font-mono">
              DOCUMENTARY CODEX // 1970 — 2023
            </span>
            <h1 className="font-display-xl font-bold tracking-tighter text-[#dfe2ee] uppercase drop-shadow-[0_0_35px_rgba(0,217,255,0.25)]">
              TONY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-[#ffdeaa] to-[#ffb3b1]">
                STARK
              </span>
            </h1>
            <p className="font-title-lg text-[#afecff] tracking-wide font-medium mt-space-xs">
              Genius. Billionaire. Inventor. Hero.
            </p>
          </div>

          {/* Quotation Callout */}
          <div className="p-space-lg bg-[#1c2028]/70 rounded-xl shadow-xl relative overflow-hidden backdrop-blur-md border border-[#3c494d]/40 group hover:border-[#00d9ff]/40 transition-colors">
            <div className="absolute -right-6 -bottom-6 opacity-10 text-[#00d9ff] pointer-events-none group-hover:scale-110 transition-transform">
              <Shield className="w-36 h-36" />
            </div>
            <p className="font-body-lg italic text-[#dfe2ee] leading-relaxed relative z-10">
              “Behind the armor was a brilliant mind. Behind the genius was a man who discovered that true greatness isn't measured by what you build, but by what you're willing to sacrifice.”
            </p>
            <div className="mt-space-sm flex items-center justify-between border-t border-[#3c494d]/30 pt-3">
              <span className="font-label-sm uppercase text-[#859398]">
                ARCHIVAL EPITAPH // TRIBUTE LOG 3000
              </span>
              <span className="font-label-sm uppercase text-[#00d9ff] font-bold tracking-wider">
                STATUS: IMMORTALIZED
              </span>
            </div>
          </div>

          {/* Interactive CTA Cluster */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <button
              onClick={handleProtocolClick}
              className={`px-space-lg py-space-sm rounded-lg font-label-md uppercase tracking-widest transition-all flex items-center gap-space-xs group cursor-pointer ${
                isOverdrive
                  ? 'bg-[#00d9ff] text-[#003641] shadow-[0_0_40px_rgba(0,217,255,0.9)] scale-105'
                  : 'bg-[#00d9ff] text-[#003641] shadow-[0_0_24px_rgba(0,217,255,0.45)] hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] hover:bg-[#afecff]'
              }`}
            >
              <Bolt className={`w-4 h-4 transition-transform duration-300 ${isOverdrive ? 'animate-spin' : 'group-hover:rotate-90'}`} />
              <span>{isOverdrive ? 'Protocol Active' : 'Initiate Protocol'}</span>
            </button>

            <button
              onClick={() => {
                starkAudio.playClick(1100, 0.04);
                onExploreArmory();
              }}
              className="px-space-lg py-space-sm rounded-lg bg-[#a0001f]/40 text-[#ffb3b1] border border-[#a0001f]/60 font-label-md uppercase tracking-widest shadow-md hover:bg-[#a0001f]/70 hover:border-[#ffb3b1]/70 transition-all flex items-center gap-space-xs cursor-pointer"
            >
              <View className="w-4 h-4" />
              <span>Explore Armory</span>
            </button>

            <button
              onClick={() => {
                starkAudio.playClick(900, 0.04);
                onToggleAudio();
              }}
              className={`px-space-md py-space-sm rounded-lg bg-[#262a33] font-label-md uppercase tracking-wider transition-colors flex items-center gap-space-xs border cursor-pointer ${
                isAudioActive
                  ? 'border-[#00d9ff] text-[#00d9ff] bg-[#00d9ff]/10'
                  : 'border-[#3c494d] text-[#bbc9ce] hover:text-[#00d9ff]'
              }`}
            >
              <Radio className={`w-4 h-4 text-[#00d9ff] ${isAudioActive ? 'animate-pulse' : ''}`} />
              <span>{isAudioActive ? 'J.A.R.V.I.S.: Active' : 'J.A.R.V.I.S. Audio: Standby'}</span>
            </button>
          </div>

          {/* Mini Stats Ribbon */}
          <div className="grid grid-cols-3 gap-space-sm pt-space-sm">
            <div className="p-space-sm rounded-lg bg-[#181c24] border border-[#262a33] hover:border-[#00d9ff]/40 transition-colors">
              <span className="font-label-sm text-[#859398] block">SUITS DESIGNED</span>
              <span className="font-headline-md text-[#dfe2ee] font-bold">85+</span>
            </div>
            <div className="p-space-sm rounded-lg bg-[#181c24] border border-[#262a33] hover:border-[#ffdeaa]/40 transition-colors">
              <span className="font-label-sm text-[#859398] block">CORE PATENTS</span>
              <span className="font-headline-md text-[#ffdeaa] font-bold">14,200</span>
            </div>
            <div className="p-space-sm rounded-lg bg-[#181c24] border border-[#262a33] hover:border-[#00d9ff]/40 transition-colors">
              <span className="font-label-sm text-[#859398] block">LIVES SAVED</span>
              <span className="font-headline-md text-[#00d9ff] font-bold">Trillions</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Diagnostic HUD & Arc Reactor Core */}
        <div className="lg:col-span-5 relative">
          <div className={`p-space-lg rounded-xl bg-[#262a33]/90 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col gap-space-md border transition-all duration-500 ${
            isOverdrive ? 'border-[#00d9ff] shadow-[0_0_40px_rgba(0,217,255,0.35)]' : 'border-[#3c494d]/60'
          }`}>
            {/* Top HUD Header */}
            <div className="flex items-center justify-between border-b border-[#3c494d]/40 pb-2">
              <div className="flex items-center gap-space-xs">
                <Activity className="w-5 h-5 text-[#00d9ff]" />
                <span className="font-label-md uppercase tracking-wider text-[#dfe2ee] font-bold">
                  MARK LXXXV // DIAGNOSTICS
                </span>
              </div>
              <span className="font-label-sm text-[#00d9ff] px-space-xs py-0.5 rounded bg-[#0a0e16] border border-[#00d9ff]/30 font-mono">
                TELEMETRY: SYNCED
              </span>
            </div>

            {/* Arc Reactor SVG Visualization */}
            <div
              onClick={handleReactorClick}
              title="Click Arc Reactor to toggle overdrive pulse"
              className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center py-space-sm cursor-pointer select-none group"
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                isOverdrive ? 'bg-[#00d9ff]/25 blur-3xl scale-110' : 'bg-[#00d9ff]/10 blur-2xl group-hover:bg-[#00d9ff]/20'
              }`}></div>

              <svg
                className="w-full h-full drop-shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                fill="none"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Ring with Ticks */}
                <circle
                  className="text-[#00d9ff]/20"
                  cx="150"
                  cy="150"
                  r="140"
                  stroke="currentColor"
                  strokeDasharray="4 6"
                  strokeWidth="1.5"
                ></circle>

                {/* Rotating Reticle Segment */}
                <circle
                  className={`text-[#00d9ff]/50 ${isOverdrive ? 'animate-[spin_4s_linear_infinite]' : 'animate-[spin_24s_linear_infinite]'}`}
                  cx="150"
                  cy="150"
                  r="125"
                  stroke="currentColor"
                  strokeDasharray="60 40 10 30"
                  strokeWidth="2.5"
                ></circle>

                {/* Middle Housing Ring */}
                <circle
                  className="text-[#00d9ff]/70"
                  cx="150"
                  cy="150"
                  r="95"
                  stroke="currentColor"
                  strokeWidth="3"
                ></circle>
                <circle className="text-[#0a0e16]" cx="150" cy="150" fill="currentColor" r="85"></circle>

                {/* Angular Solenoid Coils (10 Coils) */}
                <g
                  className={`${isOverdrive ? 'animate-[spin_8s_linear_infinite_reverse]' : 'animate-[spin_40s_linear_infinite_reverse]'}`}
                  style={{ transformOrigin: '150px 150px' }}
                >
                  <rect className="fill-[#ecc075] opacity-90 shadow-lg" height="24" rx="2" width="12" x="144" y="55"></rect>
                  <rect className="fill-[#ecc075] opacity-90" height="24" rx="2" width="12" x="144" y="221"></rect>
                  <rect className="fill-[#ecc075] opacity-90" height="12" rx="2" width="24" x="55" y="144"></rect>
                  <rect className="fill-[#ecc075] opacity-90" height="12" rx="2" width="24" x="221" y="144"></rect>
                  <rect className="fill-[#ecc075] opacity-80" height="18" rx="2" transform="rotate(45 89 89)" width="18" x="80" y="80"></rect>
                  <rect className="fill-[#ecc075] opacity-80" height="18" rx="2" transform="rotate(45 211 89)" width="18" x="202" y="80"></rect>
                  <rect className="fill-[#ecc075] opacity-80" height="18" rx="2" transform="rotate(45 89 211)" width="18" x="80" y="202"></rect>
                  <rect className="fill-[#ecc075] opacity-80" height="18" rx="2" transform="rotate(45 211 211)" width="18" x="202" y="202"></rect>
                </g>

                {/* Core Inner Arc Light Chamber */}
                <circle className="fill-[#31353e]" cx="150" cy="150" r="52"></circle>
                <circle
                  className={`text-[#00d9ff] ${isOverdrive ? 'animate-ping' : 'animate-pulse'}`}
                  cx="150"
                  cy="150"
                  r="44"
                  stroke="currentColor"
                  strokeWidth="2.5"
                ></circle>
                <circle className="fill-[#00d9ff]" cx="150" cy="150" r="30"></circle>
                <circle className="fill-[#afecff] animate-ping opacity-60" cx="150" cy="150" r="18"></circle>
                <circle className="fill-white" cx="150" cy="150" r="10"></circle>

                {/* Holographic Tri-lines */}
                <polygon
                  className="text-[#003641] opacity-90"
                  fill="none"
                  points="150,110 185,170 115,170"
                  stroke="currentColor"
                  strokeWidth="2"
                ></polygon>
              </svg>

              <div className="absolute bottom-2 text-center bg-[#0a0e16]/90 px-space-sm py-space-xs rounded-full border border-[#00d9ff]/40">
                <span className={`font-label-sm uppercase font-bold tracking-widest ${isOverdrive ? 'text-[#ffdeaa] animate-pulse' : 'text-[#00d9ff]'}`}>
                  {isOverdrive ? 'ARC CORE: 12.0 GJ/s (OVERDRIVE)' : 'ARC CORE: OVERDRIVE [CLICK]'}
                </span>
              </div>
            </div>

            {/* Telemetry Feed Cards */}
            <div className="grid grid-cols-2 gap-space-sm">
              <div className="p-space-sm rounded bg-[#0a0e16] border border-[#262a33]">
                <span className="font-label-sm text-[#859398] block font-mono">OUTPUT RATING</span>
                <span className="font-headline-md text-[#00d9ff] font-bold font-mono">
                  {outputPower.toFixed(1)} GJ/s
                </span>
                <div className="w-full bg-[#262a33] h-1.5 rounded mt-2 overflow-hidden">
                  <div
                    className="bg-[#00d9ff] h-full transition-all duration-500 shadow-[0_0_8px_rgba(0,217,255,0.8)]"
                    style={{ width: `${(outputPower / 12.0) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-space-sm rounded bg-[#0a0e16] border border-[#262a33]">
                <span className="font-label-sm text-[#859398] block font-mono">NANOTECH INTEGRITY</span>
                <span className="font-headline-md text-[#ffdeaa] font-bold font-mono">
                  {nanotechIntegrity}%
                </span>
                <div className="w-full bg-[#262a33] h-1.5 rounded mt-2 overflow-hidden">
                  <div
                    className="bg-[#ecc075] h-full transition-all duration-500 shadow-[0_0_8px_rgba(236,192,117,0.8)]"
                    style={{ width: `${nanotechIntegrity}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Live Log Console */}
            <div className="p-space-sm rounded bg-[#0a0e16] font-label-sm flex flex-col gap-1 text-[#bbc9ce] border border-[#262a33] font-mono">
              <div className="flex items-center justify-between text-[#859398] text-[11px] pb-1 border-b border-[#1c2028]">
                <span>// F.R.I.D.A.Y. AVIONICS FEED</span>
                <span className="text-[#00d9ff]">CHRONO: {chronoTime}</span>
              </div>
              <p className="text-[#dfe2ee] truncate transition-opacity duration-300">
                &gt; {logs[logIndex].text}
              </p>
              <p className="text-[#00d9ff] truncate transition-opacity duration-300">
                &gt; {logs[(logIndex + 1) % logs.length].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
