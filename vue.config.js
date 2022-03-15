// vue.config.js
const path = require('path')
const resolve = dir => path.join(__dirname, dir)


module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views',resolve('src/views'))
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))
            .set('utils', resolve('src/utils'))
    },
    devServer: {
        host: 'localhost', // ip
        port: 8080, // 设置端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy:null  //设置代理
    },
    publicPath: './'
}
