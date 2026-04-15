'use client';

import { Button } from '@/components/ui';
import { useRouter } from '@/i18n/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-stretch px-5">
      <div className="border-muted flex flex-1 flex-col gap-12 border-x">
        <section className="divide-muted flex flex-1 divide-x">
          <div className="flex basis-1/4 items-center justify-center">
            <Button
              variant="outline"
              onClick={() => router.push('/ui-kit')}
            >
              Components
            </Button>
          </div>
          <div className="basis-1/4" />
          <div className="basis-1/4" />
          <div className="basis-1/4" />
        </section>
      </div>
    </div>
  );
}
