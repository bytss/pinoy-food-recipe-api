const express = require("express");
const router = express.Router();

// Read the JSON file
const jsonData = fs.readFileSync("recipes_data.json");
const recipesData = JSON.parse(jsonData);

// Extract the recipes array from the JSON data
const recipes = recipesData.recipes;

/**
 * GET product list.
 *
 * @return product list | empty.
 */

// Define a route to get a random recipe
router.get("/random", (req, res) => {
  // Generate a random index within the range of recipes array
  const randomIndex = Math.floor(Math.random() * recipes.length);
  // Get the random recipe
  const randomRecipe = recipes[randomIndex];
  // Send the random recipe as JSON response
  res.json(randomRecipe);
});

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

module.exports = router;
