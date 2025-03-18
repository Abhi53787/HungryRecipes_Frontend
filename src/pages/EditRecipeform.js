import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import APIManager from "../services/APIManager";

function EditRecipe() {
    const { userId, recipeId } = useParams();
    const navigate = useNavigate();
    const baseUrl = `http://localhost:5142/api/User/${userId}/${recipeId}`;
    const [successMessage, setSuccessMessage] = useState("");
    const [recipeData, setRecipeData] = useState(null); 

    useEffect(() => {
        APIManager.GetAPICall(baseUrl)
            .then(data => {
                console.log(data);
                if (data) {
                    setRecipeData(data[0]);  
                }
            })
            .catch(error => console.error("Error fetching recipe:", error));
    }, [userId, recipeId]);

    const formik = useFormik({
        initialValues: {
            Category: recipeData?.category || '',
            RecipeName: recipeData?.recipeName || '',
            Description: recipeData?.description || '',
            Ingredients: recipeData?.ingredients || '',
            Instructions: recipeData?.instructions || '',
            ImageUrl: recipeData?.imageUrl || ''
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            updateRecipe(values);
        }
    });

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                formik.setFieldValue("ImageUrl", reader.result);
            };
            reader.onerror = error => {
                console.error("Error converting image:", error);
            };
        }
    }

    function updateRecipe(values) {
        APIManager.PutApiCall(baseUrl, values)
            .then(response => {
                if (response.ok) {
                    setSuccessMessage("Recipe updated successfully!");
                    setTimeout(() => navigate('/Dashboard'), 1500);
                } else {
                    alert("Update failed");
                }
            })
            .catch(error => console.error("Error updating recipe:", error));
    }

    return (
        <div className="container vh-100 w-100 p-4">
            <h2 className="mb-3">Edit Recipe</h2>

            {successMessage && (
                <div className="alert alert-success text-center" role="alert">
                    {successMessage}
                </div>
            )}

            <form onSubmit={formik.handleSubmit} className="bg-white p-4 border rounded"> 
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Category</label>
                        <select
                            name="Category"
                            className="form-control"
                            value={formik.values.Category}
                            onChange={formik.handleChange}
                        >
                            <option value="">None</option>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Recipe Name</label>
                        <input type="text" name="RecipeName" className="form-control"
                            value={formik.values.RecipeName} onChange={formik.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Description</label>
                        <input type="text" name="Description" className="form-control"
                            value={formik.values.Description} onChange={formik.handleChange} />
                    </div>
                </div> 
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Ingredients</label>
                        <textarea name="Ingredients" className="form-control"
                            rows="5"
                            value={formik.values.Ingredients} onChange={formik.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Instructions</label>
                        <textarea name="Instructions" className="form-control"
                            rows="5"
                            value={formik.values.Instructions} onChange={formik.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Upload Image</label>
                        <input
                            type="file"
                            name="ImageUrl"
                            className="form-control"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
}

export default EditRecipe;
