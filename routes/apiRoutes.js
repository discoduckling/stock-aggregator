const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/tickers', (req, res) => {
        res.send(req.user.tickers);
    });

    app.post('/api/tickers', async (req, res) => {
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