import { Box,Text,Flex } from "@chakra-ui/react";
import {Icon} from '@chakra-ui/icons'
import data from './../db.json';
import {FaHtml5 ,FaCss3Alt,FaReact,FaGitAlt,FaGithub,FaPython,FaJava,FaNodeJs} from 'react-icons/fa';
import { TbBrandJavascript} from 'react-icons/tb';
import { SiMongodb ,SiPostman , SiExpress} from 'react-icons/si';

const SkillsCard=({name})=>{
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
        case "MongoDB":
            icons=SiMongodb;
            break;
        case "Git":
            icons=FaGitAlt;
            break;
        case "Github":
            icons=FaGithub;
            break;
        case "Java":
            icons=FaJava;
            break;
        case "Python":
            icons=FaPython;
            break;
        case "Express":
            icons=SiExpress;
            break;
        case "Node.js":
            icons=FaNodeJs;
            break;
        default :
            icons=SiPostman;
    }
    return (
        <Box textAlign="center" w='200px' h='250px'  border='1px solid red' borderRadius={10} >
            <Icon w="78px" h="78px" as={icons} />
            <Text>{name}</Text>
        </Box>
    )
}

export const Skills=()=>{
    return (
        <Flex px={8} justifyContent="center" alignItems="center" wrap='wrap' gap={5} id='skills'>
            {data.skills.map((skill)=>{
                return <SkillsCard key={skill.name} {...skill} />
            })}
        </Flex>
    )
};