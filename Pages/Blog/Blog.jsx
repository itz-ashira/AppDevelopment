import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../Utils/Images/blog1-img.jpg';
import Blog2Img from '../../Utils/Images/blog2-img.jpg';
import Blog3Img from '../../Utils/Images/blog3-img.jpg';
import Blog4Img from '../../Utils/Images/blog4-img.jpg';
import Blog5Img from '../../Utils/Images/blog5-img.jpg';
import Blog6Img from '../../Utils/Images/blog6-img.jpg';
import Blog7Img from '../../Utils/Images/blog7-img.jpg';
import Blog8Img from '../../Utils/Images/blog8-img.jpg';
import Blog9Img from '../../Utils/Images/blog9-img.jpg';
import NavbarHome from '../Navbar/Navbar';

const blogs = [
  {
      id: 1,
      img: [Blog1Img],
      title: 'Academic Insights',
      description: 'At our university, research is at the heart of our mission to drive innovation and make a positive impact on the world. Our faculty and students are engaged in pioneering research across a range of disciplines, from cutting-edge technology and medicine to environmental science and the arts. In this blog, we’ll explore some of the most exciting and transformative research projects currently underway at our institution.'
  },
  {
      id: 2,
      img: [Blog2Img],
      title: 'Student Life',
      description: 'University life is a thrilling mix of academic challenges, personal growth, and social experiences. Balancing coursework with extracurricular activities and maintaining a social life can be both rewarding and demanding. In this blog, we dive into a day in the life of one of our students to explore how they manage their time, stay motivated, and make the most of their university experience.'
  },
  {
      id: 3,
      img: [Blog3Img],
      title: 'Events and Announcements',
      description: 'Our university is buzzing with activities, events, and announcements that enrich student life, foster community, and celebrate achievements. In this blog, we highlight some of the most exciting upcoming events and important announcements to keep you informed and engaged.'
  },
  {
      id: 4,
      img: [Blog4Img],
      title: ' Alumni Success',
      description: 'At our university, we take immense pride in the accomplishments of our alumni. Their success stories are a testament to the quality of education and the vibrant community we foster. In this blog, we highlight some inspiring journeys of our graduates, showcasing how their time at our university has paved the way for remarkable careers and impactful contributions to society.'
  },
  {
      id: 5,
      img: [Blog5Img],
      title: ' Research and Innovation',
      description: 'At our university, research and innovation are integral to our mission of advancing knowledge and addressing global challenges. Our faculty and students are engaged in groundbreaking research projects that push the boundaries of science, technology, and humanities. In this blog, we highlight some of the most exciting and impactful research initiatives currently underway at our institution.'
  },
  {
      id: 6,
      img: [Blog6Img],
      title: 'Spotlight on Faculty',
      description: 'At our university, our faculty members are the backbone of our academic excellence and innovative research. Their dedication, expertise, and passion for teaching inspire and guide our students every day. In this blog, we shine a spotlight on some of our exceptional faculty members, highlighting their contributions to education, research, and the university community.'
  },
  {
      id: 7,
      img: [Blog7Img],
      title: 'Opportunities and Experiences',
      description: 'At our university, we believe that education extends beyond the classroom. We are committed to providing our students with a wealth of opportunities and experiences that enrich their academic journey, foster personal growth, and prepare them for a successful future. In this blog, we explore the various opportunities and experiences available to our students, showcasing how they can make the most of their time at our university.'
  },
  {
      id: 8,
      img: [Blog8Img],
      title: 'Clubs, Societies, and Activities',
      description: 'At our university, we believe that a well-rounded education includes active participation in campus life. Joining clubs, societies, and various activities not only enriches your university experience but also helps you build lasting friendships, develop new skills, and create memories that will last a lifetime. In this blog, we explore the diverse array of clubs, societies, and activities available to our students, highlighting the opportunities for engagement and growth.'
  },
  {
      id: 9,
      img: [Blog9Img],
      title: 'Navigating Your First Semester',
      description: 'Starting your first semester at university can be both exciting and overwhelming. With new academic challenges, social opportunities, and a wealth of resources to explore, it’s important to find a balance that works for you. In this blog, we provide tips and advice to help you navigate your first semester and make the most of your university experience.'
  },
];

function Blog() {
  return (
    <div className='blog-page'>
        <NavbarHome />
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>Our university blogs are your go-to 
                    source for insights, updates, and stories about life at our institution. 
                    Here, you’ll find a wealth of information covering a range of topics from 
                    academic achievements and research breakthroughs to student life and campus 
                    events.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;