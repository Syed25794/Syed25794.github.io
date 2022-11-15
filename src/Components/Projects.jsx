import { Text, Heading, Box, Link, Image, Flex, Button, Icon } from "@chakra-ui/react";
import { GrProjects } from "react-icons/gr";
import data from "../db.json";

const ProjectCard = (props) => {
  return (
    <Box w='450px' h='650px' border='1px solid blue' borderRadius={18} textAlign='center'>
      <Image borderTopRadius={18} src={props.img} name="photo" />
      <Heading m={1} size='xl'>{props.title}</Heading>
      <Text>{props.description}</Text>
      <Heading size='md' my={2}>Tech-Stack</Heading>
      <Box>
      {props['tech'].map((elem)=>{
        return <Text>{elem}</Text>}
        )}
      </Box>
      <Button my={2} mx={3} color='gray' px={7} fontSize='18px'><Link href={props.github}>Repo</Link></Button>
      <Button color='gray' px={7} fontSize='18px'><Link href={props.live}>Live</Link></Button>
    </Box>
  );
};

export const Projects = () => {
  return (
    <Box id='projects' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx='50px' my='90px' p='20px 30px 20px 30px' borderRadius='8px'>
      <Box color='white' textAlign='center' mb={6}>
        <Heading>Some of my best projects</Heading>
        <Icon w="50px" h="50px" mt={3}  as={GrProjects} />
      </Box>
    <Box alignContent='center'>
      </Box>
      <Box>
      <Flex wrap='wrap' gap={6}  p={['25px','50px','150px']}>
        {data.projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </Flex>
      </Box>
    </Box>
  );
};
