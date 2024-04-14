
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/admin_login';
import Admin from './components/admin';

function App() {
  return (
  <>
      
      <Router>
       <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Admin />} />

        </Routes>
    </Router>
    
  </>
  );
}

export default App;
