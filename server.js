var express = require('express');
var app = express();

// set port cho ứng dụng
var port = process.env.PORT || 8080;

// tạo route cho trang index
app.get('/', function(req, res) {

    // trả về một lời chào đơn giản
    res.send('XIN CHÀO BẠN');
});


app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});