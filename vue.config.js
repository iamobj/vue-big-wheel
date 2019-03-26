
module.exports = {
  // 因为打包出来的库会将 css 单独提取到 css 文件里，设置 extract 为 false 则会强制内联。
  css: {
    extract: false
  },

  devServer: { // 设置代理
    hot: true, //热加载
    host: '0.0.0.0', //ip地址
    port: 9696, //端口
    https: false, //false关闭https，true为开启
    open: false, //自动打开浏览器
  }
}