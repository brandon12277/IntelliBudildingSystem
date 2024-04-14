
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/admin_login';
import Admin from './components/admin';
import Landing from './components/landing';

function App() {
  return (
  <>
      
      <Router>
       <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Admin />} />

        </Routes>
    </Router>
    
  </>
  );
}

export default App;
