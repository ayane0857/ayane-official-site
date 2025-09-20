"use client";

import { animate, hover, press } from "motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Icon = () => {
  const [isteretere, setIsteretere] = useState(false);
  useEffect(() => {
    hover(".icon", (element) => {
      setIsteretere(true);
      animate(element, { scale: 1.1, rotate: -10 }, { duration: 0.3 });

      return () => {
        setIsteretere(false);
        animate(element, { scale: 1, rotate: 0 }, { duration: 0.3 });
      };
    });
    press(".icon", (element) => {
      setIsteretere(true);
      animate(element, { scale: 0.9 }, { type: "spring", stiffness: 700 });

      return () => {
        setTimeout(() => {
          setIsteretere(false);
        }, 500);
        animate(element, { scale: 1 }, { type: "spring", stiffness: 500 });
      };
    });
  }, []);

  return (
    <div className="w-38 h-38 relative cursor-grab icon">
      <Image
        src={isteretere ? "/teretere.png" : "/icon.png"}
        alt="アイコン"
        width={192}
        height={192}
        className="object-cover"
        priority
      />
    </div>
  );
};
