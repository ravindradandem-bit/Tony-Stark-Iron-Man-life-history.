import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, ShieldAlert } from 'lucide-react';
import { starkAudio } from '../utils/audio';

interface TerminalSectionProps {
  onOpenVault: () => void;
  onInitiateProtocol: () => void;
}

interface LogEntry {
  id: string;
  text: string;
  type: 'system' | 'user' | 'primary' | 'warning' | 'tertiary';
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({
  onOpenVault,
  onInitiateProtocol,
}) => {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', text: '> SYSTEM INITIALIZED. PROTOCOL \'BARN DANCE\' OFFLINE.', type: 'system' },
    { id: '2', text: '> J.A.R.V.I.S. RESTORATION SEED: SYNCHRONIZED.', type: 'primary' },
    { id: '3', text: '> ENCRYPTION HASH: 0x9AF03B42_TONY_STARK_3000', type: 'system' },
    { id: '4', text: '> ALL 85 ARMOR BLUEPRINTS ENCRYPTED UNDER STARK TRUST PROTOCOL 10.', type: 'tertiary' },
    { id: '5', text: '> READY FOR PROPRIETARY ARCHIVE QUERY. (Type help or test below)', type: 'primary' },
  ]);
  const [inputVal, setInputVal] = useState<string>('');
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    starkAudio.playClick(1500, 0.03);

    const userEntry: LogEntry = {
      id: String(Date.now()),
      text: `> ${inputVal}`,
      type: 'user',
    };

    let responseEntry: LogEntry;

    if (cmd === 'help') {
      responseEntry = {
        id: String(Date.now() + 1),
        text: `> COMMANDS: 'override' (vault access), 'nanotech', 'jarvis', 'status', '3000', 'arc', 'repulsor', 'suits', 'clear'`,
        type: 'primary',
      };
    } else if (cmd === 'override') {
      starkAudio.playOverdrive();
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> OVERRIDE ACCEPTED: Stark Executive Clearance Level 10 unsealed. Launching classified vault.',
        type: 'tertiary',
      };
      setTimeout(() => {
        onOpenVault();
      }, 700);
    } else if (cmd === 'nanotech') {
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> NANOTECH DISPERSION: 8.4 x 10^14 particles in active lattice matrix. Cohesion at 99.8%.',
        type: 'primary',
      };
    } else if (cmd === 'jarvis') {
      starkAudio.speak('At your service, sir. The house seems quite empty without you.');
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> J.A.R.V.I.S.: "At your service, sir. The house seems quite empty without you."',
        type: 'primary',
      };
    } else if (cmd === 'status') {
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> ALL PRIMARY NODES NOMINAL. MEMORIAL ARCHIVE INTEGRITY: 100%. TELEMETRY: GREEN.',
        type: 'primary',
      };
    } else if (cmd.includes('3000') || cmd.includes('love')) {
      starkAudio.speak('I love you three thousand.');
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> TRANSMISSION: "I love you 3,000." - Rest in peace, Tony Stark.',
        type: 'tertiary',
      };
    } else if (cmd === 'arc' || cmd === 'protocol') {
      starkAudio.playOverdrive();
      onInitiateProtocol();
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> ARC OVERDRIVE ENGAGED: Power boosted to 12.0 GJ/s. Surge dissipation nominal.',
        type: 'primary',
      };
    } else if (cmd === 'repulsor') {
      starkAudio.playRepulsor();
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> REPULSOR TEST FIRED: Palm stabilizers discharging 4.2 Gigawatts kinetic thrust.',
        type: 'warning',
      };
    } else if (cmd === 'suits') {
      responseEntry = {
        id: String(Date.now() + 1),
        text: '> SUITS REGISTERED: Mark I through Mark LXXXV. All telemetry archives online.',
        type: 'primary',
      };
    } else if (cmd === 'clear') {
      setLogs([
        { id: String(Date.now()), text: '> CONSOLE CLEARED. STARK-OS v94.2.1-SEC ACTIVE.', type: 'system' },
      ]);
      setInputVal('');
      return;
    } else {
      responseEntry = {
        id: String(Date.now() + 1),
        text: `> COMMAND '${cmd}' NOT RECOGNIZED. Type 'help' for operational directives.`,
        type: 'warning',
      };
    }

    setLogs((prev) => [...prev, userEntry, responseEntry]);
    setInputVal('');
  };

  return (
    <section className="w-full px-gutter-sm md:px-gutter-lg py-space-xl">
      <div className="max-w-5xl mx-auto rounded-xl bg-[#262a33] p-space-lg shadow-2xl flex flex-col gap-space-md border border-[#3c494d]/60">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#3c494d]/40 pb-2">
          <div className="flex items-center gap-space-xs">
            <div className="w-3 h-3 rounded-full bg-[#a0001f] shadow-[0_0_6px_rgba(160,0,31,0.6)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ecc075] shadow-[0_0_6px_rgba(236,192,117,0.6)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#00d9ff] shadow-[0_0_6px_rgba(0,217,255,0.6)]"></div>
            <span className="ml-space-xs font-label-sm text-[#859398] tracking-widest uppercase font-mono">
              STARK-OS // PROPRIETARY FIRMWARE v94.2.1-SEC
            </span>
          </div>
          <span className="font-label-sm text-[#00d9ff] uppercase font-bold tracking-widest font-mono">
            ALPHA-1 CLEARANCE VERIFIED
          </span>
        </div>

        {/* Terminal Output Display */}
        <div
          ref={screenRef}
          className="h-48 overflow-y-auto p-space-md rounded bg-[#0a0e16] font-label-sm text-[#dfe2ee] flex flex-col gap-1 font-mono border border-[#1c2028]"
        >
          {logs.map((log) => {
            let color = 'text-[#859398]';
            if (log.type === 'primary') color = 'text-[#00d9ff]';
            if (log.type === 'tertiary') color = 'text-[#ffdeaa] font-bold';
            if (log.type === 'warning') color = 'text-[#ffb3b1]';
            if (log.type === 'user') color = 'text-[#dfe2ee] font-bold';

            return (
              <p key={log.id} className={`${color} leading-relaxed break-all`}>
                {log.text}
              </p>
            );
          })}
        </div>

        {/* Terminal Input Field */}
        <form onSubmit={handleCommandSubmit} className="flex gap-space-xs">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[#00d9ff] font-bold">
              &gt;
            </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter Stark command (e.g., 'override', 'nanotech', 'jarvis', 'status', '3000')..."
              className="w-full pl-8 pr-4 py-space-sm rounded bg-[#181c24] font-label-sm text-[#dfe2ee] placeholder:text-[#859398] focus:outline-none focus:ring-1 focus:ring-[#00d9ff] border border-[#3c494d]/40 font-mono"
            />
          </div>
          <button
            type="submit"
            className="px-space-lg py-space-sm rounded bg-[#00d9ff] text-[#003641] font-label-sm uppercase font-bold tracking-wider hover:bg-[#afecff] transition-colors flex items-center gap-1 cursor-pointer shadow-[0_0_15px_rgba(0,217,255,0.3)]"
          >
            <span>EXECUTE</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
          <span className="text-[#859398]">QUICK MACROS:</span>
          {['override', 'nanotech', 'jarvis', 'status', '3000', 'suits', 'repulsor'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => {
                setInputVal(cmd);
                starkAudio.playClick(1200, 0.02);
              }}
              className="px-2 py-0.5 rounded bg-[#181c24] text-[#00d9ff] hover:bg-[#31353e] border border-[#00d9ff]/20 cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Footnote */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[#859398] font-label-sm gap-space-xs pt-space-xs border-t border-[#3c494d]/30 font-mono text-[11px]">
          <span className="flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-[#a0001f]" />
            STARK INDUSTRIES PROPRIETARY ASSET // UNAUTHORIZED BREACH PUNISHABLE BY SENTINEL INTERCEPTION
          </span>
          <span className="text-[#ecc075]">PROOF THAT TONY STARK HAS A HEART</span>
        </div>
      </div>
    </section>
  );
};
