export interface PillarData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  competencies: string[];
  sampleCourses: string[];
  toolsAndTech: string[];
  practicalOutput: string;
  color: string;
}

export interface ProfileLulusan {
  code: string;
  title: string;
  roleIndo: string;
  description: string;
  standard: string;
  competencyHighlights: string[];
  careerProspects: string[];
  workEnvironment: string;
  keySkills: string[];
}

export interface TargetItem {
  code: string;
  title: string;
  targetMetric: string;
  description: string;
  category: 'Akademik' | 'Kurikulum' | 'Prestasi' | 'Riset' | 'SDM';
}

export const THREE_PILLARS: PillarData[] = [
  {
    id: 'komputer',
    name: 'Bidang Komputer & Teknologi',
    tagline: 'Keahlian Rekayasa Sistem, Coding & Infrastruktur Digital',
    description:
      'Mahasiswa dibekali kemampuan teknis mendalam untuk merancang, mengimplementasikan, dan mengelola solusi teknologi modern yang scalable dan aman.',
    competencies: [
      'Pemrograman Web, Mobile, dan Enterprise',
      'Arsitektur Basis Data Relasional & NoSQL',
      'Infrastruktur Jaringan Komputer & Keamanan Siber',
      'Pengembangan Perangkat Lunak (Software Engineering)'
    ],
    sampleCourses: [
      'Algoritma & Pemrograman',
      'Struktur Data & Basis Data',
      'Jaringan Komputer & Cloud Computing',
      'Rekayasa Perangkat Lunak (RPL)',
      'Pengembangan Aplikasi Mobile & Web',
      'Keamanan Sistem Informasi'
    ],
    toolsAndTech: ['React & Next.js', 'PostgreSQL & MySQL', 'Python & JavaScript', 'Git & Docker', 'Linux & Networking Tools'],
    practicalOutput: 'Aplikasi web/mobile fungsional, arsitektur basis data relasional organisasi, dan sistem jaringan teruji.',
    color: 'blue'
  },
  {
    id: 'manajemen',
    name: 'Bidang Manajemen & Tata Kelola',
    tagline: 'Kepemimpinan Proyek, Tata Kelola TI & Penyelarasan Strategis',
    description:
      'Kemampuan manajerial diasah untuk memastikan bahwa setiap implementasi teknologi terencana, efisien secara biaya dan waktu, serta selaras dengan tata kelola organisasi (IT Governance).',
    competencies: [
      'Prinsip-prinsip Manajemen & Kepemimpinan Organisasi',
      'Manajemen Sistem Informasi (MIS)',
      'Manajemen Proyek TI (Agile/Scrum & Waterfall)',
      'Audit & Tata Kelola Teknologi Informasi (COBIT/ITIL)'
    ],
    sampleCourses: [
      'Prinsip-Prinsip Manajemen',
      'Manajemen Sistem Informasi',
      'Manajemen Proyek Teknologi Informasi',
      'Tata Kelola & Audit Sistem Informasi',
      'Manajemen Risiko TI & Kepatuhan'
    ],
    toolsAndTech: ['Scrum & Kanban', 'Jira & Trello', 'BPMN 2.0 (Bizagi)', 'COBIT Framework', 'Microsoft Project'],
    practicalOutput: 'Dokumen Project Charter, Project Plan, analisis risiko sistem, dan rancangan tata kelola TI berstandar industri.',
    color: 'indigo'
  },
  {
    id: 'bisnis',
    name: 'Bidang Bisnis & Technopreneur',
    tagline: 'Inkubasi Startup, Analisis Proses Bisnis & Pemasaran Digital',
    description:
      'Pengetahuan bisnis dikembangkan agar lulusan memahami alur operasional dunia usaha dan mampu mentransformasikan peluang pasar menjadi produk digital yang menghasilkan nilai komersial nyata.',
    competencies: [
      'Administrasi Bisnis & Proses Operasional Organisasi',
      'Sistem Informasi Akuntansi & Keuangan',
      'Pengembangan & Pemasaran Produk Digital (Product Management)',
      'Perilaku Organisasi & Kewirausahaan Berbasis Teknologi (Technopreneur)'
    ],
    sampleCourses: [
      'Administrasi & Proses Bisnis',
      'Sistem Informasi Akuntansi',
      'Pengembangan & Pemasaran Produk',
      'Perilaku Organisasi',
      'Technopreneurship & Inkubasi Bisnis Digital',
      'E-Business & Digital Commerce'
    ],
    toolsAndTech: ['Business Model Canvas (BMC)', 'Odoo / ERP Solutions', 'Google Analytics & Ads', 'UI Wireframing', 'Financial Modeling'],
    practicalOutput: 'Prototipe produk digital, rencana bisnis (pitch deck), dan simulasi implementasi ERP di proses bisnis nyata.',
    color: 'teal'
  }
];

export const GRADUATE_PROFILES: ProfileLulusan[] = [
  {
    code: 'PL01',
    title: 'Interpersonal Communicator & Karakter Unggul',
    roleIndo: 'Ahli Komunikasi TI Berakhlakul Karimah & Relasi Organisasi',
    description:
      'Lulusan memiliki kemampuan pertukaran informasi, ide, dan perasaan yang menghasilkan perubahan sikap positif sehingga terjalin hubungan harmonis antara pemberi pesan dan penerima pesan dengan Akhlakul Karimah.',
    standard: 'Ciri Khas UNIKMA & KKNI',
    competencyHighlights: [
      'Komunikasi interpersonal persuasif dan etika profesi teknologi informasi',
      'Resolusi konflik antartim dan penanganan hubungan klien/stakeholder',
      'Penyampaian gagasan teknis kompleks menjadi bahasa bisnis yang mudah dipahami',
      'Integritas moral tinggi dan kepemimpinan berakhlakul karimah'
    ],
    careerProspects: [
      'IT Client Relationship Manager',
      'IT Business Liaison Officer',
      'IT Support & Helpdesk Specialist',
      'Konsultan Komunikasi & Transformasi Digital'
    ],
    workEnvironment: 'Bekerja menjembatani manajemen puncak, divisi bisnis, serta tim teknis pengembang sistem.',
    keySkills: ['Active Listening', 'Stakeholder Communication', 'Public Speaking', 'Negotiation', 'Professional Ethics']
  },
  {
    code: 'PL02',
    title: 'UI/UX Designer & Product Experience Specialist',
    roleIndo: 'Desainer Pengalaman Pengguna & Antarmuka Aplikasi',
    description:
      'Lulusan memiliki kemampuan untuk membuat desain situs atau aplikasi yang memudahkan penggunanya. Posisi ini memungkinkan berkolaborasi aktif dengan tim lintas disiplin seperti tim produk dan UX Writer.',
    standard: 'Standar Kurikulum IS2020',
    competencyHighlights: [
      'Riset kebutuhan pengguna (user research) dan usability testing terstruktur',
      'Perancangan alur kawat (wireframing), informasi arsitektur, dan interactive prototyping',
      'Penerapan Design System, prinsip Human-Centered Design (HCD), dan aksesibilitas web',
      'Kolaborasi intensif dengan tim pengembang software dan product manager'
    ],
    careerProspects: [
      'UI/UX Designer',
      'Interaction Designer',
      'Product Design Specialist',
      'Digital Experience Consultant'
    ],
    workEnvironment: 'Agensi teknologi, startup digital, software house, bank digital, dan divisi produk korporasi.',
    keySkills: ['Figma / Adobe XD', 'Wireframing & Prototyping', 'User Journey Mapping', 'Design Systems', 'Usability Testing']
  },
  {
    code: 'PL03',
    title: 'System Analyst & Information Systems Consultant',
    roleIndo: 'Analis Sistem Informasi & Arsitek Solusi Organisasi',
    description:
      'Lulusan memiliki kemampuan menganalisis, merancang, membuat, dan melakukan evaluasi sistem informasi yang selaras secara tepat dengan tujuan strategis organisasi.',
    standard: 'Standar Kurikulum IS2020',
    competencyHighlights: [
      'Elisitasi dan dokumentasi spesifikasi kebutuhan perangkat lunak (SRS/BRD)',
      'Pemodelan proses bisnis terstandarisasi (BPMN, Flowchart, DFD, UML Diagrams)',
      'Evaluasi kelayakan sistem (Feasibility Study) dan Return on Investment (ROI) TI',
      'Perancangan cetak biru sistem informasi perusahaan yang terintegrasi'
    ],
    careerProspects: [
      'System Analyst',
      'Business Analyst TI',
      'Enterprise Architecture Specialist',
      'IT Consultant & Evaluator'
    ],
    workEnvironment: 'Perusahaan multinasional, BUMN, perbankan, kementerian/lembaga pemerintahan, dan konsultan TI.',
    keySkills: ['BPMN 2.0', 'UML Modeling', 'Business Requirement Document', 'Database Modeling', 'System Evaluation']
  },
  {
    code: 'PL04',
    title: 'Software Engineer & Full-Stack Developer / Technopreneur',
    roleIndo: 'Pengembang Perangkat Lunak & Wirausahawan Teknologi',
    description:
      'Lulusan memiliki kemampuan fokus pada pembuatan dan pengembangan situs (website), aplikasi, atau perangkat lunak (software) serta mampu berwirausaha mandiri di bidang teknologi informasi.',
    standard: 'Standar Kurikulum IS2020',
    competencyHighlights: [
      'Pengembangan aplikasi web dan mobile end-to-end (frontend, backend, database)',
      'Implementasi clean code, RESTful API, dan integrasi layanan cloud pihak ketiga',
      'Pemecahan masalah logika pemrograman dan pengujian perangkat lunak (testing)',
      'Komersialisasi produk teknologi informasi secara mandiri (Technopreneur)'
    ],
    careerProspects: [
      'Full-Stack Web Developer',
      'Mobile Application Developer',
      'Software Engineer',
      'Founder / Technopreneur Startup TI'
    ],
    workEnvironment: 'Startup teknologi, tech enterprise, software house mandiri, maupun merintis rintisan bisnis sendiri.',
    keySkills: ['JavaScript/TypeScript', 'React/Next.js/Vue', 'Python/PHP/Node.js', 'SQL & NoSQL Database', 'REST APIs & Cloud']
  }
];

export const STRATEGIC_TARGETS: TargetItem[] = [
  {
    code: 'A',
    title: 'Sosialisasi Visi & Misi',
    targetMetric: '100% Sivitas',
    description: 'Peningkatan pemahaman visi dan misi program studi Sistem Informasi oleh seluruh sivitas akademika, tenaga kependidikan, dan pemangku kepentingan.',
    category: 'SDM'
  },
  {
    code: 'B',
    title: 'Kurikulum Berbasis KKNI',
    targetMetric: 'Akreditasi Unggul',
    description: 'Berhasil mengimplementasikan kurikulum berbasis KKNI yang menunjukkan keunggulan di bidang Sistem Informasi Bisnis dan pendidikan berbasis karakter, integritas, dan soft skill.',
    category: 'Kurikulum'
  },
  {
    code: 'C',
    title: 'Prestasi IT Tingkat Nasional',
    targetMetric: 'Skala Nasional',
    description: 'Menciptakan iklim kompetitif bagi mahasiswa untuk berprestasi di kompetisi teknologi informasi, hackathon, dan inovasi nasional.',
    category: 'Prestasi'
  },
  {
    code: 'D',
    title: 'Capaian Akademik Lulusan',
    targetMetric: '≥ 75% IPK ≥ 3,00',
    description: 'Menghasilkan lulusan berkualitas tinggi dengan target minimal 75% lulusan meraih Indeks Prestasi Kumulatif (IPK) di atas 3,00.',
    category: 'Akademik'
  },
  {
    code: 'E',
    title: 'Kualitas Skripsi & Tugas Akhir',
    targetMetric: '≥ 75% Nilai A',
    description: 'Menghasilkan lulusan dengan minimal 75% lulusan berhasil meraih nilai skripsi A melalui bimbingan riset terapan yang mendalam.',
    category: 'Akademik'
  },
  {
    code: 'F',
    title: 'Lulusan Berjiwa Technopreneur',
    targetMetric: 'Kemandirian Usaha IT',
    description: 'Menghasilkan lulusan mandiri yang berwirausaha di bidang teknologi informasi dan mampu menciptakan lapangan kerja baru.',
    category: 'Prestasi'
  },
  {
    code: 'G',
    title: 'Hibah Penelitian & Pengabdian',
    targetMetric: '≥ 5 Judul / Tahun',
    description: 'Memperoleh dana hibah penelitian dan pengabdian kepada masyarakat dari sumber eksternal (Kemendikbudristek/Dikti dan instansi pemerintah) minimal 5 judul per tahun.',
    category: 'Riset'
  },
  {
    code: 'H',
    title: 'Mutu & Rasio SDM Pengajar',
    targetMetric: 'Rasio Ideal & Linear',
    description: 'Peningkatan mutu SDM, khususnya pemenuhan rasio kecukupan tenaga dosen dan tenaga kependidikan berkualifikasi sesuai bidang kepakarannya.',
    category: 'SDM'
  }
];

export const VISION_MISSION = {
  vision: {
    year: '2032',
    statement:
      'Menjadi Program Studi Berdaya Saing Nasional yang Menghasilkan Lulusan Kompeten dalam Menerapkan Sistem Informasi di Bidang Rekayasa Sistem Informasi dan Memiliki Kemampuan Komunikasi Interpersonal & Technopreneur pada Tahun 2032.',
    pillars: [
      'Berdaya Saing Nasional',
      'Rekayasa Sistem Informasi',
      'Komunikasi Interpersonal & Akhlakul Karimah',
      'Technopreneurship'
    ]
  },
  missions: [
    {
      number: 'a',
      title: 'Pendidikan Bermutu & Technopreneur',
      text: 'Menyelenggarakan Pendidikan yang bermutu tinggi di bidang Sistem Informasi, khususnya Rekayasa Sistem Informasi dan Technopreneur sebagai sasaran untuk menghasilkan lulusan yang cerdas, berbudi luhur yang mengikuti perkembangan IPTEK.'
    },
    {
      number: 'b',
      title: 'Penelitian Bermanfaat Bagi Masyarakat',
      text: 'Menyelenggarakan kegiatan penelitian dan pengembangan ilmu pengetahuan di bidang Sistem Informasi yang berorientasi pada kebermanfaatan bagi masyarakat luas.'
    },
    {
      number: 'c',
      title: 'Pengabdian Masyarakat & Tanggung Jawab Sosial',
      text: 'Melaksanakan kegiatan Pengabdian Kepada Masyarakat dalam mendukung kegiatan pemberdayaan masyarakat sebagai bentuk tanggung jawab sosial institusi.'
    },
    {
      number: 'd',
      title: 'Kemitraan Strategis Stakeholders',
      text: 'Mengembangkan kerjasama dengan segenap pemangku kepentingan (stakeholders) baik di dalam maupun di luar negeri di bidang Sistem Informasi sebagai upaya meningkatkan kapasitas dan reputasi Program Studi.'
    }
  ],
  objectives: [
    {
      number: 'a',
      title: 'Sarjana Komputer Berakhlakul Karimah & Entrepreneur',
      text: 'Menghasilkan sarjana komputer yang berakhlakul karimah, memiliki kompetensi keilmuan dalam bidang komputer dan entrepreneur secara teoritis dan praktis sehingga mampu berdaya saing secara nasional dan internasional.'
    },
    {
      number: 'b',
      title: 'Teaching Organization & Good Governance',
      text: 'Mengembangkan Universitas Komputama dengan prinsip organisasi pembelajaran (teaching organization) dan tata kelola yang baik (Good Governance) serta memiliki nilai utama (core values) terhadap peningkatan mutu pelayanan kepada sivitas akademika dan masyarakat.'
    },
    {
      number: 'c',
      title: 'Jejaring Strategis Bisnis & Teknologi Informasi',
      text: 'Membangun jejaring (networking) dan kemitraan strategis dalam kerjasama pendidikan dan penelitian yang mampu mengintegrasikan antara bidang bisnis dan teknologi informasi dengan organisasi nasional maupun internasional.'
    },
    {
      number: 'd',
      title: 'Solusi Nyata Terhadap Persoalan Global & Nasional',
      text: 'Melaksanakan pengabdian kepada masyarakat, dalam rangka ikut memecahkan persoalan global maupun nasional, terutama dalam bidang bisnis dan teknologi informasi.'
    }
  ]
};

export const FAQ_LIST = [
  {
    q: 'Apa perbedaan mendasar antara Program Studi Sistem Informasi dengan Teknik Informatika?',
    a: 'Teknik Informatika lebih berfokus pada algoritma murni, arsitektur hardware, dan komputasi matematis. Sedangkan Sistem Informasi di Universitas Komputama mengintegrasikan 3 bidang utama: Komputer, Manajemen, dan Bisnis. Lulusan Sistem Informasi tidak hanya ahli membuat software, tetapi juga memahami bagaimana software tersebut selaras dengan strategi bisnis, manajemen proyek, dan efisiensi operasional organisasi.'
  },
  {
    q: 'Apakah calon mahasiswa yang belum memiliki dasar coding/pemrograman bisa mendaftar?',
    a: 'Sangat bisa! Kurikulum perkuliahan disusun bertahap mulai dari tingkat dasar (Algoritma & Logika Pemrograman) dengan dukungan dosen pendamping serta praktikum di Laboratorium Komputer Komputama. Siapa pun dengan minat terhadap dunia digital dan bisnis dapat belajar dengan baik.'
  },
  {
    q: 'Apa saja prospek karier yang paling banyak dibuka untuk lulusan Sistem Informasi?',
    a: 'Lulusan dapat berkarier sebagai System Analyst, UI/UX Designer, Software Engineer / Full-Stack Web Developer, IT Project Manager, IT Consultant, Business Analyst, Database Administrator, hingga Founder Startup Digital (Technopreneur).'
  },
  {
    q: 'Bagaimana kurikulum membekali mahasiswa dalam kemampuan Technopreneur dan Soft Skills?',
    a: 'Sesuai Visi 2032 dan kurikulum KKNI, mahasiswa dibekali mata kuliah Technopreneurship, Inkubasi Bisnis Digital, dan Komunikasi Interpersonal berlandaskan Akhlakul Karimah. Mahasiswa diarahkan merancang ide produk nyata (seperti aplikasi e-commerce UMKM) dan menyusun Business Model Canvas.'
  },
  {
    q: 'Jalur pendaftaran apa saja yang tersedia di Universitas Komputama?',
    a: 'Tersedia Jalur Reguler (Pagi/Siang), Kelas Karyawan / Fleksibel (Sore/Malam & Hybrid), Jalur Prestasi Akademik/Non-akademik, serta program beasiswa KIP-Kuliah dan beasiswa institusi.'
  }
];
