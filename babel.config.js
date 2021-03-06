module.exports = {
  ignore: [
    './dist',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }],
    '@babel/preset-react'],
  env: {
    test: {
      plugins: [ 
        'transform-react-remove-prop-types',
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true,
          },
        ],
        '@babel/plugin-proposal-class-properties',
        ['module-resolver', {
          alias: {
            'fusion:themes': './jest/mocks/themes.js',
            'fusion:content': './jest/mocks/content.js',
            'fusion:context': './jest/mocks/context.js',
            'fusion:consumer': './jest/mocks/consumer.js',
            'fusion:environment': './jest/mocks/environment.js',
            'fusion:properties': './jest/mocks/properties.js',
            'fusion:static': './jest/mocks/static.js',
            'fusion:intl': './jest/mocks/intl.js',
          },
        }],
      ],
    },
  },
};
