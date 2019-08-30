
const webpack = require('webpack')
// vue.config.js
module.exports = {
    // 选项...
    // publicPath: process.env.NODE_ENV === 'production'
    // ? './'
    // : '/',
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
        // config.resolve.alias.set('jquery$', 'jquery/dist/jquery.min.js');
        Object.assign(config, {
            // 开发生产共同配置
            // externals: {
            //   'vue': 'Vue',
            //   'element-ui': 'ELEMENT',
            //   'vue-router': 'VueRouter',
            //   'vuex': 'Vuex'
            // } // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(用于csdn引入)
            plugins:[
              ...config.plugins,
              new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery",
                "windows.jQuery":"jquery"
              })
            ]
          });
    },
    
        
    lintOnSave: false
}