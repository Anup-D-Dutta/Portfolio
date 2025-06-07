// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh)', opacity: '0' },
        },
      },
      animation: {
        floatUp: 'floatUp 20s linear infinite',
      },
    },
  },
  plugins: [],
};
