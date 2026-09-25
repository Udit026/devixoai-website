/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#FFF8ED",
          100: "#FFEFD1",
          200: "#FFDBA3",
          300: "#FFC169",
          400: "#FFA53D",
          500: "#FF8C1A",
          600: "#F5720A",
          700: "#CC5A06",
          800: "#A3470A",
          900: "#833B0E",
        },
        ink: {
          950: "#0A0A0B",
          900: "#121214",
          850: "#17171A",
          800: "#1E1E22",
          700: "#2A2A2F",
          600: "#3A3A41",
        },
        offwhite: "#F4F1EA",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "saffron-glow": "radial-gradient(600px circle at 50% 0%, rgba(255,140,26,0.18), transparent 70%)",
        "saffron-gradient": "linear-gradient(135deg, #FF8C1A 0%, #F5720A 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,140,26,0.25)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
