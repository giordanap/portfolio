"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import {
  getRevealOffset,
  motionDefaults,
  type RevealDirection,
} from "@/lib/motion";
import { cn } from "@/lib/cn";

type RevealProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "initial" | "transition" | "viewport" | "whileInView"
> & {
  children: ReactNode;
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  direction = "up",
  distance = motionDefaults.revealDistance,
  delay = 0,
  once = true,
  className,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  }

  const offset = getRevealOffset(direction, distance);

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: motionDefaults.viewportAmount }}
      transition={{
        duration: motionDefaults.duration,
        ease: motionDefaults.ease,
        delay,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
