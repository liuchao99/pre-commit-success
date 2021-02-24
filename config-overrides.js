const { override, adjustStyleLoaders, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');
function pathResolve (pathUrl) {
  return path.join(__dirname, pathUrl)
}
module.exports = override(
  addWebpackAlias({
    '@': pathResolve('./src')
  }),

  fixBabelImports('import', {
    libraryName: 'antd',
    
    libraryDirectory: 'es',
    
    style: true //自动打包相关的样式 默认为 style:'css'
    
  }),

  
  // antd样式覆盖
  addLessLoader({
    
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' }
    }
      
  }),

  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/assets/styles/global.scss' //这里是你自己放公共scss变量的路径
        }
      });
    }
  }),
  
);