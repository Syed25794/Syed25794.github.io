import { Text, Heading, Box, Link, Image, Flex, Button } from "@chakra-ui/react";
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
    <Box id="projects" marginTop={8} >
    <Box alignContent='center'>
      <Heading>Some of my best contribution</Heading>
      <Text>
        In Masai School, every unit first four week we learn and in the last
        unit we make team and cloned website with the learning we got.
      </Text>
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
