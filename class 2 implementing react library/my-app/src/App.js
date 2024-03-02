import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './components/About'
import Contact from './components/Contact'
import Notfound from "./components/Notfound";
import Home from "./components/Home";
import { BrowserRouter,  Routes ,Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
    
        <Routes>
          <Route path="/"   element={<Home/>} />
          <Route path="/about"   element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>

       
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
