import React, {useContext, useState} from 'react';
import {UserContext} from '../UserContext'; // Gantikan path sesuai dengan struktur direktori Anda

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);  // useContext digunakan di sini

    const handleSubmit = () => {
        fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === "Login successful") {
                    console.log('Sign In successful');
                    setUser({username});  // Menggunakan username dari state lokal
                    alert("Sign In successful")
                } else {
                    // Handle other messages or errors
                    console.log('Sign In failed', data.message);
                    alert("Sign In failed")
                }
            })
            .catch(error => {
                console.log('Sign In failed', error);
            });
    };

    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                   placeholder="Password"/>
            <button onClick={handleSubmit}>Sign In</button>
        </div>
    );
};

export default SignIn;
