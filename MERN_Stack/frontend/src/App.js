import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import EmployeeLogin from "./pages/EmployeeLogin";
import AdminLogin from "./pages/AdminLogin";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            
            <Route path="/emplogin" element={<EmployeeLogin />} />
            <Route path="/admlogin" element={<AdminLogin/>}/>
          </Routes>
        </div>
      </Router>
      {/* <h2>prefer power over money</h2> */}

    </>
  );
}

export default App;
