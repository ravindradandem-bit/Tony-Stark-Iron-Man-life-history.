import React, { useState } from 'react';
import { X, Lock, Key, ShieldCheck, FileText, Download, Check } from 'lucide-react';
import { starkAudio } from '../utils/audio';

interface ClassifiedVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClassifiedVaultModal: React.FC<ClassifiedVaultModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<number>(0);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const vaultFiles = [
    {
      title: 'DOC-85: MK-LXXXV QUANTUM HARNESS SCHEMATICS',
      classification: 'TOP SECRET // LEVEL 10',
      date: 'OCTOBER 2023',
      content:
        'Bi-directional nano-channeling matrix designed to siphon cosmic gamma radiation across 6 discrete stone sockets into an integrated vibranium palm conduit. Warning: biological synaptic load requires secondary artificial neural buffer.',
      code: '0x994F_QUANTUM_CONDUCTOR_VIB_85',
      metrics: [
        { label: 'GAMMA TOLERANCE', value: '5,000 Roentgens' },
        { label: 'NANITE DENSITY', value: '4.8B / mm³' },
        { label: 'FAIL-SAFE', value: 'Synaptic Divert 100%' },
      ],
    },
    {
      title: 'DOC-44: VERONICA SATELLITE ORBITAL DROP CODES',
      classification: 'RESTRICTED // AVENGERS ALPHA',
      date: 'MAY 2015',
      content:
        'Continuous low-Earth geosynchronous satellite housing modular replacement limbs, hydraulic jackhammers, and sedative gas cannisters for Mark XLIV Hulkbuster engagement protocol.',
      code: '0x712E_ORBITAL_VERONICA_PAYLOAD',
      metrics: [
        { label: 'ORBITAL ALTITUDE', value: '420 km Low-Earth' },
        { label: 'DROP LATENCY', value: '88 Seconds Global' },
        { label: 'SPARE LIMBS', value: '14 Sub-Assemblies' },
      ],
    },
    {
      title: 'DOC-MOBIUS: EIGENVALUE TEMPORAL GEODESIC',
      classification: 'CLASSIFIED // STARK QUANTUM TRUST',
      date: 'FALL 2023',
      content:
        'Proof that an inverted Möbius strip resolves Deutsch Proposition divergence in closed timelike curves. Stabilizes chrono-drift to within 0.0000001 femtoseconds during Planck-scale traversal.',
      code: 'EIGEN_INV_MOBIUS_SPECTRAL_DECOMP',
      metrics: [
        { label: 'TENSOR FIELD', value: 'Riemann-Christoffel' },
        { label: 'PLANCK SCALE', value: '1.616 × 10⁻³⁵ m' },
        { label: 'DRIFT CANCEL', value: '100.0000%' },
      ],
    },
    {
      title: 'DOC-TRUST: MORGAN & PEPPER MEMORIAL HOLOGRAM',
      classification: 'FAMILY VAULT // PERSONAL ARCHIVE',
      date: 'OCTOBER 2023',
      content:
        'Personal holographic testament recorded in the cabin living room prior to the time heist. Contains instructions for the Stark Industries Foundation and the immortalized message: "I love you in tons... I love you 3,000."',
      code: 'MS_3000_PERSONAL_HELMET_LOG',
      metrics: [
        { label: 'ENCRYPTION', value: 'Stark Family Biometric' },
        { label: 'TRANSMITTER', value: 'Mark 85 Helmet Lens' },
        { label: 'STATUS', value: 'Archived Permanently' },
      ],
    },
  ];

  const handleDownload = () => {
    starkAudio.playClick(1700, 0.04);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#07090d]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#181c24] border border-[#00d9ff]/50 rounded-xl max-w-4xl w-full p-6 shadow-[0_0_60px_rgba(0,217,255,0.3)] relative max-h-[90vh] flex flex-col gap-4 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#262a33] pb-3">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#00d9ff]" />
            <div>
              <span className="font-label-sm text-[#00d9ff] font-mono tracking-widest block">
                CLASSIFIED ARCHIVES // SECURITY LEVEL 10
              </span>
              <h2 className="text-xl font-bold uppercase text-[#dfe2ee] font-mono">
                STARK CONFIDENTIAL VAULT
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              starkAudio.playClick(1000, 0.03);
              onClose();
            }}
            className="p-2 text-[#859398] hover:text-[#00d9ff] rounded-lg bg-[#262a33] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 overflow-hidden">
          {/* File selector menu */}
          <div className="md:col-span-4 flex flex-col gap-2 overflow-y-auto pr-1">
            <span className="text-xs font-mono text-[#859398] uppercase">
              // CLASSIFIED DOSSIERS
            </span>
            {vaultFiles.map((file, idx) => (
              <button
                key={idx}
                onClick={() => {
                  starkAudio.playClick(1300, 0.02);
                  setSelectedFile(idx);
                }}
                className={`text-left p-3 rounded-lg border transition-all cursor-pointer font-mono text-xs ${
                  selectedFile === idx
                    ? 'bg-[#00d9ff]/15 border-[#00d9ff] text-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.2)]'
                    : 'bg-[#1c2028] border-[#262a33] text-[#bbc9ce] hover:bg-[#262a33]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold">{file.classification}</span>
                  <Key className="w-3 h-3 text-[#ecc075]" />
                </div>
                <p className="line-clamp-2 text-[11px] text-[#dfe2ee] font-sans">
                  {file.title}
                </p>
              </button>
            ))}
          </div>

          {/* Dossier Viewer */}
          <div className="md:col-span-8 bg-[#0f131b] rounded-lg p-5 border border-[#262a33] flex flex-col justify-between overflow-y-auto font-mono text-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#262a33] pb-2">
                <span className="text-[#ecc075] font-bold">
                  {vaultFiles[selectedFile].classification}
                </span>
                <span className="text-[#859398]">
                  {vaultFiles[selectedFile].date}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#dfe2ee] font-sans mb-1">
                  {vaultFiles[selectedFile].title}
                </h3>
                <span className="text-[#00d9ff] text-[11px]">
                  HASH: {vaultFiles[selectedFile].code}
                </span>
              </div>

              <div className="p-3 bg-[#181c24] rounded border border-[#262a33] text-[#bbc9ce] font-sans text-sm leading-relaxed">
                {vaultFiles[selectedFile].content}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {vaultFiles[selectedFile].metrics.map((m, i) => (
                  <div key={i} className="p-2 bg-[#181c24] rounded border border-[#262a33]">
                    <span className="text-[#859398] block text-[10px]">{m.label}</span>
                    <span className="text-[#00d9ff] font-bold">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#262a33] flex items-center justify-between">
              <span className="text-[#859398] text-[11px] flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#00d9ff]" />
                AUTHENTICATED BY STARK AI NETWORK
              </span>
              <button
                onClick={handleDownload}
                className="px-3 py-1.5 rounded bg-[#00d9ff] text-[#003641] font-bold hover:bg-[#afecff] transition-colors flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(0,217,255,0.4)]"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>DECRYPTED</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>EXPORT SCHEMATIC</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
