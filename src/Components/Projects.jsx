import { Text, Heading, Box, Link, Image, Flex, Button, Icon } from "@chakra-ui/react";
import { GrProjects } from "react-icons/gr";
import data from "../db.json";
import {FaHtml5 ,FaCss3Alt,FaReact} from 'react-icons/fa';
import { TbBrandJavascript} from 'react-icons/tb';
import { SiRedux } from "react-icons/si";


const TechStackCard=({name})=>{
  let icons=null;
  switch(name){
      case "HTML":
          icons=FaHtml5;
          break;
      case "CSS":
          icons=FaCss3Alt;
          break;
      case "JavaScript":
          icons=TbBrandJavascript;
          break;
      case "React":
          icons=FaReact;
          break;
      case "Redux":
          icons=SiRedux;
          break;
      default :
          icons="";
  }
  return (
      <Box mx={2} textAlign="center" w='60px' h='60px' bg='#1f2937' color='white'  border='1px solid white' borderRadius={10} >
          <Icon  mt={1} w="55px" h="55px" as={icons} />
      </Box>
  )
}

const ProjectCard = (props) => {
  return (
    <Flex direction={['column','column','column']} border='1px solid red' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" w={['230px','350px','450px']} h={['650px','600px','570px']} borderRadius={18} textAlign='center'>
      <Box m={4}>
        <Image borderRadius={18} src={props.img} name="photo" />
      </Box>
      <Heading m={1} size='xl' color='white'>{props.title}</Heading>
      <Text>{props.description}</Text>
      <Heading size='md' my={2} color='white'>Tech-Stack</Heading>
        <Flex  gap={2} wrap='wrap' justifyContent="center">
          {props['tech'].map((elem)=>{
            return <TechStackCard name={elem} />}
            )}
        </Flex>
      <Box marginTop={3} justifyItems="center">
        <Button my={2} mr={4} color='gray' px={7} fontSize='18px'><Link href={props.github}>Repo</Link></Button>
        <Button color='white' my={2}  px={7} fontSize='18px'><Link href={props.live}>Live</Link></Button>
      </Box>
    </Flex>
  );
};

export const Projects = () => {
  return (
    <Box id='projects' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} my='90px' p={['10px','15px','25px']} borderRadius='8px'>
      <Box color='white' textAlign='center' mb={6}>
        <Heading>Some of my best projects</Heading>
        <Icon w="50px" h="50px" mt={3}  as={GrProjects} />
      </Box>
    <Box alignContent='center'>
      </Box>
      <Box>
      <Flex wrap='wrap' gap={6} direction={['column','row','row']} justifyContent="space-around">
        {data.projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </Flex>
      </Box>
    </Box>
  );
};
