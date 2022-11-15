import { Box, Flex, Heading, Icon, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Github = () => {
    return (
        <Box id='projects' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} my='90px' p={['10px','15px','25px']} borderRadius='8px'>
            <Box color='white' textAlign='center' mb={6}>
                <Heading>My GitHub Stats</Heading>
                <Icon w="50px" h="50px" mt={3}  as={FaGithub} />
            </Box>
            <Flex direction='column' gap={4} wrap='wrap' justifyContent='center' align='center' >
                <Box width={['300px','600px','800px']}>
                    <Image src='https://activity-graph.herokuapp.com/graph?username=Syed25794' alt='github activity' / >
                </Box>
                <Flex direction={['column','row','row']} gap={4} wrap='wrap'>   
                    <Image  src="https://github-readme-stats.vercel.app/api/top-langs?username=syed25794&show_icons=true&locale=en&layout=compact" alt="syed25794" />
                    <Image  src="https://github-readme-stats.vercel.app/api?username=syed25794&show_icons=true&locale=en" alt="syed25794" />
                </Flex>
                <Flex direction={['column','row','row']} gap={4} wrap='wrap'> 
                    <Box><Image src="https://github-profile-trophy.vercel.app/?username=syed25794" alt="syed25794" /></Box>
                    <Box><Link href="https://github.com/ryo-ma/github-profile-trophy"></Link></Box>
                    <Box><Image src="https://github-readme-streak-stats.herokuapp.com/?user=syed25794&" alt="syed25794" />  </Box>
                </Flex>
            </Flex>
        </Box>
    )
};

export default Github;