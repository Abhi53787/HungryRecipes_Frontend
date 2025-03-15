
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import axios from 'axios';
import * as Yup from 'yup';

function AddVehicle() {
  const [response, setResponse] = useState("");  

  
  const validation = Yup.object({
    image: Yup.string().required("Image is mandatory"),
    name: Yup.string().min(5, "Minimum 5 characters").required("Name is mandatory"),
    price: Yup.number().positive("Must be greater than 0").required("Price is mandatory"),
    mileage: Yup.number().positive("Must be greater than 0").required("Mileage is mandatory"),
    seats: Yup.number().min(1, "Greater than zero").max(6, "Less than 7").required("Seats are mandatory"),
    color: Yup.string(),
    fuel: Yup.string(),
    gear: Yup.string(),
    description: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:9090/cars", values)  
      .then(() => {
        setResponse("Success");
        resetForm();
      })
      .catch((error) => {
        setResponse("Error occurred");
        console.error("Error adding vehicle:", error);
      });
  };

  return (
    
    
    <div  
    >
        <img
      src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2025/02_12_neve/cover_d.jpg"
      alt="Lamborghini"
      style={{
        padding: "30px",
        width: "98.9vw",
        height: "100vh",
        objectFit: "cover", 
        display: "block",
        borderRadius: "50px",
        
      }}
    />
    
  <img src="https://www.ferrari.com/media-centre/static/assets/img/placeholder.jpg" style={{
        padding: "30px",
        width: "50vw",
        height: "50vh", 
        backgroundColor: "white",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50px",
        
      }}/>       
    <img src="https://cars.mclaren.com/content/dam/mclaren-automotive/bp/home_hero_wide.jpg"
    style={{
      padding: "30px",
      width: "98.9vw",
      height: "100vh",
      objectFit: "cover",
      display: "block",
      borderRadius: "50px",}}

    />
    <div className="container-fluid"> {/* Ensures no extra margins */}
      <div className="row justify-content-center"> {/* Centers the form */}
        <div className="col-12 col-md-6"> {/* Wider form layout */}
          
            <Formik
              initialValues={{
                image: "",
                name: "",
                price: "",
                mileage: "",
                seats: "",
                color: "",
                fuel: "",
                gear: "",
                description: "",
              }}
              validationSchema={validation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label className="form-label">Image</label>
                    <Field type="text" className="form-control" name="image" data-testid="image" />
                    <ErrorMessage name="image" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <Field type="text" className="form-control" name="name" data-testid="name" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <Field type="number" className="form-control" name="price" data-testid="price" />
                    <ErrorMessage name="price" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mileage</label>
                    <Field type="number" className="form-control" name="mileage" data-testid="mileage" />
                    <ErrorMessage name="mileage" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Color</label>
                    <Field type="text" className="form-control" name="color" data-testid="color" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Seats</label>
                    <Field type="number" className="form-control" name="seats" data-testid="seats" />
                    <ErrorMessage name="seats" component="div" className="text-danger" />
                  </div>

                 

                  <div className="mb-3">
                    <label className="form-label">Fuel</label>
                    <Field as="select" className="form-control" name="fuel" data-testid="fuel">
                      <option value="">Select Fuel Type</option>
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                    </Field>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Gear</label>
                    <Field as="select" className="form-control" name="gear" data-testid="gear">
                      <option value="">Select Gear Type</option>
                      <option value="manual">Manual</option>
                      <option value="automatic">Automatic</option>
                    </Field>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <Field as="textarea" className="form-control" name="description" data-testid="description" />
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={isSubmitting} data-testid="add-btn">
                    Add Vehicle
                  </button>
                </Form>
              )}
            </Formik>
 
            <span data-testid="response" className="mt-2 d-block">{response}</span>
          </div>
        </div>
      </div>
      
    </div>

  );
}



export default AddVehicle;

