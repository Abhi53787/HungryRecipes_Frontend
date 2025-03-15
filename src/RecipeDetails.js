import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
    const { recipeId } = useParams(); // Get recipeId from URL
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5142/api/Recipe/${recipeId}`)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.error("Error fetching recipe details:", error);
                setError("Recipe not found!");
            });
    }, [recipeId]);

    if (!recipe) return <p className="text-center text-danger">{error || "Fetching recipe details..."}</p>; // prevents error while rendering

    return (
        <div className="container mt-4">
            <Link to="/" className="btn btn-secondary mb-3 d-inline-flex align-items-center gap-2 w-auto"><span class="material-symbols-outlined">
arrow_back
</span> Back to Home</Link>
            <h2 className="card-title">{recipe.recipeName}</h2>
                    <p className="card-text">{recipe.description}</p>
            <div className="card shadow-lg p-4 bg-light text-dark border-0 rounded-4">
                {recipe.imageUrl ? (
                    <img src={recipe.imageUrl} className="card-img-top rounded-3" alt={recipe.recipeName} />
                ) : (
                    <div className="p-3 text-center">No Image Available</div>
                )}
                <div className="card-body">
                    
                    <h4>Ingredients</h4>
                    <ul>
                        {recipe.ingredients.split(",").map((ingredient, index) => (
                            <li key={index}>{ingredient.trim()}</li>
                        ))}
                    </ul>
                    <h4>Steps</h4>
                    <p>{recipe.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
