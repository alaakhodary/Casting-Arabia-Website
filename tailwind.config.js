/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      primary: "Segoe UI,Helvetica,Tahoma,Geneva,Verdana,Arial,sans-serif",
    },
    boxShadow: {
      primary:
        "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
      secoundary: "0px 4px 18px rgba(0, 0, 0, 0.18)",
    },
  },
};
export const plugins = [];
