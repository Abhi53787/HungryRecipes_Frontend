import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import APIManager from "./APIManager";
import { useFormik } from "formik";

function EditCarform() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        APIManager.GetAPICall(`http://localhost:5058/api/Car/${id}`)
            .then(data => formik.setValues(data))
            .catch(error => console.error("Error fetching car:", error));
    }, [id]);

    const formik = useFormik({
        initialValues: { brand: '', model: '', year: '', color: '', price: '' },
        enableReinitialize: true,
        onSubmit: (values) => {
            APIManager.PutApiCall(`http://localhost:5058/api/Car/${id}`, values)
                .then(response => {
                    if (response.ok) {
                        setSuccessMessage("Car updated successfully!");
                        setTimeout(() => navigate('/carlist'), 1500);
                    } else {
                        alert("Update failed");
                    }
                })
                .catch(error => console.error("Error updating car:", error));
        }
    });

    return (
         <div className="container vh-100 w-100 p-4">
            <form onSubmit={formik.handleSubmit} className="bg-white p-4 border rounded">
                <h2 className="text-center mb-3">Edit Car</h2>

                {/* Success Alert */}
                {successMessage && (
                    <div className="alert alert-success text-center" role="alert">
                        {successMessage}
                    </div>
                )}

                {/* First Row */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <input type="text" name="brand" placeholder="Brand" className="form-control"
                            value={formik.values.brand} onChange={formik.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" name="model" placeholder="Model" className="form-control"
                            value={formik.values.model} onChange={formik.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <input type="number" name="year" placeholder="Year" className="form-control"
                            value={formik.values.year} onChange={formik.handleChange} />
                    </div>
                </div>

                {/* Second Row */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <input type="text" name="color" placeholder="Color" className="form-control"
                            value={formik.values.color} onChange={formik.handleChange} />
                    </div>
                    <div className="col-md-4">
                        <input type="number" name="price" placeholder="Price" className="form-control"
                            value={formik.values.price} onChange={formik.handleChange} />
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center gap-2">
                    <span>Update</span>
                </button>
            </form>
        </div>
    );
}

export default EditCarform;
