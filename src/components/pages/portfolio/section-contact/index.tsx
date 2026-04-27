'use client';

import { FormContact } from './components';

const SectionContact = () => {
  return (
    <section
      id="id-section-contact"
      className="flex h-[calc(100vh-68px)] w-full flex-col px-5"
    >
      <div className="border-muted h-full w-full border-x">
        <div className="divide-muted grid h-full w-full grid-cols-4 items-stretch divide-x">
          {/* Column 1 */}
          <div className="col-span-1 flex flex-1 flex-col"></div>

          {/* Column 2 */}
          <div className="col-span-1 flex flex-col" />

          {/* Column 3 & 4 */}
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export { SectionContact };
