import { useState } from "react"
import RegisterattionForm from "./task1/RegisterattionForm";
import LoginnForm from "./task1/LoginnForm";
// import './app.css'
import './norm.css'

const App = () =>{
  const[isRegister,setRegister] = useState(true)

  return(
    <div>
       {isRegister ? <RegisterattionForm /> : <LoginnForm/>}
       <br></br>
       <button class="btn" onClick={() => setRegister(!isRegister)} >
          {isRegister ? 'Switch to Login' : 'Switch to register'}
       </button>
       {/* <RegisterForm/>
       <RegisterattionForm/>
       <LoginnForm/> */}
    </div>
  );
};
export default App;