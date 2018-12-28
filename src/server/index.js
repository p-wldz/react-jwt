const express = require('express');

const app = express();


app.get('/api/getUsername', (req, res) => res.send({ username: 'test' }));
app.listen(12345, () => console.log('Listening on port 12345!'));
