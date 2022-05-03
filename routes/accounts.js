const accs = require('express').Router();

accs.post('/sign_in', (req, res) => {
    console.info(`${req.method} request received for feedback`);
});

accs.post('/sign_up', (req, res) => {
    console.log(req.body);
});

module.exports = accs;