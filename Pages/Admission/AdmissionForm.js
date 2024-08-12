import React, { useState } from 'react';
import './AdmissionForm.css';
import AdmissionAnimation from './Admission.json';
import Lottie from 'lottie-react';
import axios from 'axios'; // Import axios

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        dob: '',
        course: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/admission/post', formData);
            console.log(response.data);
            if (response.data === true) {
                alert('Admission Form Submitted Successfully');
            } else {
                alert('Something Went Wrong.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="admission-container">
            <div className="row justify-content-center">
                <Lottie 
                    animationData={AdmissionAnimation}
                    loop={true}
                    style={{ width: "450px", height: "600px", marginRight: "100px", marginTop: "60px" }}
                />
                <div className="adpage col-md-5">
                    <form onSubmit={handleSubmit}>
                        <center>
                            <h1>College Admission Form</h1>
                        </center>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender:</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className="form-control"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="zip" className="form-label">Zip:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="dob" className="form-label">Date of Birth:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dob"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                    />
                                </div> 
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="course" className="form-label">Course:</label>
                            <select
                                id="course"
                                name="course"
                                className="form-control"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Course</option>
                                <option value="electricalEngineering">B.E. Electrical and Electronics Engineering</option>
                                <option value="electronicsEngineering">B.E. Electronics and Communications Engineering</option>
                                <option value="computerScience">B.E. Computer Science and Engineering</option>
                                <option value="civilEngineering">B.E. Civil Engineering</option>
                                <option value="mechanicalEngineering">B.E. Mechanical Engineering</option>
                                <option value="mechatronicsEngineering">B.E. Mechatronics Engineering</option>
                                <option value="informationTechnology">B.Tech. Information Technology</option>
                                <option value="artificialIntelligence">B.Tech. Artificial Intelligence and Data Science</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdmissionForm;
