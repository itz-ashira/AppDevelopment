import './App.css';
import { Route,Routes, } from 'react-router-dom';
import Fees from './Pages/Fees/Fees'
import PaymentPage from './Pages/Payment/Payment'
import AdmissionForm from './Pages/Admission/AdmissionForm'
import Rules from './Pages/Admission/Rules'
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import Login from './Pages/Login_Signup/LoginForm';
import OpeningPage from './OpenPage/OpenPage';
import AdminLogin from './OpenPage/AdminLogin';
import Receipt from './Pages/Reciept/Receipt';
import Payment from './Pages/Fees/Payment';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/fees' element={<Fees />} />
        <Route path='/admissionform' element={<AdmissionForm />} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/payments' element={<Payment/>} />
        <Route path='/rules' element={<Rules />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/ad" element={<Admission />} /> */}
        {/* <Route path="/students" element={<StudentList />} /> */}
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/settings" element={<h2>Settings</h2>} />
        <Route path='/' element={<OpeningPage />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
