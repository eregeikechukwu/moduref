export function RadarTag({
  children,
  variant = "normal",
}: {
  children: React.ReactNode;
  variant?: "green" | "normal";
}) {
  const variantMap = {
    green: { bg: "bg-[#eff9e5]/20", text: "text-white" },
    normal: { bg: "bg-(--color-gray)", text: "text-[var(--color-paragraph)]" },
  };

  return (
    <div
      className={`center-content w-max  h-7 rounded-full p-2 gap-2.5 ${variantMap[variant].bg}`}
    >
      <span className="h-2.25 w-2.25 bg-(--color-primary-500) rounded-full animate-pulse" />
      <p
        className={`leading-[1.67]  text-[0.72rem] uppercase font-bold mt-0.5 ${variantMap[variant].text}`}
      >
        {children}
      </p>
    </div>
  );
}
