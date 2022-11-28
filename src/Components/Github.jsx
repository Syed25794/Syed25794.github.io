import { Box, Flex, Heading, Icon, Image, Link} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Github = () => {
    return (
        <Box id='projects' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} my='90px' p={['10px','15px','25px']} borderRadius='8px'>
            <Box color='white' textAlign='center' mb={6}>
                <Heading fontSize={['2xl','3xl','3xl']} fontWeight='500' >My GitHub Stats</Heading>
                <Icon w="50px" h="50px" mt={3}  as={FaGithub} />
            </Box>
            <Flex direction='column' gap={4} wrap='wrap' justifyContent='center' align='center' >
                <Box width={['300px','600px','800px']}>
                    <Image bg='gray' src='https://activity-graph.herokuapp.com/graph?username=Syed25794&bg_color=0D1117' alt='github activity' / >
                </Box>
                <Flex direction={['column','row','row']} gap={4} wrap='wrap'> 
                    <Box><Image src="https://github-profile-trophy.vercel.app/?username=syed25794" alt="syed25794" /></Box>
                    <Box bg='gray'><Link href="https://github.com/ryo-ma/github-profile-trophy"></Link></Box>
                    <Box><Image src="https://github-readme-streak-stats.herokuapp.com/?user=syed25794&" alt="syed25794" />  </Box>
                </Flex>
                <Box>
                <Link target="_blank" rel="noreferrer" id="cicin" href="https://github.com/syed25794" >
                    <p textAlign='center' fontSize='40px' color='black' >Github Calender</p>
                    <Image  width="1200px" marginBottom='20px'  id="github-contributions" src="https://ghchart.rshah.org/syed25794" href="https://github.com/syed25794" alt="syed25794's Activity Graph" />
                </Link>
                <Link target="_blank" rel="noreferrer" id="cicin" href="https://github.com/syed25794">
                    <p textAlign='center' fontSize='40px' color='black' >Github Statistics</p>
                    <img marginBottom='20px' src="https://github-readme-stats.vercel.app/api?username=syed25794&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"  id="github-contributions" href="https://github.com/syed25794/github-readme-stats" alt="syed25794's Github Stats"/>
                </Link>
                </Box>
            </Flex>
        </Box>
    )
};

export default Github;