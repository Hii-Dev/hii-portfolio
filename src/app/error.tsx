"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-40 mt-20 text-center">
      <p className="text-stone-600">問題が発生しました。もう一度お試しください。</p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-gray-700 px-4 py-1.5 text-sm text-white transition-colors hover:bg-gray-600"
      >
        再読み込み
      </button>
    </div>
  );
}
