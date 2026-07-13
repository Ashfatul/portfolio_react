import { useMemo } from 'react';
import { usePortfolioData } from './hooks/usePortfolioData';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { SECTION_IDS } from './utils/constants';

import { ScrollProgress } from './components/ui/ScrollProgress';
import { SectionDots } from './components/ui/SectionDots';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  const { data, loading } = usePortfolioData();
  const { theme, toggleTheme } = useTheme();
  const sectionIds = useMemo(() => SECTION_IDS, []);
  const activeSection = useScrollSpy(sectionIds);

  if (loading || !data) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
      }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <ScrollProgress />
      <SectionDots activeSection={activeSection} />
      <Navigation activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero data={data} />
        <About data={data} />
        <Skills data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Education data={data} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
