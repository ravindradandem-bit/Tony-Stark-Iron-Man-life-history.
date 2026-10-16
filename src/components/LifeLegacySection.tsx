import React, { useState } from 'react';
import { EPOCHS, EpochItem } from '../data/starkData';
import { History, BookOpen, ChevronRight } from 'lucide-react';
import { starkAudio } from '../utils/audio';

export const LifeLegacySection: React.FC = () => {
  const [activeEpoch, setActiveEpoch] = useState<string | null>(null);

  const handleEpochClick = (epoch: EpochItem) => {
    starkAudio.playClick(1200, 0.03);
    setActiveEpoch((prev) => (prev === epoch.id ? null : epoch.id));
  };

  return (
    <section id="life-and-legacy" className="w-full px-gutter-sm md:px-gutter-lg py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        <div>
          <div className="flex items-center gap-space-xs text-[#ffdeaa] mb-space-xs">
            <History className="w-5 h-5 text-[#ecc075]" />
            <span className="font-label-md uppercase tracking-widest font-mono">
              BIOGRAPHICAL RECONSTRUCTION // 1970 — 2023
            </span>
          </div>
          <h2 className="font-headline-lg font-bold text-[#dfe2ee] uppercase">
            LIFE &amp; TRANSFORMATION CHRONOLOGY
          </h2>
          <p className="font-body-md text-[#bbc9ce] max-w-2xl mt-space-xs">
            The psychological, ideological, and heroic metamorphosis of Anthony Edward Stark across five decades of mortal trials.
          </p>
        </div>

        {/* Timeline Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {EPOCHS.map((epoch) => {
            const isExpanded = activeEpoch === epoch.id;

            return (
              <div
                key={epoch.id}
                onClick={() => handleEpochClick(epoch)}
                className={`p-space-lg rounded-xl bg-[#1c2028] shadow-md flex flex-col justify-between hover:bg-[#262a33] transition-all cursor-pointer border ${
                  isExpanded ? 'border-[#00d9ff] ring-1 ring-[#00d9ff]/50 bg-[#262a33]' : 'border-[#3c494d]/30'
                }`}
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className={`font-label-lg font-bold font-mono ${epoch.color}`}>
                      {epoch.years}
                    </span>
                    <span className="font-label-sm text-[#859398] uppercase font-mono">
                      {epoch.epoch}
                    </span>
                  </div>

                  <h3 className="font-headline-md font-bold text-[#dfe2ee]">
                    {epoch.title}
                  </h3>

                  <p className="font-body-sm text-[#bbc9ce]">
                    {epoch.description}
                  </p>

                  {isExpanded && (
                    <div className="mt-2 pt-2 border-t border-[#3c494d]/40 text-xs text-[#00d9ff] font-mono animate-fadeIn flex flex-col gap-1">
                      <span className="text-[#859398]">// DECLASSIFIED DOSSIER LOG:</span>
                      <p className="text-[#dfe2ee]">
                        Security clearance confirms psychological milestone: transition from isolated arms developer to universal defender.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-space-md pt-space-xs flex items-center justify-between text-[#859398] font-label-sm border-t border-[#262a33] pt-3">
                  <div className="flex items-center gap-space-xs">
                    <BookOpen className="w-3.5 h-3.5 text-[#00d9ff]" />
                    <span className="truncate">{epoch.metaText}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 text-[#00d9ff] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
