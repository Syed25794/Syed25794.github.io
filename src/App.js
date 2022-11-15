import { Box } from "@chakra-ui/react";
import {Navbar} from "./Components/Navbar";
import {About} from "./Components/About";
import {Contact} from "./Components/Contact";
import {Projects} from "./Components/Projects";
import {Resume} from "./Components/Resume";
import {Skills} from "./Components/Skills";
import Github from "./Components/Github";


function App() {
  return (
    <Box bg='gray.900' color='gray.500' id="home">
      <Navbar position='fixed' />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Resume />
      <Contact />
    </Box>
  );
}

export default App;
