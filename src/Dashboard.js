import React, { useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import APIManager from "./APIManager";
function Dashboard() {
  const [recipes,setRecipes]= useState([]);
  const navigate = useNavigate();
  const userId=localStorage.getItem("userId");
  console.log("Fetching recipes for User ID:", userId);

  useEffect(() => {
    if (!userId) {
        navigate("/login"); // Redirect if not logged in
        return;
    }
    APIManager.GetAPICall(`http://localhost:5142/api/User/${userId}`)

    .then((data) => {
      
      console.log("API Response:", data);
        if (data) {
            setRecipes(data);
        } else {
            console.error("No data received.");
        }
    })
    .catch((error) => console.error("Error fetching recipes:", error));
}, [userId, navigate]);
function addRecipe(id){
    navigate(`/addrecipe/${id}`);
}
  return (
    <div className="container-fluid px-0 mt-3">  {/* Full-width container */}
     <div className="d-flex justify-content-between align-items-center mb-3 px-3">
                <h2 className="text">Dashboard</h2>
                <button  onClick={() => addRecipe(userId)}  className="btn btn-primary shadow-sm">+ Add Recipe</button>
            </div>
     
    <marquee>Track Your Recipes Here</marquee>
    {recipes.length === 0 ? (
                <p className="text-center">No recipes found.</p>
            ) : (
                <div className="row">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src={recipe.imageUrl  }
                                    className="card-img-top"
                                    alt={recipe.recipeName}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.recipeName}</h5>
                                    <p className="card-text">{recipe.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
  </div>
  );
}

export default Dashboard;
