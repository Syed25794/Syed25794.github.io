import { Box } from "@chakra-ui/react";
import {Navbar} from "./Components/Navbar";
import {About} from "./Components/About";
import {Contact} from "./Components/Contact";
import {Projects} from "./Components/Projects";
import {Resume} from "./Components/Resume";
import {Skills} from "./Components/Skills";
import Github from "./Components/Github";
import Footer from "./Components/Footer";
import './App.css';
import { useState } from "react";


function App() {
  const [theme,setTheme]=useState("light");

  return (
    <Box id="home" className={theme}>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Github />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
