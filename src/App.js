import React from 'react';
import HomePage from './pages/HomePage';
import {UserProvider} from './UserContext'; // Gantilah path sesuai lokasi file Anda
import './css/App.css'; // Pastikan Anda menambahkan CSS untuk .main-container dan .content-wrapper di sini

function App() {
    return (
        <UserProvider>
            <HomePage/>
        </UserProvider>
    );
}

export default App;
