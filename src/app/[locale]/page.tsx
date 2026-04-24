'use client';

import {
  SectionAbout,
  SectionContact,
  SectionExperience,
  SectionHome,
  SectionProjects,
} from '@/components/pages/portfolio';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-stretch">
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionExperience />
      <SectionContact />
    </div>
  );
}
