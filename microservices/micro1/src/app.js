const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth.routes');

dotenv.config();
const app = express();

app.use(cors())
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send(' Auth Service Running');
});

// Sync DB (optional: { force: true } for reset)
sequelize.sync()
    .then(() => console.log(' Database synced'))
    .catch(err => console.error(' DB Sync Error:', err));

module.exports = app;
