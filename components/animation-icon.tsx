"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const Icon = () => {
  const [isteretere, setIsteretere] = useState(false);

  return (
    <motion.div
      className="w-38 h-38 relative cursor-grab"
      whileHover={{ scale: 1.1, rotate: -10, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 700 }}
      onHoverStart={() => setIsteretere(true)}
      onHoverEnd={() => setIsteretere(false)}
      onTapStart={() => setIsteretere(true)}
      onTap={() => setTimeout(() => setIsteretere(false), 500)}
    >
      <Image
        src={isteretere ? "/teretere.png" : "/icon.png"}
        alt="アイコン"
        width={192}
        height={192}
        className="object-cover"
        priority
        fetchPriority="high"
        quality={85}
      />
    </motion.div>
  );
};
