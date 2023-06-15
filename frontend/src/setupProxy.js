<<<<<<< HEAD
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
=======
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8081',
            changeOrigin: true,
        })
    );
};
>>>>>>> d3789f54843445e33b0236bb2bc55921d96135b5
