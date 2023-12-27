import tsParser from '@typescript-eslint/parser'
import pluginStylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': pluginStylistic
    },
    rules: {
      // Add your config here
      '@stylistic/indent': ['error', 2]
    }
  },

  // Parser setup
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser
    }
  },
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        jsx: true
      }
    }
  },
  {
    files: ['**/*.js'],
  },
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        jsx: true
      }
    }
  }
]
