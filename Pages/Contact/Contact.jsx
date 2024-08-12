import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../Utils/Images/London-location.jpg';
import ManchesterLocationImg from '../../Utils/Images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../Utils/Images/Liverpool-location.jpg';
import NavbarHome from '../Navbar/Navbar';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        location: 'London',
        postCode: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/contact/post', formData);
            console.log(response.data);
            if (response.data === true) {
                alert('Details Sent Successfully');
            } else {
                alert('Something Went Wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className='contact-page'>
            <NavbarHome />
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Get In Touch</h1>
                    <p className='text-center w-75 mb-5'>
                        We are excited to connect with prospective students, parents, alumni, and partners. 
                        Whether you have questions about our programs, need assistance with your application, 
                        or want to learn more about campus life, our team is here to help.
                    </p>
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form' onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder='First name'
                            />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder='Last name'
                            />
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter email'
                        />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Your address'
                        />
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Location</Form.Label>
                            <Form.Select
                                name='location'
                                value={formData.location}
                                onChange={handleChange}
                            >
                                <option>London</option>
                                <option>Manchester</option>
                                <option>Liverpool</option>
                            </Form.Select>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control
                                name='postCode'
                                value={formData.postCode}
                                onChange={handleChange}
                                placeholder='Postcode'
                            />
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="danger btn-lg" type='submit'>Submit</Button>
                </Form>
            </div>

            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Our Locations</h2>
                    <div className='row g-4'>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={LondonLocationImg} className='img-fluid' alt="" />
                            <h3 className='text-center mt-3'>London</h3>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                            <h3 className='text-center mt-3'>Manchester</h3>
                        </div>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                            <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                            <h3 className='text-center mt-3'>Liverpool</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
