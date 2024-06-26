import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes.js'
import {  UserProvider } from './Context/UserContext.js';

function App() {
  return (
    <Router>
      <UserProvider>
    <UserRoutes/>
    </UserProvider>
    </Router>
  );
}

export default App