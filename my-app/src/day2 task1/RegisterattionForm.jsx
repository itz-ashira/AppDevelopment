import React, { useState } from 'react';
import './styles.css';

const RegistrationForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };
    const hello =()=>{
        alert(`Registered Successful username ${firstname+" "+lastname} password ${password}`)
    }

    return (
        <div className="container">
            <center>
                <h2>REGISTER</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>FIRSTNAME</label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>LASTNAME</label></td>
                                <td>
                                    <input
                                        type="text"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>USERNAME</label></td>
                                <td>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>PASSWORD</label></td>
                                <td>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>CONFIRM PASSWORD</label></td>
                                <td>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <button type="submit" onClick={()=>hello()}>REGISTER</button>
                </form>
            </center>
        </div>
    );
};

export default RegistrationForm;
