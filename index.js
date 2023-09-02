const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/auth', (req, res, next) => {
    // console.log("Auth Post:", req.body);
    res.sendStatus(req?.body?.Code === 'test' ? 200 : 401);
});

app.listen(8000, () => { console.log("Listening on 8000...") });