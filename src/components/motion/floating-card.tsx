"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/cn";

type FloatingCardProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "transition"
> & {
  children: ReactNode;
  floatY?: number;
  duration?: number;
  delay?: number;
};

export function FloatingCard({
  children,
  floatY = 10,
  duration = 5,
  delay = 0,
  className,
  ...props
}: FloatingCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{ y: [0, -floatY, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
