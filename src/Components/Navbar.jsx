// import {Link,Box,Flex} from '@chakra-ui/react'

// export const Navbar=()=>{
//     return (
//         <Box position='fixed' bg='gray.800'  fontSize={['16px','18px','20px']} boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 2px 0px' pb={3}>
//         <Flex direction={['column','column','row']} mx={3} p={6} alignItems={['center','center','left']}>
//         <Box>
//         <Link as='a' color='#fffff2' href='#home' _hover={{textDecorationLine:"none"}} pb={['10px','0px','0px']}  pr={['0px','15px','50px']} fontWeight='bold' >Sayyad Gul Mohammad</Link>
//         </Box>
//         <Flex direction={['column','row','row']}  justifyContent={['center','flex-start','flex-start']} gap={['10px','20px','30px']} >
//         <Link _hover={{color:'#fffff2'}} transitionDuration='1000ms' href='#home'>Home</Link>
//         <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#about'>About</Link>
//         <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#skills'>Skills</Link>
//         <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#projects'>Projects</Link>
//         <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#resume'>Resume</Link>
//         <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#contact'>Contact</Link>
//         </Flex>
//         </Flex>
//         </Box>
//     )

// }
// const Header = () => {
//   return <ToggleIcon isOpen={isOpen} toggle={Toggle} />;
// };








import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { Text, Box, Flex, Stack, Link} from "@chakra-ui/react";


const MenuItem = ({ children, location,toggle }) => {
  return (
    <Link href={`#${location}`} scrollBehavior="smooth"
      _hover={{ transitionDuration: "700ms", color: "pink.300" }} onClick={toggle}>
      <Text fontSize="xl">{children}</Text>
  </Link>
  );
};

const Logo = () => {
  return (
    <Link _hover={{ textDecoration: "none" }} href="home">
      <Text>Sayyad Gul Mohammad</Text>
    </Link>
  );
};

const ToggleIcon = ({ toggle, isOpen }) => {
  return (
    <Box onClick={toggle} display={["block", "block","none", "none"]}>
      {isOpen ? <Icon as={CloseIcon} w={5} h={5} /> : <Icon as={HamburgerIcon} w={8} h={8}  />}
    </Box>
  );
};

export const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const Toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      h={[isOpen ? "350px":"40px","40px","90px","80px"]}
      bg="#1f2937"
      as="nav"
      align="center"
      justifyContent="space-between"
      w="full"
      p={8}
      pb={[12,20,8]}
      mb={8}
      paddingTop={6}
      wrap="wrap"
      position="fixed"
      color={["white", "white", "primary.700"]}
      fontFamily='inherit'
      fontWeight='400'
    >
        <Logo />
        <ToggleIcon toggle={Toggle} isOpen={isOpen} />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={[4,8,20]}
          alignItems="center"
          paddingRight={4}
          paddingTop={[3,3,0]}
          direction={["column", "row", "row"]}
          justify={["center", "space-between", "flex-end"]}
        >
          <MenuItem children={"Home"} location={"home"}  toggle={Toggle} />
          <MenuItem children={"About"} location={"about"} toggle={Toggle} />
          <MenuItem children={"Skills"} location={"skills"} toggle={Toggle} />
          <MenuItem children={"Projects"} location={"projects"} toggle={Toggle} />
          <MenuItem children={"Resume"} location={"resume"} toggle={Toggle} />
          <MenuItem children={"Contact"} location={"contact"} toggle={Toggle} />
        </Stack>
      </Box>
    </Flex>
  );
};
