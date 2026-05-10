export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export const motionDefaults = {
  duration: 0.6,
  stagger: 0.1,
  revealDistance: 24,
  viewportAmount: 0.2,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function getRevealOffset(
  direction: RevealDirection,
  distance: number = motionDefaults.revealDistance,
) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "none":
    default:
      return { x: 0, y: 0 };
  }
}
