import React, { useState } from 'react';
import { Heart, Mic, AlertTriangle, Play, Pause } from 'lucide-react';
import { starkAudio } from '../utils/audio';

export const FinalSacrificeSection: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isPlayingMorgan, setIsPlayingMorgan] = useState<boolean>(false);

  const handlePlaySnapAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }
    starkAudio.playRepulsor();
    setIsPlayingAudio(true);
    setTimeout(() => {
      starkAudio.speak('And I... am... Iron Man.');
    }, 400);

    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 4500);
  };

  const handlePlayMorganHolo = () => {
    if (isPlayingMorgan) {
      setIsPlayingMorgan(false);
      return;
    }
    starkAudio.playClick(1000, 0.05);
    setIsPlayingMorgan(true);
    starkAudio.speak('I love you in tons... I love you three thousand.');

    setTimeout(() => {
      setIsPlayingMorgan(false);
    }, 4000);
  };

  return (
    <section id="final-sacrifice" className="relative w-full px-gutter-sm md:px-gutter-lg py-space-xl bg-[#0a0e16] overflow-hidden border-t border-b border-[#262a33]">
      {/* Ambient Memorial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e16] via-[#181c24]/30 to-[#0a0e16] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d9ff]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-space-lg z-10">
        {/* Memorial Header Badge */}
        <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-[#262a33] shadow-sm border border-[#ffdeaa]/30">
          <Heart className="w-4 h-4 text-[#ecc075] fill-[#ecc075]" />
          <span className="font-label-sm text-[#ffdeaa] uppercase tracking-widest font-bold font-mono">
            SACRED TIMELINE MEMORIAL // OCTOBER 2023
          </span>
        </div>

        {/* Verbatim Quotes */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-lg text-[#00d9ff] tracking-[0.2em] uppercase font-bold font-mono">
            THE TRANSCENDENT FAREWELL
          </span>
          <blockquote className="font-headline-lg md:font-display-xl font-bold text-[#dfe2ee] tracking-tight max-w-4xl">
            “Part of the journey is the end.”
          </blockquote>
        </div>

        {/* Soundwave & Snap Surge Display */}
        <div className="w-full max-w-2xl p-space-md rounded-xl bg-[#262a33]/80 backdrop-blur-md shadow-2xl flex flex-col gap-space-md border border-[#3c494d]/50">
          <div className="flex items-center justify-between text-left">
            <div>
              <span className="font-label-sm text-[#859398] block font-mono">
                ACOUSTIC SPECTROGRAM // CABIN RECORDING
              </span>
              <span className="font-headline-md text-[#dfe2ee] font-bold">
                “And I... am... Iron Man.”
              </span>
            </div>
            <button
              onClick={handlePlaySnapAudio}
              className={`p-3 rounded-full cursor-pointer transition-all ${
                isPlayingAudio ? 'bg-[#00d9ff] text-[#003641] shadow-[0_0_20px_rgba(0,217,255,0.7)]' : 'bg-[#181c24] text-[#ffb3b1] hover:bg-[#31353e]'
              }`}
              title="Play iconic final line"
            >
              {isPlayingAudio ? <Pause className="w-6 h-6 animate-pulse" /> : <Play className="w-6 h-6 fill-current" />}
            </button>
          </div>

          {/* Visualizer Waves */}
          <div className="h-16 w-full flex items-center justify-between gap-1.5 px-space-xs">
            {[4, 8, 12, 14, 10, 6, 14, 16, 14, 16, 12, 8, 5, 10, 14, 7, 3].map((height, i) => {
              const isSecondary = i >= 7 && i <= 9;
              return (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isSecondary
                      ? 'bg-[#ffb3b1] shadow-[0_0_8px_rgba(255,179,177,0.6)]'
                      : 'bg-[#00d9ff] shadow-[0_0_8px_rgba(0,217,255,0.6)]'
                  } ${isPlayingAudio ? 'animate-bounce' : ''}`}
                  style={{
                    height: isPlayingAudio ? `${Math.min(60, height * 4 + Math.random() * 20)}px` : `${height * 3}px`,
                    animationDelay: `${i * 60}ms`,
                  }}
                ></div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between font-label-sm pt-space-xs bg-[#181c24] p-space-sm rounded border border-[#262a33] font-mono gap-1">
            <span className="text-[#859398] uppercase">
              COSMIC GAMMA SURGE: <strong className="text-[#ffb3b1]">4,800 ROENTGENS</strong>
            </span>
            <span className="text-[#ffdeaa] uppercase font-bold">OUTCOME: ARMIES REDUCED TO ASH</span>
          </div>
        </div>

        {/* Floating Arc Reactor Floral Memorial Replica (High-Detail SVG) */}
        <div className="relative py-space-md flex flex-col items-center">
          <div className="w-60 h-60 relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#00d9ff]/20 blur-xl"></div>
            <svg
              className="w-full h-full drop-shadow-[0_0_25px_rgba(0,217,255,0.35)]"
              fill="none"
              viewBox="0 0 240 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Memorial Wreath Foliage Silhouette */}
              <circle
                className="text-[#353942] opacity-80"
                cx="120"
                cy="120"
                r="110"
                stroke="currentColor"
                strokeDasharray="12 18"
                strokeWidth="8"
              ></circle>
              <circle
                className="text-[#ffdeaa]/40"
                cx="120"
                cy="120"
                r="102"
                stroke="currentColor"
                strokeDasharray="6 12"
                strokeWidth="4"
              ></circle>

              {/* Metallic Enclosure Base */}
              <circle
                className="text-[#262a33]"
                cx="120"
                cy="120"
                fill="currentColor"
                r="88"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <circle
                className="text-[#ecc075]"
                cx="120"
                cy="120"
                r="76"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>

              {/* Copper Induction Coils around Wreath */}
              <g className="animate-[spin_60s_linear_infinite]" style={{ transformOrigin: '120px 120px' }}>
                <rect className="fill-[#ecc075]" height="16" rx="2" width="12" x="114" y="46"></rect>
                <rect className="fill-[#ecc075]" height="16" rx="2" width="12" x="114" y="178"></rect>
                <rect className="fill-[#ecc075]" height="12" rx="2" width="16" x="46" y="114"></rect>
                <rect className="fill-[#ecc075]" height="12" rx="2" width="16" x="178" y="114"></rect>
                <rect className="fill-[#ecc075]" height="14" rx="2" transform="rotate(45 75 75)" width="14" x="68" y="68"></rect>
                <rect className="fill-[#ecc075]" height="14" rx="2" transform="rotate(45 165 75)" width="14" x="158" y="68"></rect>
                <rect className="fill-[#ecc075]" height="14" rx="2" transform="rotate(45 75 165)" width="14" x="68" y="158"></rect>
                <rect className="fill-[#ecc075]" height="14" rx="2" transform="rotate(45 165 165)" width="14" x="158" y="158"></rect>
              </g>

              {/* Inner Heart Arc Core */}
              <circle className="fill-[#0a0e16]" cx="120" cy="120" r="46" stroke="currentColor" strokeWidth="2"></circle>
              <circle className="fill-[#00d9ff]/20 animate-pulse" cx="120" cy="120" r="38"></circle>
              <circle className="fill-[#00d9ff]" cx="120" cy="120" r="26"></circle>
              <circle className="fill-[#afecff]" cx="120" cy="120" r="14"></circle>
            </svg>
          </div>

          <div className="mt-space-md p-space-sm bg-[#1c2028] px-space-lg rounded-full shadow-lg border border-[#ecc075]/40">
            <span className="font-label-md text-[#ffdeaa] uppercase tracking-widest font-bold font-mono">
              “PROOF THAT TONY STARK HAS A HEART”
            </span>
          </div>
        </div>

        {/* Morgan Stark Transmission Card */}
        <div className="p-space-lg rounded-xl bg-[#1c2028] max-w-xl w-full shadow-xl text-left flex flex-col gap-space-xs border border-[#3c494d]/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs text-[#00d9ff]">
              <Mic className="w-4 h-4 text-[#00d9ff]" />
              <span className="font-label-sm uppercase tracking-widest font-bold font-mono">
                CABIN LIVING ROOM // HOLO-PLAYBACK
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-[#859398] font-mono">OCTOBER 2023</span>
              <button
                onClick={handlePlayMorganHolo}
                className="px-2 py-0.5 rounded bg-[#00d9ff]/10 hover:bg-[#00d9ff] text-[#00d9ff] hover:text-[#003641] text-xs font-mono border border-[#00d9ff]/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>PLAY</span>
              </button>
            </div>
          </div>
          <p className="font-body-lg text-[#dfe2ee] italic mt-space-xs">
            “I love you in tons... I love you 3,000.”
          </p>
          <span className="font-label-sm text-[#859398] uppercase tracking-wider block mt-space-xs font-mono">
            TRANSCRIPT RECOVERY ID: MS-3000 // RECORDED VIA HELMET HOLO-EMITTER
          </span>
        </div>
      </div>
    </section>
  );
};
