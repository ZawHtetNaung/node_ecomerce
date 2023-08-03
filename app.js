var express = require('express');
var todoController = require('./controllers/todoController');
var ecommerceController = require('./controllers/ecommerceController');

var app = express();

app.use(express.json());

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

app.use("/users", userRoute);
app.use("/posts", postRoute);
// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

//fire contorllers
// todoController(app);
// ecommerceController(app);

// listen to port
app.listen(3000);
console.log('You are listen to port 3000')