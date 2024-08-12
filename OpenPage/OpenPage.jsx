import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './OpenPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function OpeningPage() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='OpeningPage-container'>
            <div className='OpeningPage-box'>
                <h1 className='OpeningPage-title'>Harvard University</h1>
                <p className='OpeningPage-welcome'>Welcome to Harvard University. Explore, Learn, and Grow!</p>
                <div className='OpeningPage-time'>Current Time: {currentTime}</div>
                <div className='OpeningPage-links'>
                    <Link to="/adminLogin" className='OpeningPage-link'>Admin</Link>
                    <Link to="/login" className='OpeningPage-link'>Student</Link>
                </div>
            </div>
            <footer className='OpeningPage-footer'>
                <p>© 2024 Harvard University. All rights reserved.</p>
                <div className='OpeningPage-social-links'>
                    <a href='https://www.facebook.com/' className='OpeningPage-social-link' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-facebook'></i>
                        
                    </a>
                    <a href='https://x.com/i/flow/login' className='OpeningPage-social-link' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-x-twitter'></i>
                        
                    </a>
                    <a href='https://www.instagram.com/' className='OpeningPage-social-link' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-instagram'></i>
                        
                    </a>
                </div>
            </footer>
        </div>
    );
}