'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui';
import { usePathname, useRouter } from '@/i18n/navigation';

import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { useScrollTo } from '@/hooks/use-scroll-to';

const headerNav = [
  { name: 'Home', id: 'id-section-home' },
  { name: 'About', id: 'id-section-about' },
  { name: 'Projects', id: 'id-section-projects' },
  { name: 'Experience', id: 'id-section-experience' },
];

const TabsNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const scrollTo = useScrollTo();

  const activeSectionId = useScrollSpy(
    headerNav.map((item) => item.id),
    68,
  );

  const isHomePage = pathname === '/';
  const handleNavigation = (id: string) => {
    if (isHomePage) {
      scrollTo(id);
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <Tabs
      value={activeSectionId}
      className="h-full items-center justify-center"
    >
      <TabsList variant="line">
        {headerNav.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            activeValue={activeSectionId}
            onClick={() => handleNavigation(item.id)}
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export { TabsNavigation };
