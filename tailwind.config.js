/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
    },
    fontFamily: {
      polySans: ["PolySans", "sans-serif"],
    },
  },
  plugins: [],
};
