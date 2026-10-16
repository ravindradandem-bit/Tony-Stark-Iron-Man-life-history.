import React from 'react';
import { Heart } from 'lucide-react';
import { starkAudio } from '../utils/audio';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0e16] border-t border-[#00d9ff]/20 py-space-xl">
      <div className="w-full px-gutter-lg max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
        {/* Left Brand */}
        <div className="flex flex-col gap-space-xs text-center md:text-left">
          <span className="font-headline-md text-[#00d9ff] font-bold tracking-tight uppercase font-mono">
            STARK INDUSTRIES
          </span>
          <span className="font-body-sm text-[#bbc9ce]">
            PROPRIETARY ARCHIVE DIVISION // CLASSIFIED FLIGHT LOGS &amp; AVIONICS
          </span>
        </div>

        {/* Center Memorial Copyright */}
        <div className="font-label-sm text-[#859398] tracking-widest text-center font-mono">
          © STARK INDUSTRIES MEMORIAL ARCHIVE. ALL PROTOCOLS ENCRYPTED // 3000
        </div>

        {/* Right Heart Badge */}
        <div
          onClick={() => {
            starkAudio.playClick(1100, 0.05);
            starkAudio.speak('Proof that Tony Stark has a heart.');
          }}
          className="flex items-center gap-space-sm cursor-pointer group"
          title="Click memorial emblem"
        >
          <span className="font-label-sm text-[#ffdeaa] border border-[#ecc075]/40 px-space-sm py-space-xs rounded bg-[#ecc075]/10 uppercase tracking-widest font-mono group-hover:bg-[#ecc075]/20 group-hover:border-[#ecc075] transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(236,192,117,0.2)]">
            <Heart className="w-3.5 h-3.5 fill-[#ecc075] text-[#ecc075]" />
            <span>PROOF THAT TONY STARK HAS A HEART</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
