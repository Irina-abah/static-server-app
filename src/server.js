require("./db/connection");
const express = require('express');
const movieRouter = require("./movies/movieRoutes");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(movieRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});