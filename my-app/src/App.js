import Navbar from './components/navbar/Navbar';
import "./App.css";
import logo from './logo.svg';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import CV from "./pages/CV.js";
import Portfolio from "./pages/Portfolio.js";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div class="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cv' element={<CV/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
