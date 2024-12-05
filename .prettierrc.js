module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'none',
  semi: true,
  importOrder: [
  '^react',
  '^react$',
  '^react-native$',
  '^redux',
  '^@',
  '^@$',
  '^[a-zA-Z]',
  '^_components/(.*)$',
  '^_features/(.*)$',
  '^_navigation/(.*)$',
  '^_store/(.*)$',
  '^_hooks/(.*)$',
  '^_models/(.*)$',
  '^_utils/(.*)$',
  '^_enums/(.*)$',
  '^_config/(.*)$',
  '_i18n',
  '_languages',
  '^../(.*)$',
  '^./(.*)$'
  ],
  importOrderSeparation: true,
  experimentalBabelParserPluginsList: [
  'jsx',
  'typescript',
  'js',
  'classProperties'
  ],
  importOrderParserPlugins: ['classProperties', 'typescript', 'jsx']
  };