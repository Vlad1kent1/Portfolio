'use client';

import { Branding, InfoBlock } from './components';

const SectionHome = () => {
  return (
    <section id="id-section-home">
      <div className="bg-contrast relative flex h-[calc(100vh-68px)] w-full flex-col px-5">
        <Branding />
      </div>

      <InfoBlock />
    </section>
  );
};

export { SectionHome };
