var jwt = require('jsonwebtoken');
var config = require('../config');

function verify(req, res, next) {
    var token = req.headers['authorization'];
    token = token.replace("Bearer ", "");
    if (!token)
        return res.status(403).send({ success: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
            return res.status(500).send({ success: false, message: 'Failed to authenticate token.' + err });

        req.userId = decoded.id;
        next();
    });
}

module.exports = verify;