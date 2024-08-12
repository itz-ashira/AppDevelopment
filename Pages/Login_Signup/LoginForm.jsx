import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import '../../App.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

const Login = () => {
  const [action, setAction] = useState('');
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  const RegisterLink = () => {
    setAction(' active');
  };

  const LoginLink = () => {
    setTimeout(() => {
      setAction('');
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, password } = formdata;
      const response = await axios.post('http://localhost:8080/api/users/register/post', {
        firstName,
        lastName,
        email,
        password
      });
      const { accessToken, refreshToken } = response.data;
      // Store the tokens securely
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      console.log(response.data);
        alert('Registration successful');
        LoginLink();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formdata;
    try {
      const response = await axios.post('http://localhost:8080/api/users/login/post', {
        email,
        password
      });
      const { accessToken, refreshToken } = response.data;
      // Store the tokens securely
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      console.log(response.data)
      alert('Login successful');
      navigate("/home");
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='logsign d-flex flex-column justify-content-center'>
      <div className={`wrapper${action}`}>
        <div className='form-box login'>
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder='Email'
                required
                value={formdata.email}
                onChange={handleChange}
              />
              <MdEmail className='icon' />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder='Password'
                required
                value={formdata.password}
                onChange={handleChange}
              />
              <FaLock className='icon' />
            </div>

            <div className="remember-forget">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={RegisterLink}>Register</a></p>
            </div>
          </form>
        </div>

        <div className='form-box register'>
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                name="firstName"
                placeholder='FirstName'
                required
                value={formdata.firstName}
                onChange={handleChange}
              />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="lastName"
                placeholder='LastName'
                required
                value={formdata.lastName}
                onChange={handleChange}
              />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder='Email'
                required
                value={formdata.email}
                onChange={handleChange}
              />
              <MdEmail className='icon' />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder='Password'
                required
                value={formdata.password}
                onChange={handleChange}
              />
              <FaLock className='icon' />
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
  );
};

export default Login;

// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import '../../App.css';
// import { FaUser,FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Login = () => {

//   const navigate = useNavigate();

//   const[action,setAction]=useState('');
//   const[id,setId]=useState('');
//   const[username,setUsername]=useState('');
//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const RegisterLink = () =>{
//     setAction(' active');
//   }
//   const handleRegister=(e)=>{
//     e.preventDefault();
//     let regObj={id,username,email,password};
//     //console.log(regObj);
//     fetch("http://localhost:8000/user",{
//       method:"POST",
//       header:{'content-type':'application/json'},
//       body:JSON.stringify(regObj)
//     }).then((res)=>{
//       alert('Registered successfully.')
//     }).catch((err)=>{
//       alert('Failed : '+err.message)
//     });
    
//   }
//   // const Login = (e) =>{
//   //   e.preventDefault();
//   //   alert('LoggedIn Successsfully!')
//   //   navigate('/home')
//   //   setAction('');
//   // }
//   const LoginLink=()=>{
//     setAction('');
//   }
//   const [loginEmail, setLoginEmail] = useState('');
//   const handleMail = (event) => {
//       setLoginEmail(event.target.value)
//   }
//   const [loginPass, setLoginPass] = useState('');
//   const handlePassword = (event) => {
//       setLoginPass(event.target.value)
//   }
//   const[errors,setErrors]=useState({})
//   const[valid,setValid]=useState(true)
//   const handleLogin=(e)=>{
//     e.preventDefault();
//     let isValid=true;
//     let validation={};
//     if(loginEmail === "" || loginEmail === null){
//       isValid=false;
//       validation.loginEmail = "Email Required;"
//     }else if(!/\S+@\.\S+/.test(loginEmail)){
//       isValid=false;
//       validation.loginEmail="Email is not valid;"
//     }

//     if(loginPass === "" || loginPass === null){
//       isValid=false;
//       validation.loginPass = "Password Required;"
//     }

//     axios.get(`http://localhost:8000/user?email=${email}&password=${password}`)
//       .then(res=>{
//         res.data.map(users=>{
//           if(users.email === loginEmail){
//             if(users.password === loginPass){
//               alert("LoggedIn Successfully! ")
//               navigate("/home");
//             }else{
//               isValid=false;
//               validation.loginPass="Wrong Password"
//               alert("Wrong Password")
//             }
//           }else{
//             alert("User account doesn't exist")
//           }
//         })
//         setErrors(validation)
//         setValid(isValid)
//       })
//       .catch(err => console.log(err)) 
//   }
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //         const response = await axios.post(`http://localhost:8080/register/post/${email}/${password}`);
// //         console.log(response.data);
// //         if (response.data === true) {
// //             const response2 = await axios.get(`http://localhost:8080/register/get/${email}/${password}`);
// //             setDistrictId(response2.data.districtId);
// //             setIsAdminLoggedIn(true);
// //             setMessage('Login successful');
// //             setTimeout(() => {
// //                 navigate("/home");
// //             }, 0);
// //         } else {
// //             setMessage('Invalid email or password. Please try again.');
// //             setTimeout(() => {
// //                 setMessage('');
// //             }, 2500);
// //         }
// //     } catch (error) {
// //         console.error('Error:', error);
// //     }
// // };

//   return (
//       <div className='logsign d-flex flex-column justify-content-center'>
//         <div className={` wrapper${action}`}>
//           <div className='form-box login'>
//             <form action='' onSubmit={handleLogin}>
//               <h1>Login</h1>
//               <div className="input-box">
//                 <input type="email"
//                 value={loginEmail}
//                 onChange={handleMail}
//                 placeholder='Email' required />
//                 <FaUser className='icon'/>
//               </div>
//               <div className="input-box">
//                 <input type="password" 
//                 value={loginPass}
//                 onChange={handlePassword}
//                 placeholder='Password' required />
//                 <FaLock className='icon'/>
//               </div>

//               <div className="remember-forget">
//                 <label><input type="checkbox" />Remember me</label>
//                 <a href="#">Forgot Password?</a>
//               </div>

//               <button type="submit">Login</button>
//               <div className="register-link">
//                 <p>Dont't have an account? <a href="#"onClick={RegisterLink} >Register</a></p>
//               </div>
//             </form>
//           </div>
//         {/* </div> */}

//         {/*    */}
//         <div className='form-box register'>
//           <form action='' onSubmit={handleRegister}>
//             <h1>Registration</h1>
//             <div className="input-box">
//               <input type="text" 
//               value={username} onChange={e=>setUsername(e.target.value)}
//               placeholder='Username' required />
//               <FaUser className='icon'/>
//             </div>
//             <div className="input-box">
//               <input type="email" 
//               value={email} onChange={e=>setEmail(e.target.value)}
//               placeholder='Email' required />
//               <MdEmail className='icon'/>
//             </div>
//             <div className="input-box">
//               <input type="password" 
//               value={password} onChange={e=>setPassword(e.target.value)}
//               placeholder='Password' required />
//               <FaLock className='icon'/>
//             </div>
//             <div className="input-box">
//               <input type="password" 
//               placeholder='Confirm Password' required />
//               <FaLock className='icon'/>
//             </div>

//             <div className="remember-forget">
//               <label><input type="checkbox" />I agree to the terms & conditions</label>
//             </div>

//             <button type="submit" onClick={LoginLink}>Register</button>
//             <div className="register-link">
//               <p>Already have an account? <a href="#" onClick={LoginLink}>Login</a></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
    
//   );
// };
// export default Login;