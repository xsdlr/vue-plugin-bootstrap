module.exports = {
  root: true,
  env: {
    browser: true
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    {{#if_eq lintConfig "standard"}}
    'standard',
    {{/if_eq}}
    'plugin:vue/recommended'
  ],
  rules: {
    {{#if_eq lintConfig "standard"}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow console warn and error message
    'no-console': ['error', { allow: ['warn', 'error'] }]
  }
}
