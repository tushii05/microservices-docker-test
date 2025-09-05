const app = require('./app');
const env = require("./config/env");

app.listen(env.port, () => {
    console.log(` Auth service running on port ${env.port}`);
});
