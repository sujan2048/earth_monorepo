export default {
  "*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}": ["cspell lint"],
  "*.{js,ts,jsx,tsx,vue,md}": ["prettier --write", "eslint"],
}
