interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl bg-white border border-gray-200 p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
