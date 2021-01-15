const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const router = express.Router();

router.use('/api', createProxyMiddleware({ 
    //target: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    target: "http://localhost:5050",
    headers: {
        accept: "application/json",
    },
    changeOrigin: true
}));

router.get("/", (req, res) => {
    //res.send("on the home page");
    console.log('hit home route! awesome!');
    res.render("index", { message: "handlebars is cool! And so is browser-sync" });
})

router.get("/contact", (req, res) => {
    res.render("contact");
})

module.exports = router;