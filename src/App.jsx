import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Project from "./Components/Projects/project";
import Resume from "./Components/Resume/resume";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Navbar from "./Components/Navbar/navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlur } from "./Components/Redux/reducer";
import ScrollToTop from "./Components/Functions/scroll";
import Footer from "./Components/Footer/footer";
import { AnimatePresence } from "framer-motion";
import MovingBackground from "./Components/Functions/MovingBackground";
import CustomCursor from "./Components/Functions/CustomCursor";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.isTheme);

  useEffect(() => {
    // Initial sync of theme attribute
    const themeValue = theme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeValue);
    document.documentElement.setAttribute('data-bs-theme', themeValue);
    
    const handleScroll = () => {
      const isBlurred = window.scrollY > 50;
      dispatch(setBlur(isBlurred));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, theme]);

  return (
    <Router>
      <MovingBackground />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
