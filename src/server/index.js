const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const VerifyToken = require('./middleware/JWT');

const config = require('./config');
const userObj = {
    username: "test",
    password: "test"
};

app.use(bodyParser.urlencoded({ extended: false }));
var api = express.Router();

api.get('/getUsername', (req, res) => res.send({ username: 'test' }));
api.post('/login', (req, res) => {
    let credentials = {username: req.body.username, password: req.body.password };
    if (JSON.stringify(credentials) == JSON.stringify(userObj))
    {
        console.log("OK");
    }

    var token = jwt.sign({ id: "test" }, config.secret, {
        expiresIn: 86400
    });

    res.status(200).send({ success: true, token: token });
});

api.get('/me', VerifyToken, function(req, res, next) {

    console.log("Got it");

    res.status(200).send({ success: true, user: req.userId });
});

app.use('/api', api);

app.listen(12345, () => console.log('Listening on port 12345!'));
