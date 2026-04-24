import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((sectionId: string, offset: number = 68) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  return { scrollTo };
};
