// Dependencies 
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller');

// create an app
const app = express();

// Setting port
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the 'public' directory in the application directory
app.use(express.static('public'));

// Handle JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Middleware-Rendering Engine: Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(PORT, () => {
    console.log("App is listening on PORT " + PORT);
});
