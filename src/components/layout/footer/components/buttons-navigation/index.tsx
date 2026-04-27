'use client';

import { AnimatedButton } from '@/components/ui';
import { usePathname, useRouter } from '@/i18n/navigation';

import { ArrowRight } from 'lucide-react';

import { useScrollTo } from '@/hooks/use-scroll-to';

const ButtonsNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const scrollTo = useScrollTo();

  const isHomePage = pathname === '/';

  const FOOTER_LINKS = [
    { name: 'Home', target: 'id-section-home', type: 'scroll' },
    { name: 'About', target: 'id-section-about', type: 'scroll' },
    { name: 'Projects', target: 'id-section-projects', type: 'scroll' },
    { name: 'Experience', target: 'id-section-experience', type: 'scroll' },
    { name: 'Components', target: '/ui-kit', type: 'route' },
  ];

  const handleAction = (item: (typeof FOOTER_LINKS)[number]) => {
    if (item.type === 'scroll') {
      isHomePage ? scrollTo(item.target) : router.push(`/#${item.target}`);
    } else {
      router.push(item.target);
    }
  };

  return (
    <div className="divide-muted flex h-full w-full flex-col divide-y">
      {FOOTER_LINKS.map((link) => (
        <AnimatedButton
          key={`id-${link.name.toLowerCase()}`}
          variant="ghost"
          onClick={() => handleAction(link)}
          className="flex-1 bg-transparent hover:bg-transparent"
        >
          <AnimatedButton.Text>{link.name}</AnimatedButton.Text>
          <AnimatedButton.Icon>
            <ArrowRight size={16} />
          </AnimatedButton.Icon>
        </AnimatedButton>
      ))}
    </div>
  );
};

export { ButtonsNavigation };
