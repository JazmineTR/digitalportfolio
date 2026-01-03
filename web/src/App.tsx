import { HashRouter as Router, Routes, Route } from "react-router-dom";
import  Home from "./pages/home"
import  About from "./pages/about"
import Writing from "./pages/writing";
import Resume from "./pages/resume";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/writings" element={<Writing/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;