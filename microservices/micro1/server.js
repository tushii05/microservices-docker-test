const express = require("express");
const helloRoutes = require("./routes/helloRoutes");
const cors = require('cors')
const app = express();
const PORT = 3001;

app.use(cors())

app.use("/", helloRoutes);

app.listen(PORT, () => {
    console.log(`✅ Micro1 running at http://localhost:${PORT}`);
});
