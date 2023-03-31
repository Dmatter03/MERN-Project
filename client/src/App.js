import { Routes, Route, Link } from 'react-router-dom';
import './static/App.css';
import './static/Nav.css'
import './static/Form.css'
import './static/DashBoard.css'
import './static/Welcome.css'
import './static/Profile.css'


import DashBoard from './Views/DashBoard';
import RegisterPage from './Views/RegisterPage'
import LoginPage from './Views/LoginPage';
import LandingPage from './Views/LandingPage';
import UserDetails from './Views/UserDetails';


function App() {
  return (
    <div className="App-container">
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/users'} element={<DashBoard />} />
        <Route path={'/users/:id'} element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
