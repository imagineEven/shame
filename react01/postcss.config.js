module.exports = {
  plugins: [
    require("autoprefixer")({
      // 处理5个浏览器的兼容问题，针对flex;
      browsers: ['last 5 versions']
    })
  ]
}