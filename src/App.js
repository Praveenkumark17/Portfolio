import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Style from "./App.module.css";
import Home from "./Components/Home/home";
import Project from "./Components/Projects/project";
import Resume from "./Components/Resume/resume";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Navbar from "./Components/Navbar/navbar";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setBlur } from "./Components/Redux/reducer";
import store from "./Components/Redux/store";
import ScrollToTop from "./Components/Functions/scroll";
import Footer from "./Components/Footer/footer";

function App() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.isTheme);

  useEffect(() => {
    const handleScroll = () => {
      const isBlurred = window.scrollY > 50;
      dispatch(setBlur(isBlurred));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className={theme ? Style.app_main_dark : Style.app_main}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="project" element={<Project />} />
            <Route path="resume" element={<Resume />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
