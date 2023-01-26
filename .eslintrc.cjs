module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.js', '*.cts', '*.vue'],
      rules: {
        'comma-dangle': 'warn'
      }
    }
  ]
};