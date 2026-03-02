import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

const variants = {
  primary: "bg-purple text-white hover:bg-purple-dark",
  secondary: "bg-yellow text-gray-900 hover:bg-yellow-hover",
  outline: "border-2 border-purple text-purple hover:bg-purple-50",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-block rounded-lg font-semibold transition-colors text-center ${variants[variant]} ${sizes[size]} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
