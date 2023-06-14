const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://32ab-168-188-191-212.ngrok-free.app",
      changeOrigin: true,
    })
  );
};
