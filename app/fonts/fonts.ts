import localFont from "next/font/local";

export const vvdsFifties = localFont({
  src: [
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Med.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-SBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Bold.otf",
      weight: "700",
      style: "normal",
    },

    // Italic
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Thin-Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Light-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Reg-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Med-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-SBold-Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./VVDS-fifties/VVDS-Fifties-Exp-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],

  variable: "--font-vvds-fifties",
  display: "swap",
});
