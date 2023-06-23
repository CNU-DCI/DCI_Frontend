const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://34.22.77.62:8081",
      changeOrigin: true,
    })
  );
};
