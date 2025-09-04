const express = require("express");
const helloRoutes = require("./routes/helloRoutes");
const cors = require('cors')
const app = express();
const PORT = 3002;

app.use(cors())
app.use("/", helloRoutes);

app.listen(PORT, () => {
  console.log(`✅ Micro2 running at http://localhost:${PORT}`);
});
