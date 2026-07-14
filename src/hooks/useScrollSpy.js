import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    let rafId = null;

    const updateActiveSection = () => {
      const triggerPoint = window.innerHeight * 0.35 + offset;
      let currentSection = sectionIds[0] || '';

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= triggerPoint) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [sectionIds, offset]);

  return activeSection;
}
