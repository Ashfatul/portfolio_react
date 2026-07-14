export const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
];

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

// One icon per skill, with a generic fallback (`FiTag`) for anything unmapped
// so no pill renders without an icon. Keys must match the strings in
// public/data/resume_data.json -> skills.*  verbatim.
export const SKILL_ICON_MAP = {
  // ---------- Frontend ----------
  'React': 'FaReact',
  'Next.js': 'SiNextdotjs',
  'TypeScript': 'SiTypescript',
  'JavaScript (ES6+)': 'SiJavascript',
  'HTML5': 'FaHtml5',
  'CSS3': 'FaCss3Alt',
  'SCSS/Sass': 'FaSass',
  'Tailwind CSS': 'SiTailwindcss',
  'Bootstrap': 'SiBootstrap',
  'jQuery': 'SiJquery',
  'Responsive Web Design': 'MdDevices',
  'Cross-Browser Compatibility': 'FaGlobe',
  'RTL Support': 'MdTranslate',
  'Semantic HTML': 'SiHtml5',

  // ---------- State & Data ----------
  'React Query (TanStack)': 'SiReactquery',
  'Zustand': 'MdAccountTree',
  'Context API': 'SiReact',
  'React Hook Form': 'SiReacthookform',
  'Axios': 'SiAxios',
  'REST API Integration': 'TbApi',

  // ---------- Backend basics ----------
  'Node.js': 'FaNodeJs',
  'Express.js': 'SiExpress',
  'Supabase': 'SiSupabase',
  'MongoDB': 'SiMongodb',
  'Prisma': 'SiPrisma',
  'PostgreSQL': 'SiPostgresql',

  // ---------- Tools ----------
  'Git': 'FaGitAlt',
  'GitHub': 'FaGithub',
  'Figma': 'FaFigma',
  'Postman': 'SiPostman',
  'Chrome DevTools': 'FaChrome',
  'npm': 'SiNpm',
  'Vite': 'SiVite',
  'Vercel': 'SiVercel',
  'VS Code': 'VscVscode',

  // ---------- Practices ----------
  'Component-Based Architecture': 'MdWidgets',
  'Performance Optimization': 'MdSpeed',
  'Responsive Design': 'MdDevices',
  'Code Review': 'MdRateReview',
  'Agile/Scrum': 'MdGroups',
  'Git Workflow': 'FaGitAlt',
  'UI/UX Collaboration': 'MdDesignServices',
};

// Generic fallback used for any skill whose name isn't in the map above
export const FALLBACK_ICON = 'FiTag';
