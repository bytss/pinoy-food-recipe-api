const express = require("express");
const app = express();
const recipes = require("./api/recipes");

app.use(express.json({ extended: false }));

app.use("/api/recipes", recipes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
