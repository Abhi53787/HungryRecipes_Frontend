import React from "react";
import { useFormik } from "formik";

function About() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="container mt-5 text-start text-light">
      <h2 className="fw-bold text-center text-dark mb-4">About Us</h2>
      <p className="lead text-center text-dark">
        Welcome to Recipe Hub – your go-to platform for discovering, sharing, and managing delicious recipes.
        Whether you're a home cook or a professional chef, we provide an easy way to explore and organize recipes.
      </p>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-lg bg-dark text-white border-0 rounded-4">
            <img
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
              className="card-img-top"
              alt="Pasta"
              style={{ borderRadius: "30px 30px 0 0" }}
            />
            <div className="card-body">
              <h4 className="card-title fw-bold">Creamy Pasta</h4>
              <p className="card-text">
                A rich and creamy pasta recipe with a perfect blend of cheese, garlic, and herbs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg bg-dark text-white border-0 rounded-4">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pfqy0xejorylde2a3jjb"
              className="card-img-top"
              alt="Biryani"
              style={{ borderRadius: "30px 30px 0 0" }}
            />
            <div className="card-body">
              <h4 className="card-title fw-bold">Spicy Biryani</h4>
              <p className="card-text">
                A flavorful biryani made with aromatic spices, tender meat, and fragrant basmati rice.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card shadow-lg bg-dark text-white border-0 rounded-4">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nais3kqa6gz4zvmgbmqu"
              className="card-img-top"
              alt="Chocolate Cake"
              style={{ borderRadius: "30px 30px 0 0" }}
            />
            <div className="card-body">
              <h4 className="card-title fw-bold">Chocolate Cake</h4>
              <p className="card-text">
                A moist and rich chocolate cake with layers of creamy frosting, perfect for dessert lovers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 rounded-4" style={{ background: "#000", color: "#fff" }}>
        <h2 className="text-center mb-4">Reach to Us</h2>
        <form className="mx-auto" style={{ maxWidth: "400px" }}>
          <label className="fw-bold">Name:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control mb-3"
            placeholder="Enter your name"
            style={inputStyle}
          />

          <label className="fw-bold">Email:</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control mb-3"
            placeholder="Enter your email"
            style={inputStyle}
          />

          <label className="fw-bold">Message:</label>
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="form-control mb-3"
            placeholder="Write your message..."
            style={{ ...inputStyle, height: "100px" }}
          />

          <button type="" className="btn btn-light w-25 fw-bold">
            Send  
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  background: "white",
  color: "white",
  border: "1px solid #555",
};

export default About;
