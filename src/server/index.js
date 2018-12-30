const express = require('express');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const JWTAuth = require('./middleware/JWT');
const mongoose = require('mongoose');
const config = require('./config');
const User = require('./model/User');
const userObj = {
    username: "test",
    password: "test"
};

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/jwt-training', {
    useNewUrlParser: true
});
var db = mongoose.connection;

var api = express.Router();

api.get('/getUsername', (req, res) => res.send({ username: 'test' }));
api.post('/login', (req, res) => {
    console.log(req.body);
    User.findOne({username: req.body.username}, function (err, userInfo) {
        if (err) {
            console.log("Error: (/login) " + err);
        } else {
            if (userInfo && bcrypt.compareSync(req.body.password, userInfo.password))
            {
                const token = jwt.sign({id: userInfo._id, name: userInfo.name}, config.secret, {expiresIn: '1h'});
                res.json({
                    success: true,
                    message: "User logged!",
                    data: {
                        user: _.pick(userInfo, ['name']),
                        token: token
                    }
                });
            } else {
                res.json({
                    success: false,
                    message: "Invalid username/password!",
                    data: null
                });
            }
        }
    });
});
api.get('/me', JWTAuth, function(req, res) {
    res.status(200).send({ success: true, user: req.userId });
});

api.get('/add', function(req, res) {

    var user = new User();
    user.username = "p-wldz";
    user.password = "Test";
    user.name = "Test";
    user.save(function (err) {
        if (err)
        {
            console.log(err);
        }
        res.status(200).send({
            message: 'New user created!',
            data: user
        });
    });
});

app.use('/api', api);

app.listen(12345, () => console.log('Listening on port 12345!'));
