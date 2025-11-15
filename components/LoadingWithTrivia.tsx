"use client";

import { useMemo } from "react";

const TRIVIA_LIST = [
  "彩音はとてもスイーツが大好きです",
  "彩音は運動神経がとてもありません",
  "彩音は猫が大好きですが、触ることができません",
  "彩音は勉強が嫌いです",
  "彩音はゲームをあまりしません",
  "彩音はごろごろYoutubeを見るのが大好きです",
];

export default function LoadingWithTrivia() {
  const trivia = useMemo(() => {
    const index = Math.floor(Math.random() * TRIVIA_LIST.length);
    return TRIVIA_LIST[index];
  }, []);

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
