export function FullLogo() {
  return (
    <div className="flex gap-[0.4rem] items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-[2.1375rem] h-auto" src="/logo.png" alt="Logo" />
      <span className="font-medium text-[1.46rem] text-(--color-paragraph) font-fifties">
        moduref
      </span>
    </div>
  );
}

export function FooterLogo() {
  return (
    <div className="flex gap-4 items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-[4.7125rem] h-auto"
        src="/icons/footerLogo.svg"
        alt="Logo"
      />
      <span className="font-medium leading-none text-[3.2168rem] text-white font-fifties">
        moduref
      </span>
    </div>
  );
}
