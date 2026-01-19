const createLint = (target: string[]) => {
  const isCi = process.env.CI
  if (isCi) return []
  return target
}

export default {
  "*.{js,ts,jsx,tsx,vue,md}": createLint(["prettier --write", "eslint"]),
  "*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}": createLint(["cspell lint"]),
}
