const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/tickers', requireLogin, (req, res) => {
        res.send(req.user.tickers);
    });

    app.post('/api/tickers', requireLogin, async (req, res) => {
        const newTicker = {
            symbol: req.body.ticker.toUpperCase(),
            purchases: [],
            currentPrice: 10
        };

        const user = await User.findByIdAndUpdate(req.user.id, {
            tickers:[...req.user.tickers, { symbol: req.body.ticker.toUpperCase() }]
        }, { new: true });
        try {
            await user.save();
            res.send(req.user.tickers);
        } catch (err) {
            res.status(400).send(err);
        }
    })
}