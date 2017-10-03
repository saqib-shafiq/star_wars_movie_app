/**
 * Created by saqib on 10/2/2017.
 */

var moviesJSON = require('../movies.json');

// home
exports.home = function(req, res){

    var movies = moviesJSON.movies;

    res.render('home', {
        title: "Star Wars Movies",
        movies : movies
    });
};

//single_movie
exports.movie_single = (req, res) => {
    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;
    if(episode_number > 0 && episode_number < 7){

        var movie = movies[episode_number - 1];
        var main_characters = movie.main_characters;

        res.render('movie_single',{
            movies: movies,
            title: movie.title,
            movie: movie,
            main_characters: main_characters
        });
    }else{
        var movie = movies[episode_number - 1];
        res.render('not_found', {
            movies: movies,
            title: 'Page not found'
        });
    }
};

//notFound
exports.notFound = (req, res) => {
    var movies = moviesJSON.movies;
    res.render('not_found', {
        movies: movies,
        title: 'Page not found'
    });
};
