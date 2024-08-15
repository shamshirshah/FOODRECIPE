const express = require("express");
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require("../controller/recipe");

const router = express.Router();

router.get("/", getRecipes);       // Route to get all recipes
router.get("/:id", getRecipe);     // Route to get a specific recipe by ID
router.post("/", addRecipe);       // Route to add a new recipe
router.put("/:id", editRecipe);    // Route to edit a recipe by ID
router.delete("/:id", deleteRecipe); // Route to delete a recipe by ID

module.exports = router;
