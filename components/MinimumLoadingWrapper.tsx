"use client";

import { useEffect, useState } from "react";

const MINIMUM_LOADING_TIME = 3000; // 3秒

export default function MinimumLoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);
  const [startTime] = useState(() => Date.now());

  useEffect(() => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MINIMUM_LOADING_TIME - elapsed);

    const timer = setTimeout(() => {
      setIsReady(true);
    }, remaining);

    return () => clearTimeout(timer);
  }, [startTime]);

  if (!isReady) {
    return null; // Suspenseのfallbackが表示される
  }

  return <>{children}</>;
}
