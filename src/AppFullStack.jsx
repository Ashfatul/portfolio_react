import { useMemo } from 'react';
import { usePortfolioDataFullStack } from './hooks/usePortfolioDataFullStack';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { SECTION_IDS, NAV_ITEMS } from './utils/constants';

import { ScrollProgress } from './components/ui/ScrollProgress';
import { SectionDots } from './components/ui/SectionDots';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/HeroFullStack';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import BackToTop from './components/ui/BackToTop';
import InstallPrompt from './components/ui/InstallPrompt';

export default function AppFullStack() {
  const { data, loading } = usePortfolioDataFullStack();
  const { theme, toggleTheme } = useTheme();
  const sectionIds = useMemo(() => SECTION_IDS.filter(id => id !== 'skills'), []);
  const activeSection = useScrollSpy(sectionIds);

  if (loading || !data) {
    return (
      <div className="preloader">
        <div className="preloader__spinner">
          <div className="preloader__circle" />
          <div className="preloader__circle-inner" />
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollProgress />
      <SectionDots activeSection={activeSection} />
      <Navigation 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        navItems={NAV_ITEMS.filter(item => item.id !== 'skills')}
      />

      <main>
        <Hero data={data} />
        <About data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Education data={data} />
        <Contact />
      </main>

      <Footer data={data} />
      <BackToTop />
      <InstallPrompt />
    </>
  );
}
