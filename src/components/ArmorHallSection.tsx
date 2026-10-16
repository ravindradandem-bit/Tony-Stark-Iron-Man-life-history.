import React, { useState } from 'react';
import { ARMOR_SUITS, ArmorSuit } from '../data/starkData';
import { Shield, Sparkles, X, Crosshair, Wrench, Zap } from 'lucide-react';
import { starkAudio } from '../utils/audio';

export const ArmorHallSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectSuit, setInspectSuit] = useState<ArmorSuit | null>(null);

  const categories = [
    { id: 'all', label: 'All Marks' },
    { id: 'proto', label: 'Prototypes' },
    { id: 'nanotech', label: 'Nanotech' },
    { id: 'heavy', label: 'Specialist' },
  ];

  const filteredSuits = ARMOR_SUITS.filter((suit) => {
    const matchesCat = selectedCategory === 'all' || suit.category === selectedCategory;
    const matchesSearch =
      suit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suit.mark.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suit.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suit.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleFilterClick = (catId: string) => {
    starkAudio.playClick(1300, 0.03);
    setSelectedCategory(catId);
  };

  const handleOpenSuitModal = (suit: ArmorSuit) => {
    starkAudio.playClick(1600, 0.05);
    setInspectSuit(suit);
  };

  return (
    <section id="armory-matrix" className="w-full px-gutter-sm md:px-gutter-lg py-space-xl bg-[#181c24]/50 border-t border-b border-[#262a33]">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs text-[#00d9ff] mb-space-xs">
              <Shield className="w-5 h-5 text-[#00d9ff]" />
              <span className="font-label-md uppercase tracking-widest font-mono">
                HALL OF ARMORS // ARCHIVAL VAULT
              </span>
            </div>
            <h2 className="font-headline-lg font-bold text-[#dfe2ee] uppercase">
              SUIT EVOLUTION MATRIX
            </h2>
            <p className="font-body-md text-[#bbc9ce] max-w-2xl mt-space-xs">
              From scrap iron forged under mortal duress in the caves of Gulmira to molecular nanolattices housing cosmic singularities.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-space-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`px-space-md py-space-xs rounded-full font-label-sm uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#00d9ff] text-[#003641] font-bold shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                    : 'bg-[#262a33] text-[#bbc9ce] hover:text-[#00d9ff] hover:bg-[#31353e]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Armor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {filteredSuits.map((suit) => {
            const isFeatured = suit.featured;

            if (isFeatured) {
              return (
                <div
                  key={suit.id}
                  onClick={() => handleOpenSuitModal(suit)}
                  className="armor-card group p-space-md rounded-xl bg-gradient-to-br from-[#1c2028] via-[#262a33] to-[#1c2028] shadow-2xl flex flex-col justify-between hover:border-[#00d9ff]/50 border border-[#3c494d]/60 transition-all md:col-span-2 lg:col-span-3 cursor-pointer relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                    <div className="md:col-span-5 relative h-72 md:h-80 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#111927] via-[#0d121c] to-[#080b11] border border-[#3c494d]/40 group-hover:border-[#00d9ff]/40 transition-colors p-3">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.12)_0%,transparent_70%)] pointer-events-none" />
                      <img
                        className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] group-hover:scale-105 group-hover:drop-shadow-[0_15px_30px_rgba(0,217,255,0.25)] transition-all duration-500"
                        src={suit.imageUrl}
                        alt={suit.imageAlt}
                      />
                      <span className="absolute top-3 left-3 px-space-xs py-0.5 rounded bg-[#0a0e16]/90 font-label-sm text-[#00d9ff] tracking-wider uppercase font-bold border border-[#00d9ff]/30 z-10">
                        {suit.mark}
                      </span>
                      <span className="absolute top-3 right-3 px-space-xs py-0.5 rounded bg-[#0a0e16]/90 font-label-sm text-[#ffdeaa] tracking-wider uppercase border border-[#ecc075]/30 z-10">
                        {suit.location}
                      </span>
                    </div>

                    <div className="md:col-span-7 flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-display-xl-mobile font-bold text-[#dfe2ee] uppercase group-hover:text-[#00d9ff] transition-colors">
                            {suit.name}
                          </h3>
                          <span className="font-label-sm text-[#ffdeaa] uppercase tracking-wider block font-bold font-mono">
                            {suit.categoryLabel}
                          </span>
                        </div>
                        <span className="px-space-sm py-space-xs rounded bg-[#00d9ff] text-[#003641] font-label-sm font-bold uppercase tracking-widest hidden sm:inline shadow-[0_0_12px_rgba(0,217,255,0.4)]">
                          ENDGAME ALPHA
                        </span>
                      </div>

                      <p className="font-body-md text-[#bbc9ce]">
                        {suit.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xs font-label-sm">
                        {suit.specs.map((sp, idx) => (
                          <div key={idx} className="p-space-xs bg-[#181c24] rounded border border-[#262a33]">
                            <span className="text-[#859398] block text-[11px] font-mono">{sp.label}</span>
                            <span className={`font-bold truncate block ${sp.color || 'text-[#dfe2ee]'}`}>
                              {sp.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 text-[#00d9ff] text-xs font-mono">
                        <span className="flex items-center gap-1">
                          <Crosshair className="w-3.5 h-3.5" />
                          CLICK TO EXPAND BLUEPRINT DOSSIER
                        </span>
                        <span className="text-[#859398]">VIB-LATTICE 100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={suit.id}
                onClick={() => handleOpenSuitModal(suit)}
                className="armor-card group p-space-md rounded-xl bg-[#1c2028] shadow-lg flex flex-col justify-between hover:bg-[#262a33] hover:border-[#00d9ff]/40 border border-[#3c494d]/30 transition-all cursor-pointer relative"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="relative h-60 w-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#111927] via-[#0d121c] to-[#080b11] border border-[#3c494d]/30 group-hover:border-[#00d9ff]/30 transition-colors p-2">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.08)_0%,transparent_70%)] pointer-events-none" />
                    <img
                      className="w-full h-full object-contain filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.85)] group-hover:scale-105 group-hover:drop-shadow-[0_12px_24px_rgba(0,217,255,0.2)] transition-all duration-500"
                      src={suit.imageUrl}
                      alt={suit.imageAlt}
                    />
                    <span
                      className={`absolute top-3 left-3 px-space-xs py-0.5 rounded bg-[#0a0e16]/90 font-label-sm tracking-wider uppercase font-bold border z-10 ${
                        suit.tagColor === 'secondary'
                          ? 'text-[#ffb3b1] border-[#ffb3b1]/30'
                          : suit.tagColor === 'tertiary'
                          ? 'text-[#ffdeaa] border-[#ecc075]/30'
                          : 'text-[#00d9ff] border-[#00d9ff]/30'
                      }`}
                    >
                      {suit.mark}
                    </span>
                    <span className="absolute top-3 right-3 px-space-xs py-0.5 rounded bg-[#0a0e16]/90 font-label-sm text-[#859398] tracking-wider uppercase border border-[#3c494d]/40 z-10">
                      {suit.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-headline-md font-bold text-[#dfe2ee] uppercase group-hover:text-[#00d9ff] transition-colors">
                      {suit.name}
                    </h3>
                    <span
                      className={`font-label-sm uppercase tracking-wider block font-mono ${
                        suit.tagColor === 'secondary'
                          ? 'text-[#ffb3b1]'
                          : suit.tagColor === 'tertiary'
                          ? 'text-[#ffdeaa]'
                          : 'text-[#00d9ff]'
                      }`}
                    >
                      {suit.categoryLabel}
                    </span>
                  </div>

                  <p className="font-body-sm text-[#bbc9ce] line-clamp-3">
                    {suit.description}
                  </p>
                </div>

                <div className="mt-space-md pt-space-sm bg-[#181c24] p-space-sm rounded-lg flex flex-col gap-1 font-label-sm border border-[#262a33]">
                  {suit.specs.map((sp, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-[#859398]">{sp.label}:</span>
                      <span className={sp.color || 'text-[#dfe2ee]'}>{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredSuits.length === 0 && (
          <div className="p-12 text-center bg-[#1c2028] rounded-xl border border-[#3c494d]">
            <p className="text-[#859398] font-mono">No Stark armor blueprints matched your criteria.</p>
          </div>
        )}
      </div>

      {/* Suit Blueprint Modal */}
      {inspectSuit && (
        <div className="fixed inset-0 z-50 bg-[#07090d]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#181c24] border border-[#00d9ff]/50 rounded-xl max-w-3xl w-full p-6 shadow-[0_0_50px_rgba(0,217,255,0.25)] relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                starkAudio.playClick(1000, 0.03);
                setInspectSuit(null);
              }}
              className="absolute top-4 right-4 p-2 text-[#859398] hover:text-[#00d9ff] transition-colors rounded-lg bg-[#262a33] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#00d9ff] mb-2">
              <Crosshair className="w-4 h-4 animate-spin" />
              <span>CLASSIFIED BLUEPRINT // {inspectSuit.mark}</span>
            </div>

            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#dfe2ee]">
              {inspectSuit.name} <span className="text-[#ecc075] text-lg font-mono">({inspectSuit.categoryLabel})</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="rounded-lg overflow-hidden border border-[#262a33] bg-gradient-to-b from-[#111927] via-[#0a0e16] to-[#080b11] relative">
                <div className="h-72 w-full flex items-center justify-center p-3 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.12)_0%,transparent_70%)] pointer-events-none" />
                  <img
                    src={inspectSuit.imageUrl}
                    alt={inspectSuit.imageAlt}
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                  />
                </div>
                <div className="p-3 bg-[#0f131b] text-xs font-mono text-[#859398] flex justify-between border-t border-[#262a33]">
                  <span>CHASSIS ARCHIVE</span>
                  <span className="text-[#00d9ff]">YEAR: {inspectSuit.year}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-[#bbc9ce] leading-relaxed">
                  {inspectSuit.fullDescription}
                </p>

                <div className="bg-[#0f131b] p-3 rounded-lg border border-[#262a33] flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#00d9ff] uppercase font-mono">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Power Core & Propulsion</span>
                  </div>
                  <p className="text-xs text-[#dfe2ee] font-mono">&gt; {inspectSuit.powerSource}</p>
                  <p className="text-xs text-[#859398] font-mono">&gt; {inspectSuit.flightCapability}</p>
                </div>

                <div className="bg-[#0f131b] p-3 rounded-lg border border-[#262a33] flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#ecc075] uppercase font-mono">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Tactical Armament Array</span>
                  </div>
                  <ul className="text-xs text-[#dfe2ee] space-y-1 font-mono">
                    {inspectSuit.weaponry.map((w, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="text-[#00d9ff]">•</span> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#262a33] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#859398]">
              <span>STATUS: {inspectSuit.status}</span>
              <button
                onClick={() => {
                  starkAudio.playRepulsor();
                }}
                className="px-4 py-2 rounded bg-[#00d9ff]/20 hover:bg-[#00d9ff] text-[#00d9ff] hover:text-[#003641] transition-all flex items-center gap-1.5 border border-[#00d9ff]/40 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENGAGE REPULSOR CALIBRATION</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
