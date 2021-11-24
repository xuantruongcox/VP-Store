const express = require('express');
const router = express.Router();
const dbo = require('../db/connect.js');
router.get('/', (req, res) => {
    res.send('HomePage');
})
// Users
router.get('/products', (req, res) => {
    const dbConnect = dbo.getDB();
    dbConnect
        .collection("products")
        .find({}).limit(20)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send("Error Fetching Collection");
            } else {
                res.json(result);
            }
        })
})

module.exports = router;