import React,{ useState } from 'react';


const LoginnForm = () =>{
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    const handleSubmit = ( event ) =>{
        event.preventDefault();
        alert('Registered with Username: ${username} and Password: ${password}');
        setUsername('');
        setPassword('');

        
    };
    return(
        <div>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>USERNAME</label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required/>
            </div>
            <div>
                <label>PASSWORD</label>
                <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div> <br></br>
            <button type="submit">LOGIN</button>
        </form>
        </div>

    )

};
export default LoginnForm;