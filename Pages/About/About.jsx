import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../Utils/Images/about-us-section-img.jpg';
import ChooseSection from '../../Components/ChooseSection/ChooseSection';
import Person1 from '../../Utils/Images/person1.jpg';
import Person2 from '../../Utils/Images/person2.jpg';
import Person3 from '../../Utils/Images/person3.jpg';
import Person4 from '../../Utils/Images/person4.jpg';
import Person5 from '../../Utils/Images/person5.jpg';
import Person6 from '../../Utils/Images/person6.jpg';
import Person7 from '../../Utils/Images/person7.jpg';
import Person8 from '../../Utils/Images/person8.jpg';
import Person9 from '../../Utils/Images/person9.jpg';
import NavbarHome from '../Navbar/Navbar';

const persons = [
  {
      id: 1,
      img: [Person1]
  },
  {
      id: 2,
      img: [Person2]
  },
  {
      id: 3,
      img: [Person3]
  },
  {
      id: 4,
      img: [Person4]
  },
  {
      id: 5,
      img: [Person5]
  },
  {
      id: 6,
      img: [Person6]
  },
  {
      id: 7,
      img: [Person7]
  },
  {
      id: 8,
      img: [Person8]
  },
  {
      id: 9,
      img: [Person9]
  },
];

function About() {
  return (
    <div className='about-page'>
        <NavbarHome />
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>At our university, we believe in nurturing 
                    the potential of every student through a commitment to academic excellence, 
                    innovation, and holistic development. Our mission is to provide a world-class 
                    education that equips students with the knowledge, skills, and values needed 
                    to thrive in a rapidly changing global landscape. We are dedicated to fostering 
                    an inclusive and supportive community where every student can achieve their fullest potential.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p>We offer a broad spectrum of undergraduate, postgraduate, 
                        and doctoral programs designed to provide a comprehensive and 
                        rigorous education. Our programs are designed to be relevant and 
                        forward-thinking, integrating the latest advancements and real-world 
                        applications. Engage in groundbreaking research projects that address 
                        global challenges and contribute to advancements in various fields. 
                        Access to modern labs, libraries, and research centers equipped with 
                        the latest technology and resources.</p>
                    <p className='mb-4 mb-lg-5'>Join a diverse and inclusive community where 
                        students from all backgrounds come together to share ideas and experiences. 
                        Benefit from comprehensive support services, including academic advising, career 
                        counseling, mental health resources, and wellness programs.  We prioritize your happiness 
                        and well-being, offering resources and programs designed to support your mental, physical, 
                        and emotional health. Our dedication to student satisfaction has been recognized with awards 
                        such as the Student Happiness and Well-being Trophy and the Outstanding Student Support Trophy.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;