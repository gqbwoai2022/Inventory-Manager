const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "https://optima-production-59c4.up.railway.app",
      target: "http://127.0.0.1:7890",
      changeOrigin: true,
      pathRewrite: { "^/api": "/api" },
    })
  );
};
