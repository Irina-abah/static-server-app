const { Router } = require("express");
const { getAllMovies, addMovie, deleteMovie, testRoute, updateMovie } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", getAllMovies);
movieRouter.get("/test", testRoute);
movieRouter.delete("/movie/:id", deleteMovie);
movieRouter.patch("/movie/:id", updateMovie);

module.exports = movieRouter;