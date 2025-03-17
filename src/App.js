import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './about';
import Dashboard from './Dashboard';
import RecipeDetails from "./RecipeDetails"; 

import LoginComponent from './loginlogic/login';
import ProtectedRoute from './loginlogic/protectRoute';
import EditRecipe from './EditRecipeform';
import AddRecipe  from './addrecipe';
import RegisterComponent from './loginlogic/RegisterComponent';
import Home from './Home';
function App() {
  const [isUserAuthenticated,setAuthentication] =useState(false);
  const userLogin=()=>{
    setAuthentication(true);
  }
  const userLogout=()=>{
    setAuthentication(false);
  }
  return (
    <div className="App">
      <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm" data-testid="menu-content">
      <div className="container-fluid">
        
        {/* Brand Name */}
        <Link to="/Home" className="navbar-brand fw-bold text-light" style={{ fontFamily:'cursive'} }>HungryRecipes</Link>
        
        {/* Mobile Menu Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto"> 
          {!isUserAuthenticated&&(
            <>
             <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
          
          <li className="nav-item"><Link to="/login" className="nav-link">Join Us</Link></li>
            </>
          )}
           
         
          
          
            {isUserAuthenticated && (
              <>
                <li className="nav-item"><Link to="/Dashboard" className="nav-link">Dashboard</Link></li>
                
                <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
                
                
                
                

                {/* Logout Button */}
                <li className="nav-item">
                <button className="btn btn-outline-light ms-3 d-flex align-items-center"
                                        data-bs-toggle="modal" 
                                        data-bs-target="#logoutModal">
                                  <span className="material-symbols-outlined me-1">logout</span> Logout
                                </button>


                </li>
              </>
              
            )}
          </ul>
        </div>
      </div>
      <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="logoutModalLabel">Confirm Logout</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to Logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={userLogout} data-bs-dismiss="modal">
                            <span className="material-symbols-outlined me-1">logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </nav>
        <Routes>
        
        
          <Route path="/About" element={<About />} />
          <Route element={<ProtectedRoute isUserAuthenticated={isUserAuthenticated}/>}>
          
          <Route path="/Dashboard" element={<Dashboard />} />
          
          
          
          
           
          
          <Route path="/editrecipe/:userId/:recipeId" element={<EditRecipe />} />
          <Route path="/addrecipe/:id" element={<AddRecipe  />} />
          
        
          {/* /editcar/${id} */}
         
          </Route>
          <Route path='/login' element={<LoginComponent login={userLogin}/>}></Route>
          <Route path="/register" element={<RegisterComponent />} />
          <Route path='/' element={<Home/>}></Route>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />

        </Routes>

      
      </div>
    </div>
  );
}

export default App;
