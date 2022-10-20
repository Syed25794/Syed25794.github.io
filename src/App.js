import { Box } from "@chakra-ui/react";
import {
  Navbar,
  About,
  Contact,
  Projects,
  Resume,
  Skills,
} from "./Components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </Box>
  );
}

export default App;
