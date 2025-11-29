"use client";

import { ProgressProvider } from "@bprogress/next/app";
// import dynamic from "next/dynamic";
// const ProgressProvider = dynamic(
//   () => import("@bprogress/next/app").then((mod) => mod.ProgressProvider),
//   { ssr: false } // SSRを無効化
// );

const ProgressProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="2px"
      color="#2299DD"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressProviders;
