const { Router } = require("express");
const { getAllMovies, addMovie, deleteMovie, testRoute } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", getAllMovies);
movieRouter.get("/test", testRoute);
movieRouter.delete("/movie/:id", deleteMovie);

module.exports = movieRouter;