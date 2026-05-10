import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsLinkProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
    external?: boolean;
  };

type ButtonAsButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
    external?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-cyan-400/50 bg-cyan-400/12 text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.12)] hover:border-cyan-300/70 hover:bg-cyan-400/18",
  secondary:
    "border-slate-700/80 bg-slate-900/70 text-slate-200 hover:border-slate-500/80 hover:bg-slate-800/80",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:bg-white/[0.04] hover:text-cyan-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
};

function getButtonClasses({
  variant,
  size,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full border font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

function isLinkButton(props: ButtonProps): props is ButtonAsLinkProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      children,
      variant = "primary",
      size = "md",
      className,
      external,
      href,
      ...anchorProps
    } = props;

    return (
      <a
        href={href}
        className={getButtonClasses({ variant, size, className })}
        target={external ? "_blank" : anchorProps.target}
        rel={external ? "noreferrer" : anchorProps.rel}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    variant = "primary",
    size = "md",
    className,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={getButtonClasses({ variant, size, className })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
