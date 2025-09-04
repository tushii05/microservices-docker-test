const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 3000;

// Proxy to Micro1
app.use("/micro1", createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true
}));

// Proxy to Micro2
app.use("/micro2", createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true
}));

// Root check
app.get("/", (req, res) => {
    res.send("🚪 API Gateway is running. Try /micro1 or /micro2");
});

app.listen(PORT, () => {
    console.log(`🚪 Gateway running at http://localhost:${PORT}`);
});
