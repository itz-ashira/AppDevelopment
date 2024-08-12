import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Welcome to the FAQ section 
                of our university! Here, we provide answers to some of 
                the most commonly asked questions to help you navigate 
                your journey with us. If you have additional questions 
                or need further assistance, feel free to reach out to us directly.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>First question ?</Accordion.Header>
                    <Accordion.Body>
                    How do I apply to the university? <br></br><br></br>
                    Visit our website and complete the online application form. 
                    Be sure to review the entry requirements for your chosen program 
                    and submit all required documents, including your academic transcripts, 
                    personal statement, and references.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Second question ?</Accordion.Header>
                    <Accordion.Body>
                    What scholarships and financial aid options are available?<br></br><br></br>
                    We offer a variety of scholarships and financial aid options based on academic 
                    merit, financial need, and specific criteria related to your program of study. 
                    Visit our financial aid page for details on available scholarships, grants, and 
                    how to apply.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Third question ?</Accordion.Header>
                    <Accordion.Body>
                    What are the admission requirements?<br></br><br></br>
                    Admission requirements vary by program, but generally include 
                    a high school diploma or equivalent, specific subject prerequisites, 
                    and a minimum grade point average. Check the program-specific requirements 
                    on our website.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Fourth question ?</Accordion.Header>
                    <Accordion.Body>
                    What are the tuition fees and deadlines?<br></br><br></br>
                    Tuition fees vary by program and residency status. Please refer to our tuition 
                    and fees page for detailed information. Deadlines for applications and fee payments 
                    are specified on our website and vary by program, so be sure to check these carefully.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;