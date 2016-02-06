const express = require('express');

const App = function () {
    const app = express();

    app.get('/', function (req, res) {
        res.send("It's a me...hot-coffee");
    });
    
    app.listen('9001', function () {
        console.log('app listening on port 9001');
    });
};

module.exports = App;
