const createConfig = require('@titicaca/eslint-config-triple/create-config')

// module.exports = createConfig({ type: 'node' })

const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' });

module.exports = {
  extends: [
    ...extendConfigs,
  ],
  overrides: [
    ...overrides
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}