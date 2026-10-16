import React from 'react';
import { Volume2, VolumeX, Shield, Lock, Menu, X } from 'lucide-react';
import { starkAudio } from '../utils/audio';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  onOpenVault: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  isAudioActive,
  onToggleAudio,
  onOpenVault,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'armory-matrix', label: 'The Armor Hall' },
    { id: 'life-and-legacy', label: 'Life & Legacy' },
    { id: 'key-inventions', label: 'Key Inventions' },
    { id: 'final-sacrifice', label: 'Final Sacrifice' },
    { id: 'quotes', label: 'Quotes' },
  ];

  const handleNavClick = (id: string) => {
    starkAudio.playClick(1400, 0.03);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e16]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.6)] border-b border-[#00d9ff]/20">
      <div className="h-20 w-full px-gutter-lg flex items-center justify-between gap-space-md max-w-7xl mx-auto">
        {/* Brand / Crest */}
        <div className="flex items-center gap-space-md shrink-0 cursor-pointer" onClick={() => handleNavClick('overview')}>
          <img
            alt="Stark Arc Reactor Emblem"
            className="h-9 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Xinb0APClIKHGIkfgIjTSGnAgcpw-EM4oHjye9rn1mQo5O3KwhJJQQDKK85teHD7jzYf6-vUdux5h3pGEK9blqVheZca4HO_HvZFJJb6J4nbwjS8qXQBwifXbvcizFWmsn8rWyyf5Qtg71Lzb777vBv6PCacIC8Ob3zD6mtSwBAxzuqgthJLSimFquP8jPwnHtty4G7JRB708blNhFRKA_vEWjLfQo20Zs7NC69-iMEw57TaYpanLPxg"
          />
          <div className="flex flex-col">
            <span className="font-title-lg tracking-wider text-[#afecff] font-bold uppercase drop-shadow-[0_0_12px_rgba(0,217,255,0.3)]">
              STARK ARCHIVES
            </span>
            <span className="font-label-sm text-[#859398] tracking-widest uppercase">
              SEC-LEVEL 10 // MEMORIAL
            </span>
          </div>

          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-[#181c24] border border-[#00d9ff]/30 ml-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d9ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d9ff]"></span>
            </span>
            <span className="font-label-sm text-[#00d9ff] tracking-widest">
              SYSTEM STATUS: ONLINE // J.A.R.V.I.S. PROTOCOLS ACTIVE
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-label-md uppercase tracking-wider transition-all py-space-xs relative cursor-pointer ${
                  isActive
                    ? 'text-[#00d9ff] border-b-2 border-[#00d9ff] font-semibold'
                    : 'text-[#bbc9ce] hover:text-[#dfe2ee]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
          {/* Audio Protocol Button */}
          <button
            onClick={() => {
              starkAudio.playClick(1000, 0.05);
              onToggleAudio();
            }}
            className={`flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-[#262a33] border transition-all cursor-pointer ${
              isAudioActive
                ? 'border-[#00d9ff] text-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.3)] bg-[#00d9ff]/10'
                : 'border-[#3c494d] text-[#bbc9ce] hover:text-[#afecff] hover:border-[#00d9ff]/50'
            }`}
            title="Toggle J.A.R.V.I.S. Ambient Audio Synthesizer"
            type="button"
          >
            {isAudioActive ? (
              <Volume2 className="w-4 h-4 text-[#00d9ff] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#859398]" />
            )}
            <span className="font-label-sm uppercase hidden sm:inline tracking-wider">
              {isAudioActive ? 'AUDIO: ACTIVE' : 'AUDIO: STANDBY'}
            </span>
          </button>

          {/* Access Classified Vault */}
          <button
            onClick={() => {
              starkAudio.playClick(1600, 0.04);
              onOpenVault();
            }}
            className="px-space-md py-space-sm rounded bg-[#00d9ff]/10 border border-[#00d9ff] text-[#00d9ff] font-label-md uppercase tracking-wider hover:bg-[#00d9ff] hover:text-[#003641] transition-all flex items-center gap-space-xs shadow-[0_0_15px_rgba(0,217,255,0.25)] cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span className="hidden md:inline">ACCESS ARCHIVES</span>
            <span className="md:hidden">VAULT</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#bbc9ce] hover:text-[#00d9ff] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Avatar / Seal */}
          <div
            onClick={onOpenVault}
            title="Stark Clearance Alpha-1"
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00d9ff] to-[#afecff] flex items-center justify-center shrink-0 cursor-pointer shadow-[0_0_10px_rgba(0,217,255,0.5)] hover:scale-105 transition-transform"
          >
            <Shield className="w-4 h-4 text-[#003641]" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e16]/98 border-b border-[#00d9ff]/30 px-6 py-4 flex flex-col gap-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-label-md uppercase tracking-wider py-2 border-b border-[#1c2028] ${
                activeSection === item.id ? 'text-[#00d9ff] font-bold' : 'text-[#bbc9ce]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between text-xs text-[#859398] font-mono">
            <span>SEC-10 // CLASSIFIED</span>
            <span className="text-[#00d9ff]">J.A.R.V.I.S. V94.2</span>
          </div>
        </div>
      )}
    </header>
  );
};
