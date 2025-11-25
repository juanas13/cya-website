// postcss.config.js → ESM (compatible "type": "module")
/** @type {import('postcss').Postcss} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
