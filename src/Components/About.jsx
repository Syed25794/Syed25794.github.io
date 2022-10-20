import { Box, Heading, Image, Link, Text, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const About = () => {
  return (
    <Flex id="about" direction={['column','column','row']}>
      <Box px={10} py={20} maxW='800px' justifyContent={['center','flex-start','flex-start']}>
        <Heading fontSize={['2xl','3xl','4xl']} mt={4}>Hi, I'm Sayyad Gul Mohammad</Heading>
        <Heading fontSize={['2xl','3xl','4xl']} >Full Stack Web Developer</Heading>
        <Text  mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        <Flex border='1px solid red' direction={['column','row','row']}  mt={4}>
          <Link bg='purple.600' color='gray.400' _hover={{color:"white"}} maxW='200px' mr={6} px={6} py={2} fontSize='20px' border='1px solid white' borderRadius={6} alignItems='center' href='https://www.linkedin.com/in/sayyad-gul-mohammad/' isExternal>Linkedin<ExternalLinkIcon mx='2x' /></Link>
          <Link bg='purple.600' color='gray.400' _hover={{color:"white"}} maxW='200px' px={6} py={2} fontSize='20px' border='1px solid white' alignItems='center' borderRadius={6} href='https://github.com/Syed25794' isExternal>Github<ExternalLinkIcon mx='2px' /></Link>
        </Flex>
      </Box>
      <Flex borderRadius="15px" border='1px solid red'  py={10} maxW={['200px','300px','400px']}>
        <Image alignItems={['center','center','flex-start']} src="Image.jpg" name="Sayyad Gul Mohammad" />
      </Flex>
    </Flex>
  );
};
