"use client";

import { useMemo, useEffect, useState } from "react";

const TRIVIA_LIST = [
  "彩音はとてもスイーツが大好きです",
  "彩音は運動神経がとてもありません",
  "彩音は猫が大好きですが、触ることができません",
  "彩音は勉強が嫌いです",
  "彩音はゲームをあまりしません",
  "彩音はごろごろYoutubeを見るのが大好きです",
];

const MINIMUM_LOADING_TIME = 3000; // 3秒

export default function LoadingWithTrivia() {
  const [startTime] = useState(() => Date.now());
  const [isMinimumTimePassed, setIsMinimumTimePassed] = useState(false);

  const trivia = useMemo(() => {
    const index = Math.floor(Math.random() * TRIVIA_LIST.length);
    return TRIVIA_LIST[index];
  }, []);

  useEffect(() => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MINIMUM_LOADING_TIME - elapsed);

    const timer = setTimeout(() => {
      console.log(isMinimumTimePassed);
      setIsMinimumTimePassed(true);
    }, remaining);

    return () => clearTimeout(timer);
  }, [startTime]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#F9F6F7] text-slate-800">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />

      <div className="text-lg font-semibold">NOW LOADING…</div>

      <div className="max-w-md text-center text-sm bg-slate-50 px-4 py-3 rounded-xl border border-slate-200">
        {trivia}
      </div>
    </div>
  );
}

// loading.tsxで使用する場合のラッパー関数をエクスポート
export async function withMinimumLoadingTime<T>(
  promise: Promise<T>
): Promise<T> {
  const [result] = await Promise.all([
    promise,
    new Promise((resolve) => setTimeout(resolve, MINIMUM_LOADING_TIME)),
  ]);
  return result;
}
