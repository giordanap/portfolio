"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { motionDefaults } from "@/lib/motion";
import { cn } from "@/lib/cn";

type StaggerProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "transition" | "variants" | "viewport" | "whileInView"
> & {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
};

type StaggerItemProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  children: ReactNode;
};

export function Stagger({
  children,
  staggerDelay = motionDefaults.stagger,
  delayChildren = 0,
  once = true,
  className,
  ...props
}: StaggerProps) {
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
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: motionDefaults.viewportAmount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: StaggerItemProps) {
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
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: motionDefaults.duration,
            ease: motionDefaults.ease,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
