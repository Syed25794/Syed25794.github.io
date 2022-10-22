import { Box, Heading, Image, Link, Text, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const About = () => {
  return (
    <Flex id="about" direction={['column','column','row']} alignItems='center'>
      <Box px={12} py={20} w={['400px','500px','800px']} justifyContent={['center','center','flex-start']} marginRight={['10px','50px','100px']} >
        <Heading color='white' fontSize={['2xl','3xl','4xl']} mt={4}>Hello ,</Heading>
        <Heading color='white' fontSize={['2xl','3xl','4xl']}>I'm Sayyad Gul Mohammad</Heading> 
        <Heading color='white' fontSize={['2xl','3xl','4xl']} >Full Stack Web Developer</Heading>
        <Text  mt={4}>I'm  full-stack web developer with 1000+ hours of hands-on experience in Data structure and algorithm,
        JavaScript, HTML, CSS, React, and MongoDB to build userresponsive websites with team collaboration. Problem solving mindset with the ability to learn and collaborate
        with a team.</Text>
        <Flex direction={['column','row','row']}  mt={4} alignItems='center'>
          <Link as='a' maxW='150px'  bg='purple.600' color='gray.400' _hover={{color:"white"}} mr={['0px','24px','24px']} px={6} py={2} fontSize='20px' border='1px solid white' borderRadius={6}  href='https://www.linkedin.com/in/sayyad-gul-mohammad/' isExternal>Linkedin<ExternalLinkIcon mx='2x' /></Link>
          <Link as='a' maxW='150px' mt={['20px','0px','0px']} bg='purple.600' color='gray.400' _hover={{color:"white"}} px={7} py={2} fontSize='20px' border='1px solid white' alignItems='center' borderRadius={6} href='https://github.com/Syed25794' isExternal>Github<ExternalLinkIcon mx='2px' /></Link>
        </Flex>
      </Box>
      <Box   w='250px' paddingRight={3}>
        <Image boxShadow='rgba(3, 102, 214, 1) 0px 0px 5px 3px' borderRadius="60px" src="Image.jpg" name="Sayyad Gul Mohammad" />
      </Box>
    </Flex>
  );
};
