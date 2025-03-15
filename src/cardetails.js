 
// import React, { useState, useEffect,Suspense } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import axios from "axios";
// const Lazyload =React.lazy(()=>import('./Lazyload'));

// function CarDetails() {
//     const location = useLocation();
//     const token = location.state?.token;
//     const { id } = useParams();
//     const [car, setCars] = useState({ Brand: '' });
//     const baseUrl=`http://localhost:5058/api/Cars/${id}`;

//     // useEffect(() => {
//     //     const baseUrl = 'http://localhost:9090/cars/' + id;
//     //     fetch(baseUrl)
//     //         .then(response => response.json())
//     //         .then(result => setCar(result));
//     // }, [id]);
//     useEffect(()=>{
//         fetch(baseUrl,{
//             headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': `Bearer ${token}`
//             },
//         }).then(response=>response.json()).then(result=>setCars(result));

//     },[id,token]);
 
//     const [error, setError] = useState(null);
//     console.log("checking");
//     useEffect(()=>{
//         axios.get(baseUrl,{
//             headers:{
//                 'Authorization': `Bearer ${token}`,
//             }
//         }).then((response)=>{
//             console.log(response.data);
//             setCars(response.data);
//         });
//     },[]);


//     return (
//         <div className="App">
//             <h1>Car Details</h1>
//             <h3>CarId: {id}</h3>
//             <p>Brand: {car.brand}</p>
            
//             <Suspense fallback={<div>Loading Parent Data...</div>}>
//         <Lazyload />
//       </Suspense>
//         </div>
//     );
// }

// export default CarDetails;

import React, { useState, useEffect, Suspense } from "react";
import { useLocation, useParams } from "react-router-dom";
import APIManager from "./APIManager";  
const Lazyload = React.lazy(() => import("./Lazyload"));

function CarDetails() {
    const location = useLocation();
    const token = location.state?.token;
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const baseUrl = `http://localhost:5058/api/Car/${id}`;

    useEffect(() => {
        APIManager.GetAPICall(baseUrl)
            .then((data) => setCar(data))
            .catch((error) => console.error("Error fetching cars:", error));
    }, []);

    


    return (
        <div className="App">
            <h1>Car Details</h1>
            <h3>CarId: {id}</h3>
            {car ? (
                <p>Brand: {car.brand}</p>
            ) : (
                <p>Loading car details or car not found...</p>
            )}

            <Suspense fallback={<div>Loading Parent Data...</div>}>
                <Lazyload />
            </Suspense>
        </div>
    );
}

export default CarDetails;
