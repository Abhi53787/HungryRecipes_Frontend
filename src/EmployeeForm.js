// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as yup from 'yup';

// function Employee() {
//     return (
//         <div className="container py-5">
//             <h1>Employee Form</h1>
//             <Formik
//                 initialValues={{
//                     Previous_employee_number: '',
//                     Title: '',
//                     Email: '',
//                     Password: '',
//                     Location: '',
//                     Firstname: '',
//                     Middlename: '',
//                     Lastname: '',
//                     Gender: '',
//                     MartialStatus: '',
//                     DateofBirth: '',
//                     Age: ''
//                 }}
//                 validationSchema={yup.object({
//                     Previous_employee_number: yup.string().required('Previous employee number is required'),
//                     Title: yup.string().required('Title is required'),
//                     Email: yup.string().email('Invalid email format').required('Email is required'),
//                     Password: yup.string().required('Password must have a special character'),
//                     Location: yup.string().required('Location is required'),
//                     Firstname: yup.string().required('First name is required'),
//                     Middlename: yup.string(),
//                     Lastname: yup.string().required('Last name is required'),
//                     Gender: yup.string().required('Gender is required'),
//                     MartialStatus: yup.string().required('Martial status is required'),
//                     DateofBirth: yup.date().required('Date of birth is required'),
//                     Age: yup.number().required('Age is required')
//                 })}
//                 onSubmit={values => {
//                     console.log(values);
//                 }}
//             >
//                 <Form style={{padding:"50px",borderRadius:"5px"}}>
//                     <div>
//                         <p>Previous Employee Number</p>
//                         <Field type="text" name="Previous_employee_number" />
//                         <ErrorMessage name="Previous_employee_number" component="div" />
//                     </div>
//                     <div>
//                         <p>Title</p>
//                         <Field type="text" name="Title" />
//                         <ErrorMessage name="Title" component="div" />
//                     </div>
//                     <div>
//                         <p>Email</p>
//                         <Field type="email" name="Email" />
//                         <ErrorMessage name="Email" component="div" />
//                     </div>
//                     <div>
//                         <p>Password</p>
//                         <Field type="password" name="Password" />
//                         <ErrorMessage name="Password" component="div" />
//                     </div>
//                     <div>
//                         <p>Location</p>
//                         <Field type="text" name="Location" />
//                         <ErrorMessage name="Location" component="div" />
//                     </div>
//                     <div>
//                         <p>Firstname</p>
//                         <Field type="text" name="Firstname" />
//                         <ErrorMessage name="Firstname" component="div" />
//                     </div>
//                     <div>
//                         <p>Middlename</p>
//                         <Field type="text" name="Middlename" />
//                         <ErrorMessage name="Middlename" component="div" />
//                     </div>
//                     <div>
//                         <p>Lastname</p>
//                         <Field type="text" name="Lastname" />
//                         <ErrorMessage name="Lastname" component="div" />
//                     </div>
//                     <div>
//                         <p>Gender:</p>
//                         <Field as="select" name="Gender">
//                             <option value="">Select Gender</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                         </Field>
//                         <ErrorMessage name="Gender" component="div" />
//                     </div>

//                     <div>
//                         <p>Martial Status:</p>
//                         <Field as="select" name="MartialStatus">
//                             <option value="">Select Martial Status</option>
//                             <option value="Single">Single</option>
//                             <option value="Married">Married</option>
//                         </Field>
//                         <ErrorMessage name="MartialStatus" component="div" />
//                     </div>

//                     <div>
//                         <p>Date of Birth:</p>
//                         <Field type="date" name="DateofBirth" />
//                         <ErrorMessage name="DateofBirth" component="div" />
//                     </div>
//                     <div>
//                         <p>Age:</p>
//                         <Field type="number" name="Age" />
//                         <ErrorMessage name="Age" component="div" />
//                     </div>

//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </Form>
//             </Formik>
//         </div>
//     );
// }

// export default Employee;
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'; 

function Employee() {
    return (
        <div style={{backgroundColor:"aliceblue"}}>
        <div style={{margin:"50px",backgroundImage:"https://cars.mclaren.com/content/dam/mclaren-automotive/bp/home_hero_wide.jpg"}}>
            {/* <h2 className="mb-4 text-center">Personal Details</h2> */}
            <div className= "" >
                <Formik
                    initialValues={{
                        Previous_employee_number: '',
                        Title: '',
                        Email: '',
                        Password: '',
                        Location: '',
                        Firstname: '',
                        Middlename: '',
                        Lastname: '',
                        Gender: '',
                        MartialStatus: '',
                        DateofBirth: '',
                        Age: ''
                    }}
                    validationSchema={yup.object({
                        Previous_employee_number: yup.string().required('Previous employee number is required'),
                        Title: yup.string().required('Title is required'),
                        Email: yup.string().email('Invalid email format').required('Email is required'),
                        Password: yup.string().matches(/[@$!%*?&#]/, 'Must contain at least one special character').required('Password is required'),
                        Location: yup.string().required('Location is required'),
                        Firstname: yup.string().required('First name is required'),
                        Middlename: yup.string(),
                        Lastname: yup.string().required('Last name is required'),
                        Gender: yup.string().required('Gender is required'),
                        MartialStatus: yup.string().required('Marital status is required'),
                        DateofBirth: yup.date().required('Date of birth is required'),
                        Age: yup.number().required('Age is required')
                    })}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    <Form>
                        <div className="row g-3">
                           
                            <div className="col-md-4">
                                <label>Previous Employee Number*</label>
                                <Field className="form-control" type="text" name="Previous_employee_number" />
                                <ErrorMessage name="Previous_employee_number" component="div" className="text-danger" />
                            </div>
                            <br>
                            </br>
                            {/* <div className="col-md-5 " style={{minHeight: "50px",minWidth:"200px"}}>
                            <label for="formFile" class="form-label"></label>
                            <input type="file" className="form-control" id="ProfileImage" ></input>
                                       
                                        </div>  */}
                            <div>
                                <img src="https://www.ferrari.com/media-centre/static/assets/img/placeholder.jpg" style={{height:"100px",marginLeft:"1000px"}}></img>
                            </div>

                                 
                            {/* Title */}
                            <div className="col-md-4">
                                <label>Title*</label>
                                <Field className="form-control" type="text" name="Title" />
                                <ErrorMessage name="Title" component="div" className="text-danger" />
                            </div>

                            {/* Email */}
                            <div className="col-md-4">
                                <label>Email*</label>
                                <Field className="form-control" type="email" name="Email" />
                                <ErrorMessage name="Email" component="div" className="text-danger" />
                            </div>

                            {/* Password */}
                            <div className="col-md-4">
                                <label>Password*</label>
                                <Field className="form-control" type="password" name="Password" />
                                <ErrorMessage name="Password" component="div" className="text-danger" />
                            </div>

                            {/* Location */}
                            <div className="col-md-4">
                                <label>Location*</label>
                                <Field className="form-control" type="text" name="Location" />
                                <ErrorMessage name="Location" component="div" className="text-danger" />
                            </div>

                            {/* First Name */}
                            <div className="col-md-4">
                                <label>First Name*</label>
                                <Field className="form-control" type="text" name="Firstname" />
                                <ErrorMessage name="Firstname" component="div" className="text-danger" />
                            </div>

                            {/* Middle Name */}
                            <div className="col-md-4">
                                <label>Middle Name</label>
                                <Field className="form-control" type="text" name="Middlename" />
                                <ErrorMessage name="Middlename" component="div" className="text-danger" />
                            </div>

                            {/* Last Name */}
                            <div className="col-md-4">
                                <label>Last Name*</label>
                                <Field className="form-control" type="text" name="Lastname" />
                                <ErrorMessage name="Lastname" component="div" className="text-danger" />
                            </div>

                            {/* Gender */}
                            <div className="col-md-4">
                                <label>Gender*</label>
                                <Field as="select" name="Gender" className="form-select">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                                <ErrorMessage name="Gender" component="div" className="text-danger" />
                            </div>

                            {/* Marital Status */}
                            <div className="col-md-4">
                                <label>Marital Status*</label>
                                <Field as="select" name="MartialStatus" className="form-select">
                                    <option value="">Select Marital Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                </Field>
                                <ErrorMessage name="MartialStatus" component="div" className="text-danger" />
                            </div>

                            {/* Date of Birth */}
                            <div className="col-md-4">
                                <label>Date of Birth*</label>
                                <Field className="form-control" type="date" name="DateofBirth" />
                                <ErrorMessage name="DateofBirth" component="div" className="text-danger" />
                            </div>

                            {/* Age */}
                            <div className="col-md-4">
                                <label>Age*</label>
                                <Field className="form-control" type="number" name="Age" />
                                <ErrorMessage name="Age" component="div" className="text-danger" />
                            </div>

                            {/* Submit Button */}
                            <div className="col-12 text-center mt-4">
                                <button type="submit" className="btn btn-primary px-5">Submit</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
        </div>
    );
}

export default Employee;
