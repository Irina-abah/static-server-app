const Movie = require("./modieModel");

exports.getAllMovies = (req, res) => {
  Movie.find({})
  .then((movies) => res.send(movies))
  .catch(err => console.log(err))
};

exports.addMovie = (req, res) => {
  Movie.create(req.body)
  .then((movie) => res.send(movie))
  .catch(err => console.log(err))
}

exports.testRoute = async (req, res) => {
  res.status(200).send({"test": "test route works"})
}