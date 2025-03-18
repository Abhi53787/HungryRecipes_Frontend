import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import { useSelector, useDispatch } from "react-redux";
 

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5142/api/Recipe")
      .then(response => {
        console.log("Fetched Data:", response.data);
        setRecipes(response.data);
      })
      .catch(error => console.error("Error fetching recipes:", error));
  }, []);
 
  return (
    <div className="container mt-4">
      <h2 style={{ fontFamily: 'cursive' }}>Trendy Recipes</h2>
      
      {recipes.length === 0 ? (
                <div className="text-center"><div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div></div>
            ) : (
      <div className="row">
        {recipes.map(recipe => (
          <div key={recipe.recipeId} className="col-md-4 mb-4">
          <div className="card h-100 shadow-lg bg-light text-dark border-0 rounded-4">
             
            
              {recipe.imageUrl ? (
                <img src={recipe.imageUrl} className="card-img-top img-fluid" alt={recipe.recipeName} 
                style={{ height: "400px", objectFit: "cover" }}
                />
              ) : (
                <div className="p-3 text-center">No Image Available</div>
              )}
            
        
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{recipe.recipeName}</h5>
              <p className="card-text flex-grow-1">{recipe.description}</p>
              <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-primary ">
                View Recipe
              </Link>
               
            </div>
          </div>
        </div>
        
        ))}

      </div>
            )}
    </div>
  );
};

export default Home;