import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APIManager from "./APIManager";

function Carlist() {
    const [cars, setCars] = useState([]);
    const [selectedCarId, setSelectedCarId] = useState(null);
    const navigate = useNavigate();
    const apiUrl = "http://localhost:5142/api/Recipe";

    useEffect(() => {
        APIManager.GetAPICall(apiUrl)
            .then((data) => setCars(data))
            .catch((error) => console.error("Error fetching cars:", error));
    }, []);

    function navigatetodetail(car) {
        navigate(`/cardetail/${car.id}`, { state: { token: localStorage.getItem("jwtToken") } });
    }

    function navigateEditform(id) {
        navigate(`/editcar/${id}`, { state: { token: localStorage.getItem("jwtToken") } });
    }

    function confirmDelete(id) {
        setSelectedCarId(id);
    }

    function deletecar() {
        if (!selectedCarId) return;
        const deleteurl = `http://localhost:5058/api/Car/${selectedCarId}`;
        APIManager.DeleteApiCall(deleteurl).then(() => {
            setCars(cars.filter(car => car.id !== selectedCarId));
        });
    }

    function addcar() {
        navigate('/addcar');
    }

    return (
        <div className="container-fluid mt-3">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-3 px-3">
                <h2 className="text-primary">Available Cars</h2>
                <button onClick={addcar} className="btn btn-primary shadow-sm">+ Add Car</button>
            </div>

            {/* Full-Width Table with Rounded Borders */}
            <div className="table-responsive px-2">
                <table className="table table-bordered w-100" style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <thead className="table-light">
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => (
                            <tr key={car.recipeId} className="border-light">
                                <td>{car.recipeName}</td>
                                {/* <td>{car.Ingredients}</td> */}
                                {/* <td>{car.year}</td> */}
                                <td className="text-center">
                                    <button onClick={() => navigatetodetail(car)} className="btn btn-success btn-sm me-2">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button onClick={() => navigateEditform(car.id)} className="btn btn-info btn-sm me-2">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button 
                                        onClick={() => confirmDelete(car.id)} 
                                        className="btn btn-danger btn-sm" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#deleteModal">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Delete Confirmation Modal (Bootstrap Standard) */}
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this car?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={deletecar} data-bs-dismiss="modal">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <p className="text-muted text-center mt-3">
                <i>Automatic JSON Conversion in Axios but Manual conversion is needed in Fetch</i>
            </p>
        </div>
    );
}

export default Carlist;
