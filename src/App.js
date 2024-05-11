import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <Router>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects/vicFolio' element={<Projects/>} />
            <Route path='/skills/vicFolio' element={<Skills/>} />
            <Route path='/Contact/vicFolio' element={<Contact/>} />
            <Route path='/About/vicFolio' element={<About/>} />
       </Routes>
    </Router>
  );
}

export default App;
