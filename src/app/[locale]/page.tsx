"use client"

import { useRouter } from "@/i18n/navigation"; 

import { 
  Button,
} from "@/components/ui";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button
        variant="outline"
        onClick={() => router.push('/ui-kit')}      
      >
        Components
      </Button>
    </div>
  );
}
