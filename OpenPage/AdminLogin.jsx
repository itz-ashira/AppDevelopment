// import './AdminLogin.css';
import { FaUser,FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Pages/Login_Signup/Login.css';
import { MdEmail } from "react-icons/md";

function AdminLogin() {
    const navigate = useNavigate();
    const[action,setAction]=useState('');
    const handleAdminLogin=(e)=>{
        alert("Admin Logged In Successfully")
        navigate('/dashboard');
    }
    const LoginLink=()=>{
        setAction('');
      }
    const RegisterLink = () =>{
        setAction(' active');
    }
//     const [loginEmail, setLoginEmail] = useState('');
//   const handleMail = (event) => {
//       setLoginEmail(event.target.value)
//   }
//   const [loginPass, setLoginPass] = useState('');
//   const handlePassword = (event) => {
//       setLoginPass(event.target.value)
//   }
//   const[errors,setErrors]=useState({})
//   const[valid,setValid]=useState(true)
//     const handleLogin=(e)=>{
//         e.preventDefault();
//         let isValid=true;
//         let validation={};
//         if(loginEmail === "" || loginEmail === null){
//           isValid=false;
//           validation.loginEmail = "Email Required;"
//         }else if(!/\S+@\.\S+/.test(loginEmail)){
//           isValid=false;
//           validation.loginEmail="Email is not valid;"
//         }
    
//         if(loginPass === "" || loginPass === null){
//           isValid=false;
//           validation.loginPass = "Password Required;"
//         }
    
//         axios.get(`http://localhost:8000/user?email=${email}&password=${password}`)
//           .then(res=>{
//             res.data.map(users=>{
//               if(users.email === loginEmail){
//                 if(users.password === loginPass){
//                   alert("LoggedIn Successfully! ")
//                   navigate("/home");
//                 }else{
//                   isValid=false;
//                   validation.loginPass="Wrong Password"
//                   alert("Wrong Password")
//                 }
//               }else{
//                 alert("User account doesn't exist")
//               }
//             })
//             setErrors(validation)
//             setValid(isValid)
//           })
//           .catch(err => console.log(err)) 
//       }
  return (
    <div className='logsign d-flex flex-column justify-content-center'>
    <div className={` wrapper${action}`}>
      <div className='form-box login'>
        <form action=''>
          <h1 className="text-white">Login</h1>
          <div className="input-box">
            <input type="email"
            placeholder='Email' required />
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" 
            placeholder='Password' required />
            <FaLock className='icon'/>
          </div>

          <div className="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" onClick={handleAdminLogin}>Login</button>
          <div className="register-link">
            <p>Dont't have an account? <a href="#"onClick={RegisterLink} >Register</a></p>
          </div>
        </form>
      </div>
        <div className='form-box register'>
        <form action=''>
            <h1 className="text-white">Registration</h1>
            <div className="input-box">
            <input type="text" 
            // value={username} onChange={e=>setUsername(e.target.value)}
            placeholder='Username' required />
            <FaUser className='icon'/>
            </div>
            <div className="input-box">
            <input type="email" 
            // value={email} onChange={e=>setEmail(e.target.value)}
            placeholder='Email' required />
            <MdEmail className='icon'/>
            </div>
            <div className="input-box">
            <input type="password" 
            // value={password} onChange={e=>setPassword(e.target.value)}
            placeholder='Password' required />
            <FaLock className='icon'/>
            </div>
            <div className="input-box">
            <input type="password" 
            placeholder='Confirm Password' required />
            <FaLock className='icon'/>
            </div>

            <div className="remember-forget">
            <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>

            <button type="submit" onClick={LoginLink}>Register</button>
            <div className="register-link">
            <p>Already have an account? <a href="#" onClick={LoginLink}>Login</a></p>
            </div>
        </form>
        </div>
  </div>
</div>
  )
}

export default AdminLogin