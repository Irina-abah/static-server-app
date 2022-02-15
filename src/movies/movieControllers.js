const Movie = require("./modieModel");

exports.getAllMovies = (req, res) => {
  Movie.find({})
  .then((movies) => res.send(movies))
  .catch(err => {
    console.log(err)
    res.status(500).send({message: err.message})
  })
};

exports.addMovie = (req, res) => {
  Movie.create(req.body)
  .then((movie) => res.send(movie))
  .catch(err => {
    console.log(err)
    res.status(500).send({message: err.message})
  })
}

exports.deleteMovie = (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
  .orFail(new Error("Movie wasn't found"))
  .then((movie) => {
    if (movie) {
      res.send({message: "Movie was successfully deleted"})
    }
    return movie;
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({message: err.message})
  })
}

exports.updateMovie = (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    context: 'query',
  })
  .orFail(new Error("Movie wasn't found"))
  .then((movie) => res.send(movie))
  .catch(err => {
    console.log(err)
    res.status(500).send({message: err.message})
  })
}

exports.testRoute = async (req, res) => {
  res.status(200).send({"test": "test route works"})
}