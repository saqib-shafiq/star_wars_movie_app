/**
 * Created by saqib on 10/2/2017.
 */
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// port to listen
const port = 3100;

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// --------------- Routes -----------------

// home
app.get('/', routes.home);

//movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//notFound
app.get('*', routes.notFound);


app.listen(process.env.PORT || port);
