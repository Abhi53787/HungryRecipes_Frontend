import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import { useSelector, useDispatch } from "react-redux";
import { searchRecipes } from "./redux-store/recipeActions";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  
  const dispatch = useDispatch();
  const recipess = useSelector((state) => state.filteredRecipes);

  useEffect(() => {
    axios.get("http://localhost:5142/api/Recipe")
      .then(response => {
        console.log("Fetched Data:", response.data);
        setRecipes(response.data);
      })
      .catch(error => console.error("Error fetching recipes:", error));
  }, [dispatch]);
  const handleSearch = (event) => {
    dispatch(searchRecipes(event.target.value));
};
  
  
  return (
    <div className="container mt-4">
      <h2 style={{ fontFamily: 'cursive' }}>Trendy Recipes</h2>
      <center>
      <input  style={{color:"black", borderRadius:"10px", marginBottom:"10px"}}type="text" placeholder="Search by category" onChange={handleSearch} />
      </center>
      {recipes.length === 0 ? (
                <p className="text-center"><div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div></p>
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
