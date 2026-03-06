import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">404 - Сторінку не знайдено</h2>
      <p>Вибачте, але ми не змогли знайти те, що ви шукаєте.</p>
      <Link 
        href="/" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Повернутися на головну
      </Link>
    </div>
  );
}
