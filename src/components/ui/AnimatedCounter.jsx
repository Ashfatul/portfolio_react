import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericPart = parseInt(value.replace(/\D/g, ''), 10);
    const suffix = value.replace(/\d/g, '');

    if (isNaN(numericPart)) {
      setDisplay(value);
      return;
    }

    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericPart * eased);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
