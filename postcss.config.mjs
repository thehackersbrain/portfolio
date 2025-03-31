/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
