require('dotenv').config({
    path: './.env'
})
// import require server
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;
const dbo = require('./db/connect.js');
// middleware
app.use(cors());
app.use(express.json());
// config route
app.use(require('./routes/records'));
// Handle Error
app.use((_req, res) => {
    res.status(404).send('Not found page');
})
app.use((err, _req, res, next) => {
    consol.error(err.stack);
    res.status(500).send('Something Broken')
})
// Connect to database
dbo.connectToServer(err => {
    if (err) {
        console.error(err);
        process.exit();
    }
    app.listen(PORT, () => {
        console.log(`Server is connect on ${PORT}`);
    })
})
