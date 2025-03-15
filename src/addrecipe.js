import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import APIManager from "./APIManager";

function AddRecipe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const baseUrl = `http://localhost:5142/api/User/${id}`;

    // State for success message
    const [successMessage, setSuccessMessage] = useState("");

    const formik = useFormik({
        initialValues: {
            Category: '',
            RecipeName: '',
            Description: '',
            Ingredients: '',
            Instructions: '',
            ImageUrl: null
        },
        validationSchema: Yup.object({
            Category: Yup.string().required("Category is required"),
            RecipeName: Yup.string().required("Name is required"),
            Description: Yup.string().required("Description is required"),
            Ingredients: Yup.string().required("Ingredients are required"),
            Instructions: Yup.string().required("Instructions are required"),
            ImageUrl: Yup.mixed()
        }),
        onSubmit: (values) => {
            console.log("🚀 Formik onSubmit triggered");
            console.log("Submitted values:", values);
            addrecipetoDb(values);
        }
    });

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                formik.setFieldValue("ImageUrl", reader.result); // Set Base64 string
            };
            reader.onerror = error => {
                console.error("Error converting image:", error);
            };
        }
    }
    

    function addrecipetoDb(values) {
        console.log("Post API Call Initiated with values:", values);
        APIManager.PostApicall(baseUrl, values)
            .then(response =>{
                console.log("in Post API Call Initiated with values:", response);


             response.json()})
            .then(data => {
                console.log(data);
                setSuccessMessage("Recipe added successfully!");
                setTimeout(() => navigate('/Dashboard'), 1500);
            })
            .catch(error => alert("Error adding the Recipe"));
    }

    return (
        <div className="container vh-100 w-100 p-4">
            <h2 className="mb-3">Add Recipe</h2>

            {/* Success Alert */}
            {successMessage && (
                <div className="alert alert-success text-center" role="alert">
                    {successMessage}
                </div>
            )}

            <form onSubmit={formik.handleSubmit} className="bg-white p-4 border rounded">
                {/* First Row */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Category <span style={{ color: "red" }}>*</span></label>
                        <select
                            name="Category"
                            className="form-control"
                            value={formik.values.Category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">None</option>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                        </select>
                        {formik.touched.Category && formik.errors.Category && (
                            <div className="text-danger">{formik.errors.Category}</div>
                        )}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Recipe Name <span style={{ color: "red" }}>*</span></label>
                        <input type="text" name="RecipeName" className="form-control"
                            value={formik.values.RecipeName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.RecipeName && formik.errors.RecipeName && <div className="text-danger small">{formik.errors.RecipeName}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Description <span style={{ color: "red" }}>*</span></label>
                        <input type="text" name="Description" className="form-control"
                            value={formik.values.Description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Description && formik.errors.Description && <div className="text-danger small">{formik.errors.Description}</div>}
                    </div>
                </div>

                {/* Second Row  */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Ingredients <span style={{ color: "red" }}>*</span></label>
                        <textarea name="Ingredients" className="form-control"
                            rows="5"
                            placeholder="Enter detailed ingredients..."
                            value={formik.values.Ingredients} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Ingredients && formik.errors.Ingredients && <div className="text-danger small">{formik.errors.Ingredients}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Instructions <span style={{ color: "red" }}>*</span></label>
                        <textarea name="Instructions" className="form-control"
                            rows="5"
                            placeholder="Enter detailed instructions..."
                            value={formik.values.Instructions} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Instructions && formik.errors.Instructions && <div className="text-danger small">{formik.errors.Instructions}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Upload Image </label>
                        <input
                            type="file"
                            name="ImageUrl"
                            className="form-control"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary" onClick={() => console.log("🔴 Submit Button Clicked!")}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddRecipe;
