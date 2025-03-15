import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutComponent = ({ logout }) => {
    const navigate = useNavigate();  
    const doLogout = () => {
         
        navigate('/');   
    };

    return (
        <div>
            <h1>Logout</h1>
            <button className="col-md-3 btn btn-danger" onClick={doLogout}>Logout</button>
        </div>
    );
};

export default LogoutComponent;
