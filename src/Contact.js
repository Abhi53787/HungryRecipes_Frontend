import React
 from "react";
 import { Formik, useFormik } from "formik";
 
function Contact(){
    const formik=useFormik({
        initialValues:{
           
            Name:'',
            Email:'',
            Location:'',
            PhoneNumber:''

        }
    });
    return(
        <div style={{backgroundImage:`url("https://www.pagani.com/app/uploads/2016/11/contatti_1x-3.jpg")`,
            height:"100vh"
        }}>
            <center>
            <h1 style={{color:"#fff"}}>contact</h1>
            <form style={{ maxWidth: "300px", margin: "20px auto", textAlign: "left" }}>
  <label>
    Name:
    <input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} style={{ width: "100%", marginBottom: "8px", padding: "6px", border: "1px solid #ccc", borderRadius: "4px" }} />
  </label>
  
  <label>
    Email:
    <input type="text" name="Email" value={formik.values.Email} onChange={formik.handleChange} style={{ width: "100%", marginBottom: "8px", padding: "6px", border: "1px solid #ccc", borderRadius: "4px" }} />
  </label>

  <label>
    Location:
    <input type="text" name="Location" value={formik.values.Location} onChange={formik.handleChange} style={{ width: "100%", marginBottom: "8px", padding: "6px", border: "1px solid #ccc", borderRadius: "4px" }} />
  </label>

  <label>
    Phone Number:
    <input type="text" name="PhoneNumber" value={formik.values.PhoneNumber} onChange={formik.handleChange} style={{ width: "100%", marginBottom: "8px", padding: "6px", border: "1px solid #ccc", borderRadius: "4px" }} />
  </label>

  <button type="submit" style={{ width: "100%", background: "#333", color: "#fff", padding: ".5rem", borderRadius: "4px", border: "none", cursor: "pointer", marginTop: "10px" }}>
    Contact
  </button>
</form>

            </center>
        </div>
    )
    

}
 export default Contact;