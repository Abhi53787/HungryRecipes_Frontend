import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APIManager from "./APIManager";

function Dashboard() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            navigate("/login");
            return;
        }
        APIManager.GetAPICall(`http://localhost:5142/api/User/${userId}`)
            .then((data) => {
                if (data) {
                    setRecipes(data);
                }
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    }, [userId, navigate]);

    function addRecipe(id) {
        navigate(`/addrecipe/${id}`);
    }

    function navigateEditform(userId, id) {
        navigate(`/editrecipe/${userId}/${id}`, {
            state: { token: localStorage.getItem("jwtToken") },
        });
    }

    function confirmDelete(id) {
        setSelectedRecipeId(id);
    }

    function deleteRecipe() {
        if (!selectedRecipeId) return;
        const deleteUrl = `http://localhost:5142/api/User/${userId}/${selectedRecipeId}`;

        APIManager.DeleteApiCall(deleteUrl)
            .then(() => {
                setRecipes(recipes.filter(recipe => recipe.recipeId !== selectedRecipeId));
            })
            .catch((error) => console.error("Error deleting recipe:", error));
    }

    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text">Dashboard</h2>
                <button onClick={() => addRecipe(userId)} className="btn btn-primary shadow-sm">
                    + Add Recipe
                </button>
            </div>

            <marquee>Track Your Recipes Here</marquee>

            {recipes.length === 0 ? (
                <p className="text-center"><div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div></p>
            ) : (
                <div className="row">
                    {recipes.map((recipe) => (
                        <div key={recipe.recipeId} className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img
                                    src={recipe.imageUrl}
                                    className="card-img-top"
                                    alt={recipe.recipeName}
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{recipe.recipeName}</h5>
                                    <p className="card-text flex-grow-1">{recipe.description}</p>
                                    <div className="d-flex justify-content-between mt-3">
                                        <button
                                            onClick={() => navigateEditform(userId, recipe.recipeId)}
                                            className="btn btn-info btn-sm"
                                        >
                                            <span className="material-symbols-outlined">edit</span> Edit
                                        </button>
                                        <button
                                            onClick={() => confirmDelete(recipe.recipeId)}
                                            className="btn btn-danger btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                        >
                                            <span className="material-symbols-outlined">delete</span> Delete
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Delete Confirmation Modal */}
            <div
                className="modal fade"
                id="deleteModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Deletion</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this recipe?
                        </div>
                        <div className="modal-footer justify-content-end">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-danger" onClick={deleteRecipe} data-bs-dismiss="modal">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
