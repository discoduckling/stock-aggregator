const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');

mongoose.connect(keys.MONGO_URI);

require('./services/passport');

const app = express();
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 3 * 60 * 60 * 1000,
        keys: [keys.COOKIE_KEY]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js or main.css file
    app.use(express.static('client/build'));
    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));