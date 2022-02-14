const { Router } = require("express");
const { getAllMovies, addMovie, testRoute } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", getAllMovies);
movieRouter.get("/test", testRoute);

module.exports = movieRouter;