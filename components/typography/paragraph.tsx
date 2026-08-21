import React from "react";

export const Paragraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`${className} text-[1rem] text-(--color-paragraph) leading-[1.75]`}
    >
      {children}
    </p>
  );
};
