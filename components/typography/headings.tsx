export function H1({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1 className={`text-[3rem] tracking-[0.5px] leading-[1.17] ${className}`}>
      {children}
    </h1>
  );
}
