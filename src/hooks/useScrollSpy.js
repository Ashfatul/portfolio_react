import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: `-${offset}px 0px -50% 0px`, threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds, offset]);

  return activeSection;
}
