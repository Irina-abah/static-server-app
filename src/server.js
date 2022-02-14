const express = require('express');
const app = express();
const PORT = 5001;

app.use("/static", express.static("public"));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
}); 