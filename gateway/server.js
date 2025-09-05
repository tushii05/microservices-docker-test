const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 3000;

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));


app.use("/micro1", createProxyMiddleware({
    target: "http://micro1:3001",
    changeOrigin: true,
    pathRewrite: { "^/micro1": "" },
    logLevel: "debug"
}));

app.use("/micro2", createProxyMiddleware({
    target: "http://micro2:3002",
    changeOrigin: true,
    pathRewrite: { "^/micro1": "" },
    logLevel: "debug"
}));

app.get("/", (req, res) => {
    res.send("🚪 API Gateway is running. Try /micro1 or /micro2");
});

app.listen(PORT, () => {
    console.log(`🚪 Gateway running at http://localhost:${PORT}`);
});
