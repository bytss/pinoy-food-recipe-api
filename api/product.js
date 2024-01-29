const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

const fs = require("fs");
const path = require("path");

// Define a route to get a random recipe
router.get("/random", (req, res) => {
  // Construct the file path
  const filePath = path.resolve(__dirname, "recipes_data.json");

  // Asynchronously read the JSON file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      // Parse the JSON data
      const recipesData = JSON.parse(data);
      const recipes = recipesData.recipes;

      // Generate a random index within the range of recipes array
      const randomIndex = Math.floor(Math.random() * recipes.length);
      // Get the random recipe
      const randomRecipe = recipes[randomIndex];

      // Send the random recipe wrapped in an array as JSON response
      res.json({ recipes: [randomRecipe] });
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

module.exports = router;
