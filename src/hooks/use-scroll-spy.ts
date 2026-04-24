import { useState } from 'react';

import { useMotionValueEvent, useScroll } from 'motion/react';

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop - offset;
        const bottom = top + element.offsetHeight;

        if (latest >= top && latest < bottom) {
          setActiveSection(id);
          break;
        }
      }
    }
  });

  return activeSection;
};
