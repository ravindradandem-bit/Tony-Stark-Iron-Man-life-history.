import React, { useState } from 'react';
import { STARK_QUOTES, QuoteItem } from '../data/starkData';
import { Quote, Copy, Check, Volume2 } from 'lucide-react';
import { starkAudio } from '../utils/audio';

export const QuotesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyQuote = (q: QuoteItem) => {
    starkAudio.playClick(1400, 0.03);
    navigator.clipboard.writeText(`${q.quote} — Tony Stark, ${q.source}`);
    setCopiedId(q.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleSpeakQuote = (q: QuoteItem) => {
    starkAudio.playClick(1000, 0.04);
    // Strip smart quotes
    const cleanQuote = q.quote.replace(/[“”"']/g, '');
    starkAudio.speak(cleanQuote);
  };

  return (
    <section id="quotes" className="w-full px-gutter-sm md:px-gutter-lg py-space-xl bg-[#181c24]/30 border-t border-b border-[#262a33]">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        <div>
          <div className="flex items-center gap-space-xs text-[#00d9ff] mb-space-xs">
            <Quote className="w-5 h-5 text-[#00d9ff]" />
            <span className="font-label-md uppercase tracking-widest font-mono">
              VERBATIM LOGS // THE STARK DOCTRINE
            </span>
          </div>
          <h2 className="font-headline-lg font-bold text-[#dfe2ee] uppercase">
            MEMORABLE QUOTES &amp; PHILOSOPHY
          </h2>
          <p className="font-body-md text-[#bbc9ce] max-w-2xl mt-space-xs">
            Unfiltered wit, lethal irony, unwavering accountability, and heroic conviction.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {STARK_QUOTES.map((item) => {
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className={`p-space-lg rounded-xl bg-[#1c2028] shadow-md flex flex-col justify-between hover:bg-[#262a33] transition-colors border border-[#3c494d]/30 group ${
                  item.isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-[#00d9ff] opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleSpeakQuote(item)}
                        className="p-1.5 rounded hover:bg-[#31353e] text-[#859398] hover:text-[#00d9ff] transition-colors cursor-pointer"
                        title="Vocalize Quote"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCopyQuote(item)}
                        className="p-1.5 rounded hover:bg-[#31353e] text-[#859398] hover:text-[#00d9ff] transition-colors cursor-pointer"
                        title="Copy to Clipboard"
                      >
                        {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <p
                    className={`text-[#dfe2ee] font-semibold leading-snug ${
                      item.isLarge
                        ? 'font-headline-md md:font-headline-lg'
                        : 'font-headline-md'
                    }`}
                  >
                    {item.quote}
                  </p>
                </div>

                <div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-[#859398] border-t border-[#262a33] pt-3 font-mono">
                  <span>{item.source}</span>
                  <span className={item.highlightColor || 'text-[#ffdeaa]'}>
                    {item.speakerContext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
