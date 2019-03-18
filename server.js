var express = require('express');
var app = express();

// set port cho ứng dụng
var port = process.env.PORT || 8080;

// tạo route cho api
app.get('/api', function(req, res) {

    // trả về file index.html
    res.send('XIN CHÀO BẠN');
});


app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});