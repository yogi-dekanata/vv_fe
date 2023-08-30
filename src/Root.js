import React from 'react';
import {UserProvider} from './UserContext';
import HomePage from './components/HomePage';

const App = () => {
    return (
        <UserProvider>
            <HomePage/>
        </UserProvider>
    );
};

export default App;
