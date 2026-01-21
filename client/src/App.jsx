import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import AddProject from "./pages/AddProject";
import ProtectedRoute from "./components/ProtectedRoutes";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-project" element={
              <ProtectedRoute>
                <AddProject />
              </ProtectedRoute> }/>


      </Routes>
    </>
    
  );
}

export default App;
