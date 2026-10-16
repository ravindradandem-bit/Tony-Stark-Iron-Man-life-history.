export interface ArmorSuit {
  id: string;
  mark: string;
  name: string;
  category: 'proto' | 'nanotech' | 'heavy';
  categoryLabel: string;
  year: number;
  location: string;
  tagColor: string; // 'tertiary' | 'secondary' | 'primary'
  description: string;
  fullDescription: string;
  imageUrl: string;
  imageAlt: string;
  specs: {
    label: string;
    value: string;
    highlight?: boolean;
    color?: string;
  }[];
  weaponry: string[];
  powerSource: string;
  flightCapability: string;
  status: string;
  featured?: boolean;
}

export const ARMOR_SUITS: ArmorSuit[] = [
  {
    id: 'mk-001',
    mark: 'MK-001 // 2008',
    name: 'MARK I',
    category: 'proto',
    categoryLabel: 'The Cave Prototype',
    year: 2008,
    location: 'AFGHANISTAN',
    tagColor: 'tertiary',
    description: 'Forged inside a terrorist stronghold under gunpoint. Constructed from scavenged Jericho missile casings and crude heavy plating.',
    fullDescription: 'Constructed under extreme mortal duress in the Gulmira caves alongside Ho Yinsen. Utilizing scavenged scrap metal, motorcycle steering gears, and manually wound solenoid coils around a miniature palladium Arc Reactor.',
    imageUrl: '/assets/mk1.png',
    imageAlt: 'Stark Mark I prototype heavy armor welded from jagged salvage metal and mortar casings, rugged hydraulic gears visible in dark desert cave lighting with glowing orange forge reflections.',
    specs: [
      { label: 'WEIGHT', value: '1,500 lbs' },
      { label: 'WEAPONRY', value: 'Dual Flamethrowers, Micro-Rockets' },
      { label: 'POWER SOURCE', value: 'First Mini-Arc (3.0 GJ/s)', highlight: true, color: 'text-primary' },
      { label: 'STATUS', value: 'Decommissioned / Preserved' }
    ],
    weaponry: ['Jericho Solid-Fuel Flamethrower', 'Forearm Micro-Rocket Cannons', 'Pneumatic Hydraulic Crushing Pincers'],
    powerSource: 'First-Gen Miniature Arc Reactor (Palladium Core, 3.0 GJ/s)',
    flightCapability: 'Solid propellant rocket thruster boots (single launch trajectory, 150m crash landing)',
    status: 'Preserved in Malibu Hall of Armors (Remains salvaged)'
  },
  {
    id: 'mk-003',
    mark: 'MK-003 // 2008',
    name: 'MARK III',
    category: 'proto',
    categoryLabel: 'The Classic Crimson & Gold',
    year: 2008,
    location: 'MALIBU LAB',
    tagColor: 'secondary',
    description: 'The archetype that defined Iron Man. Solved the high-altitude icing problem with a gold-titanium alloy and integrated fully functional flight avionics.',
    fullDescription: 'The definitive silhouette that established Tony Stark as Iron Man. Engineered to overcome the severe atmospheric icing encountered in Mark II through a specialized gold-titanium composite alloy and automotive hot-rod red enamel finish.',
    imageUrl: '/assets/mk3.png',
    imageAlt: 'Iron Man Mark III suit iconic hot-rod crimson red and metallic gold aerodynamic flight chassis hovering in night sky, cyan repulsor glow radiating from palms and chest.',
    specs: [
      { label: 'MATERIAL', value: 'Gold-Titanium Alloy' },
      { label: 'WEAPONRY', value: 'Palm Repulsors, Unibeam, Flares' },
      { label: 'MAX SPEED', value: 'Mach 3.2 Supersonic', highlight: true, color: 'text-primary' },
      { label: 'STATUS', value: 'Damaged in Gulmira' }
    ],
    weaponry: ['Twin Palm Repulsor Flight Stabilizers', 'High-Yield Chest Unibeam', 'Shoulder Multi-Caliber Smart Guns', 'Phosphorus Countermeasure Decoys'],
    powerSource: 'Arc Reactor Mark II (Multi-Cell Palladium Ring)',
    flightCapability: 'Supersonic Dual-Vector Boot Thrusters with Actuated Airflaps (Mach 3.2+)',
    status: 'Archived / Severely Damaged in Iron Monger Duel'
  },
  {
    id: 'mk-005',
    mark: 'MK-005 // 2010',
    name: 'MARK V',
    category: 'proto',
    categoryLabel: 'The Briefcase Suit',
    year: 2010,
    location: 'MONACO GP',
    tagColor: 'primary',
    description: 'Engineered for portable immediate response. Sacrificed flight and heavy armor for rapid interlocking deployment inside crowded zones.',
    fullDescription: 'Designed as a concealable emergency response chassis compacted into an executive briefcase format. By utilizing hundreds of flexible interlocking lightweight titanium-silver lattice plates, Stark achieved 18-second emergency step-in deployment.',
    imageUrl: '/assets/mk5.png',
    imageAlt: 'Iron Man Mark V lightweight briefcase suit expanding and interlocking across Tony Stark torso on Monaco Grand Prix racing asphalt, silver and crimson segmented latch plates.',
    specs: [
      { label: 'DEPLOY TIME', value: '18.4 Seconds', highlight: true, color: 'text-tertiary' },
      { label: 'WEAPONRY', value: 'Compact Repulsor Grid' },
      { label: 'PURPOSE', value: 'Emergency Civilian Defense' },
      { label: 'STATUS', value: 'Archived Vault Hall' }
    ],
    weaponry: ['Lightweight Gauntlet Repulsors', 'Emergency Core Discharge Blast'],
    powerSource: 'Palladium Arc Core (Integrated Chassis Cell)',
    flightCapability: 'Low-altitude hover bursts only (compromised to conserve briefcase mass)',
    status: 'Preserved in Vault Hall (Post-Monaco Circuit Encounter)'
  },
  {
    id: 'mk-007',
    mark: 'MK-007 // 2012',
    name: 'MARK VII',
    category: 'heavy',
    categoryLabel: 'Mid-Air Pod Deployment',
    year: 2012,
    location: 'NEW YORK',
    tagColor: 'secondary',
    description: 'Laser-guided pod locking to subcutaneous biometric wrist bands mid-fall. Armed with heavy payload munitions for deep alien incursion defense.',
    fullDescription: 'The battle-tested heavy assault armor of the Battle of New York. Autonomous scanner pod tracked Stark falling from the Stark Tower balcony, locking onto dual laser-guided biometric wristbands to clamp into flight configuration mid-descent.',
    imageUrl: '/assets/mk7.png',
    imageAlt: 'Mark VII armor pod tracking Stark freefalling from Stark Tower penthouse, clamping onto wrists and torso mid-air with thrusters roaring against New York city skyline.',
    specs: [
      { label: 'BATTLE', value: 'Chitauri Wormhole Assault' },
      { label: 'WEAPONS', value: 'Shoulder Pods, High-Yield Lasers' },
      { label: 'THRUST', value: 'Twin Back Thrusters Boosted', highlight: true, color: 'text-primary' },
      { label: 'STATUS', value: 'Wormhole Tested', highlight: true, color: 'text-primary font-bold' }
    ],
    weaponry: ['Shoulder-Mounted Guided Micro-Missile Pods', 'Tri-Barrel Arm Lasers', 'Dual Back-Mounted Thruster Cannons'],
    powerSource: 'Badassium Synthesized Element Arc Core',
    flightCapability: 'High-G Twin Heavy Thruster Boost Pack with Orbital Vector Nozzles',
    status: 'Wormhole Intercept Veteran (Successfully escorted 17-Megaton ICBM)'
  },
  {
    id: 'mk-044',
    mark: 'MK-044 // 2015',
    name: 'MARK XLIV',
    category: 'heavy',
    categoryLabel: "Hulkbuster 'Veronica'",
    year: 2015,
    location: 'VERONICA SATELLITE',
    tagColor: 'tertiary',
    description: 'Co-designed with Dr. Bruce Banner. Deployed from orbital satellite pod with autonomous replacement limbs and seismic jackhammer hydraulics.',
    fullDescription: 'The titanic exoskeleton modular system deployed to pacify an out-of-control Hulk. Co-designed with Bruce Banner himself, the Mark XLIV docks over standard armor suits and receives continuous orbital parts replenishments via Veronica satellite.',
    imageUrl: '/assets/mk44.png',
    imageAlt: 'Massive towering Iron Man Hulkbuster Mark XLIV armor with heavy hydraulic piston arms, multi-arc reactor glow in chest and knees, standing amid urban rubble.',
    specs: [
      { label: 'POWER SYSTEM', value: '11 Multi-Arc Reactors', highlight: true, color: 'text-tertiary font-bold' },
      { label: 'ARMOR RATING', value: 'Kinetic Impact Class 100+' },
      { label: 'DEPLOYMENT', value: 'Low Earth Orbit Dropship' },
      { label: 'STATUS', value: 'Active Standby' }
    ],
    weaponry: ['Rapid-Fire Hydraulic Jackhammer Arm', 'Chemical Sedative Gas Injector Pods', 'Multi-Arc Unibeam Convergence Array'],
    powerSource: '11 Discrete Arc Reactor Modules Distributed Across Limbs and Core',
    flightCapability: 'Quad-Vector Heavy Atmospheric Thrusters (Drop-pod entry and high-altitude transit)',
    status: 'Decommissioned post-Sokovia (Replaced by Mark XLVIII)'
  },
  {
    id: 'mk-050',
    mark: 'MK-050 // 2018',
    name: 'MARK L',
    category: 'nanotech',
    categoryLabel: 'Nanotechnology Prime',
    year: 2018,
    location: 'BATTLE OF TITAN',
    tagColor: 'primary',
    description: 'Stored entirely within a removable chest RT unit. Billions of nanoparticles materialize on thought command into blade weapons, shields, and wings.',
    fullDescription: 'A revolutionary quantum leap in defensive avionics. Utilizing liquid nanoparticle matrix stored inside a compact RT chest unit, the armor materializes around Stark at the speed of thought, adapting in real time to create physical shields, repulsor cannons, energy blades, and atmospheric wing thrusters.',
    imageUrl: '/assets/mk50.png',
    imageAlt: 'Iron Man Mark L sleek liquid nanotech suit forming energy shields and quad-thruster aerodynamic wings on alien desert planet Titan under dim red celestial sunlight.',
    specs: [
      { label: 'TECH', value: 'Liquid Nanomaterial Matrix', highlight: true, color: 'text-primary font-bold' },
      { label: 'SYNTHESIS', value: 'Dynamic Weaponry Reshaping' },
      { label: 'DEFENSE', value: 'Repulsor Dispersion Shields' },
      { label: 'STATUS', value: 'Compromised on Titan', highlight: true, color: 'text-secondary font-bold' }
    ],
    weaponry: ['Nanotech Energy Hammers', 'Battering Rams & Piercing Blades', 'Quad-Thruster High-Altitude Flight Wings', 'Power Mallets and Nanite Restraints'],
    powerSource: 'Next-Gen Quantum RT Housing (8.5 GJ/s continuous)',
    flightCapability: 'Integrated Nanite Wing Thrusters with deep space escape velocity',
    status: 'Severely compromised in mortal combat against Thanos on Titan'
  },
  {
    id: 'mk-085',
    mark: 'MK-085 // 2023',
    name: 'MARK LXXXV',
    category: 'nanotech',
    categoryLabel: 'The Pinnacle of Human Avionics & Infinity Channeling',
    year: 2023,
    location: 'FINAL MASTERPIECE',
    tagColor: 'primary',
    featured: true,
    description: 'The apex integration of Stark nanotech and Wakandan vibranium-infused architecture. Specially constructed with adaptive quantum conduits capable of harnessing, redirecting, and stabilizing cosmic gamma radiation from the six Infinity Stones.',
    fullDescription: 'The final, crowning engineering masterpiece of Tony Stark. Combining the aerodynamic grace of the classic Mark III with peak nanotech and vibranium lattice alloy. Constructed secretly with micro-scale quantum pathways designed specifically to channel the lethal cosmic output of all six Infinity Stones.',
    imageUrl: '/assets/mk85.png',
    imageAlt: 'Iron Man Mark LXXXV final armor gleaming with deep red enamel and muscular gold arms, chest arc radiating blinding blue light, battle worn yet resplendent.',
    specs: [
      { label: 'COMPOSITION', value: 'Vibranium Nano-Lattice' },
      { label: 'POWER OUTPUT', value: 'Unlimited Quantum Arc', highlight: true, color: 'text-primary font-bold' },
      { label: 'SPECIAL HARNESS', value: 'Infinity Core Transfer', highlight: true, color: 'text-tertiary font-bold' },
      { label: 'HISTORIC ENGAGEMENT', value: 'Endgame 2023 // Victory', highlight: true, color: 'text-secondary font-bold' }
    ],
    weaponry: ['Lightning Refocuser Back Array', 'Energy Shield Projection Matrix', 'Infinity Nanite Channeling Gauntlet', 'Autonomous Combat Predictive AI'],
    powerSource: 'Cosmic-Tolerant Quantum Arc Core (Direct biological synaptic bridge)',
    flightCapability: 'Omnidirectional Vector Nanite Thrusters with planetary atmospheric break',
    status: 'Immortalized in the sacred timeline (Saved the universe)'
  }
];

export interface EpochItem {
  id: string;
  epoch: string;
  years: string;
  title: string;
  description: string;
  metaIcon: string;
  metaText: string;
  color: string;
}

export const EPOCHS: EpochItem[] = [
  {
    id: 'epoch-1',
    epoch: 'EPOCH 01',
    years: '1970 — 1991',
    title: 'The Prodigy & The Stark Legacy',
    description: "Graduating MIT summa cum laude at age 15. Following the tragic loss of Howard and Maria Stark in 1991, Tony assumed leadership of Stark Industries at 21, transforming it into the world's apex defense contractor.",
    metaIcon: 'school',
    metaText: 'MIT Thesis // Micro-circuitry Systems',
    color: 'text-tertiary'
  },
  {
    id: 'epoch-2',
    epoch: 'EPOCH 02',
    years: '2008',
    title: "Awakening & 'I Am Iron Man'",
    description: 'Wounded by his own weaponry in Afghanistan. An electromagnetic car battery kept shrapnel from his heart. Reborn with the miniature Arc Reactor, he shuttered weapons manufacturing and announced his alter ego to the press.',
    metaIcon: 'campaign',
    metaText: 'Public Address // Press Conference 11-B',
    color: 'text-primary'
  },
  {
    id: 'epoch-3',
    epoch: 'EPOCH 03',
    years: '2012',
    title: 'The Wormhole & Cosmic Reality',
    description: 'Steered a nuclear warhead through the Chitauri wormhole into deep space, nearly perishing. The encounter ignited severe PTSD and an obsessive foresight: Earth was defenseless against cosmic horrors.',
    metaIcon: 'satellite_alt',
    metaText: 'Sub-Orbital Detonation // 17 Megatons',
    color: 'text-secondary'
  },
  {
    id: 'epoch-4',
    epoch: 'EPOCH 04',
    years: '2015 — 2016',
    title: 'Ultron & The Sokovia Accords',
    description: 'Seeking “a suit of armor around the world,” Stark inadvertently birthed Ultron. Driven by remorse over civilian fallout, he championed the UN Sokovia Accords, splintering the Avengers during the ideological Civil War.',
    metaIcon: 'balance',
    metaText: 'UN Resolution 134-C // Accountability',
    color: 'text-red-400'
  },
  {
    id: 'epoch-5',
    epoch: 'EPOCH 05',
    years: '2018',
    title: 'The Stand on Titan',
    description: 'Confronted the Mad Titan Thanos on the desolate ruins of Titan. Stark pushed Mark L nanotech to its absolute physical limits, drawing blood from Thanos before being impaled. Spared only when Strange relinquished the Time Stone.',
    metaIcon: 'flare',
    metaText: 'Titan Confrontation // One in 14,000,605',
    color: 'text-secondary'
  },
  {
    id: 'epoch-6',
    epoch: 'EPOCH 06',
    years: '2023',
    title: 'The Endgame & The Mobius Strip',
    description: 'Living peacefully with Pepper and Morgan, Tony refused to let the past die. In one fateful night, he cracked the eigenvalue quantum algorithm using an inverted Möbius strip, enabling temporal displacement navigation.',
    metaIcon: 'all_inclusive',
    metaText: 'Quantum Space-Time GPS // Breakthrough',
    color: 'text-primary'
  }
];

export interface QuoteItem {
  id: string;
  quote: string;
  source: string;
  speakerContext: string;
  highlightColor: string;
  isLarge?: boolean;
}

export const STARK_QUOTES: QuoteItem[] = [
  {
    id: 'q1',
    quote: "“I told you, I don't want to join your super-secret boy band.”",
    source: 'IRON MAN 2 (2010)',
    speakerContext: 'STARK TO NICK FURY',
    highlightColor: 'text-primary'
  },
  {
    id: 'q2',
    quote: "“Following's not really my style.”",
    source: 'THE AVENGERS (2012)',
    speakerContext: 'HELICARRIER PROTOCOL',
    highlightColor: 'text-primary'
  },
  {
    id: 'q3',
    quote: "“If we can't protect the Earth, you can be damn well sure we'll avenge it.”",
    source: 'THE AVENGERS (2012)',
    speakerContext: 'CONFRONTING LOKI',
    highlightColor: 'text-secondary'
  },
  {
    id: 'q4',
    quote: "“If you're nothing without the suit, then you shouldn't have it.”",
    source: 'SPIDER-MAN: HOMECOMING (2017)',
    speakerContext: 'MENTORING PETER PARKER',
    highlightColor: 'text-tertiary'
  },
  {
    id: 'q5',
    quote: "“Everybody wants a happy ending, right? But it doesn't always roll that way. Maybe this time. I'm hoping if you play this back... it's in celebration.”",
    source: 'AVENGERS: ENDGAME (2019)',
    speakerContext: 'FINAL RECORDED HOLOGRAM MESSAGE',
    highlightColor: 'text-primary',
    isLarge: true
  }
];
