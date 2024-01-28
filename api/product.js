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

// Read the JSON file
const jsonData = fs.readFileSync("recipes_data.json");
const recipesData = JSON.parse(jsonData);

// Extract the recipes array from the JSON data
const recipes = recipesData.recipes;

// Define a route to get a random recipe
router.get("/random", async (req, res) => {
  try {
    // Generate a random index within the range of recipes array
    const randomIndex = Math.floor(Math.random() * recipes.length);
    // Get the random recipe
    const randomRecipe = recipes[randomIndex];
    // Send the random recipe as JSON response
    res.json(randomRecipe);
  } catch (error) {
    console.error("Error in /random route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
