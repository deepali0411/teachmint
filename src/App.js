import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';

import './App.css';
import UserProfile from "./userProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/user-profile/:id' element={<UserProfile />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
