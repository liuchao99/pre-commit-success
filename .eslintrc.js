module.exports = {
  "parser": "@typescript-eslint/parser",  //定义ESLint的解析器
  "extends": 'eslint:recommended', // 定义文件继承的子规范
  "plugins": [
    "@typescript-eslint/eslint-plugin",
		"react-hooks"
  ], // 定义了该eslint文件所依赖的插件
  "env": {
    node: true,
	  es6: true,  //启用除了modules以外的所有ES6特性
	  browser: true,
  },
  "rules": {
    indent: ['error', 2],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'never'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'object-curly-spacing': ['warn', 'always'],
    'no-use-before-define': 'off',
}
}