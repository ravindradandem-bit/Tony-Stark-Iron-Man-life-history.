/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ArmorHallSection } from './components/ArmorHallSection';
import { LifeLegacySection } from './components/LifeLegacySection';
import { KeyInventionsSection } from './components/KeyInventionsSection';
import { FinalSacrificeSection } from './components/FinalSacrificeSection';
import { QuotesSection } from './components/QuotesSection';
import { TerminalSection } from './components/TerminalSection';
import { Footer } from './components/Footer';
import { ClassifiedVaultModal } from './components/ClassifiedVaultModal';
import { starkAudio } from './utils/audio';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [protocolAlert, setProtocolAlert] = useState<string | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'armory-matrix',
        'life-and-legacy',
        'key-inventions',
        'final-sacrifice',
        'quotes',
      ];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleAudio = () => {
    const nextState = !isAudioActive;
    setIsAudioActive(nextState);
    starkAudio.setMuted(!nextState);

    if (nextState) {
      starkAudio.playOverdrive();
      starkAudio.speak('J.A.R.V.I.S. memorial audio system online.');
    }
  };

  const handleInitiateProtocol = () => {
    setProtocolAlert('OVERDRIVE ENGAGED // MARK LXXXV POWER HARNESS STABILIZED AT 100%');
    setTimeout(() => {
      setProtocolAlert(null);
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0f131b] text-[#dfe2ee] font-body-md relative overflow-x-hidden selection:bg-[#00d9ff] selection:text-[#003641]">
      {/* Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#0f131b]">
        <div className="flex flex-col w-full relative overflow-hidden">
          {/* Dynamic Atmospheric Background Grid & Glows */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hud-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path
                    d="M 48 0 L 0 0 0 48"
                    fill="none"
                    stroke="#00d9ff"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <circle cx="0" cy="0" r="1" fill="#00d9ff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hud-grid)" />
            </svg>
          </div>

          {/* Atmospheric ambient halos */}
          <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-[#a0001f]/15 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-1/2 -right-64 w-[700px] h-[700px] bg-[#00d9ff]/10 rounded-full blur-[160px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[#ecc075]/10 rounded-full blur-[150px] pointer-events-none"></div>

          {/* Protocol Alert Toast */}
          {protocolAlert && (
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0a0e16]/95 border border-[#00d9ff] text-[#00d9ff] px-6 py-2.5 rounded-full shadow-[0_0_30px_rgba(0,217,255,0.6)] font-mono text-xs uppercase tracking-wider flex items-center gap-2 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-ping"></span>
              <span>{protocolAlert}</span>
            </div>
          )}

          {/* Section 1: Hero - Tony Stark Genius. Billionaire. Inventor. Hero. */}
          <HeroSection
            onExploreArmory={() => handleNavigate('armory-matrix')}
            onInitiateProtocol={handleInitiateProtocol}
            isAudioActive={isAudioActive}
            onToggleAudio={handleToggleAudio}
          />

          {/* Section 2: The Armor Hall (Suit Evolution Matrix) */}
          <ArmorHallSection />

          {/* Section 3: Life & Transformation Chronology */}
          <LifeLegacySection />

          {/* Section 4: Key Inventions & Technological Genius */}
          <KeyInventionsSection />

          {/* Section 5: The Final Sacrifice & "I Love You 3000" */}
          <FinalSacrificeSection />

          {/* Section 6: Memorable Quotes & Philosophy */}
          <QuotesSection />

          {/* Section 7: Interactive Stark-OS Terminal */}
          <TerminalSection
            onOpenVault={() => setIsVaultOpen(true)}
            onInitiateProtocol={handleInitiateProtocol}
          />
        </div>
      </main>

      {/* Classified Vault Modal */}
      <ClassifiedVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
