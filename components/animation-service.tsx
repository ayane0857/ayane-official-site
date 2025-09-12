"use client";

import { animate, hover } from "motion";
import { useEffect } from "react";

export default function AnimationServiceWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    hover(".animation-service", (element) => {
      animate(element, { scale: 1.05 }, { duration: 0.2 });

      return () => animate(element, { scale: 1 }, { duration: 0.2 });
    });
  }, []);

  return <div className="animation-service">{children}</div>;
}
