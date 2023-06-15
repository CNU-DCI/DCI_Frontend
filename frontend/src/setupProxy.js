const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://34.64.100.140:8081",
      changeOrigin: true,
    })
  );
};
