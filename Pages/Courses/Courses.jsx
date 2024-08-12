import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import EEE from '../../Utils/Images/EEE.jpg';
import ECE from '../../Utils/Images/ECE.jpg';
import Mech from '../../Utils/Images/Mech.jpg';
import MCT from '../../Utils/Images/MCT.jpg';
import AIDS from '../../Utils/Images/AIDS.jpg';
import IT from '../../Utils/Images/IT.jpg';
import ComputerScienceCourseImg from '../../Utils/Images/computer-science-course.jpg';
import EducationCourseImg from '../../Utils/Images/education-course.jpg';
import FaqAccordion from '../../Components/FaqAccordion/FaqAccordion';
import NavbarHome from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const courses = [
  {
      id: 1,
      img: [EEE],
      title: 'B.E. Electrical and Electronics Engineering',
  },
  {
      id: 2,
      img: [ECE],
      title: 'B.E. Electronics and Communications Engineering',
  },
  {
      id: 3,
      img: [ComputerScienceCourseImg],
      title: 'B.E. Computer Science and Engineering',
  },
  {
      id: 4,
      img: [EducationCourseImg],
      title: 'B.E. Civil Engineering',
  },
  {
      id: 5,
      img: [Mech],
      title: 'B.E. Mechanical Engineering',
  },
  {
      id: 6,
      img: [MCT],
      title: 'B.E. Mechatronics Engineering',
  },
  {
      id: 7,
      img: [AIDS],
      title: 'B.Tech. Artificial Intelligence And Data Science',
  },
  {
      id: 8,
      img: [IT],
      title: 'B.Tech. Information Technology',
  },
];

function Courses() {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/admissionform')
    }
  return (
    <div className='courses-page'>
        <NavbarHome />
        <header className='height-25'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>At our university, we pride ourselves on offering a 
                    broad spectrum of courses designed to meet the diverse interests and career aspirations 
                    of our students. Whether you’re pursuing an undergraduate degree, looking to advance your 
                    career with postgraduate studies, or seeking professional development opportunities, our 
                    comprehensive programs provide the foundation and expertise you need to succeed.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='shadow scale-hover-effect'>
                            <Card.Img src={course.img} className='img'/>
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-white'>{course.title}</Card.Title>
                                <Button className='btn' variant="danger btn-lg" type='submit' onClick={handleSubmit}>Join Now</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;