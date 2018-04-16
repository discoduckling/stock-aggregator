const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('../middleware/requireLogin');
const axios = require('axios');

module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/tickers', requireLogin, (req, res) => {
        res.send(req.user.tickers);
    });

    app.post('/api/tickers', requireLogin, async (req, res) => {
        const tickerInfo = await axios.get(`https://api.iextrading.com/1.0/stock/${req.body.ticker}/delayed-quote`);
        const newTicker = {
            symbol: req.body.ticker.toUpperCase(),
            purchases: [],
            currentPrice: tickerInfo.delayedPrice
        };

        const user = await User.findByIdAndUpdate(req.user.id, {
            tickers: [...req.user.tickers, { symbol: req.body.ticker.toUpperCase(), currentPrice: tickerInfo.data.delayedPrice }]
        }, { new: true });

        
        try {
            await user.save();
            res.send(user.tickers);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    app.post('/api/tickers/:ticker_id', requireLogin, async (req, res) => {
        const user = await User.findById(req.user.id);
        const tickers = user.tickers.id(req.params.ticker_id);
        tickers.purchases.push({qty: req.body.qty, date: req.body.date, cost: req.body.cost});
        try {
            await user.save();
            res.send(user.tickers);
            
        } catch (err) {
            res.status(400).send(err);
        }
    });

    app.delete('/api/tickers/:ticker_id', requireLogin, async (req, res) => {
        const user = await User.findById(req.user.id);
        await user.tickers.pull({_id: req.params.ticker_id});

        try {
            await user.save();
            res.send(user.tickers);
        } catch (err) {
            res.status(400).send(err);
        }
    })

    app.delete('/api/tickers/:ticker_id/:purchase_id', requireLogin, async (req, res) => {
        const user = await User.findById(req.user.id);
        const tickers = await user.tickers.id(req.params.ticker_id);
        await tickers.purchases.pull({_id: req.params.purchase_id});

        try {
            await user.save();
            res.send(user.tickers);
        } catch (err) {
            res.status(400).send(err);
        }
    })
}