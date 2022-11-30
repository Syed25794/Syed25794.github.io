import {Box, Button, Flex, Heading, Icon, Input, Text} from '@chakra-ui/react';
import { useState } from 'react';
import {VscDebugDisconnect} from 'react-icons/vsc';
import { Element } from 'react-scroll';

export const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const handleInputs =()=>{
        const object={
            name,
            email,
            message
        };
        console.log(object);
        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <Element name='contact' >
            <Flex  direction={['column','row','row']} id='contact'  justifyContent='center' alignContent='center'>
                <Box  boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} p={['10px','15px','25px']} borderRadius='8px' justifyContent='center'>
                    <Box color='white' textAlign='center' mb={6}>
                        <Heading fontSize={['2xl','3xl','3xl']} fontWeight='500' >Connect With Me</Heading>
                        <Icon  w="50px" h="50px" mt={3}  as={VscDebugDisconnect} />
                    </Box>
                    <Box p={5}>
                        <Text marginBottom={2}>Name</Text>
                        <Input name='name' value={name} onChange={(e)=>setName(e.target.value)} w={["200px","225px","250px"]} />
                    </Box>
                    <Box p={5}>
                        <Text marginBottom={2}>Email</Text>
                        <Input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} w={["200px","225px","250px"]} />
                    </Box>
                    <Box p={5}>
                        <Text marginBottom={2}>Message</Text>
                        <Input name='message' value={message} onChange={(e)=>setMessage(e.target.value)} w={["200px","225px","250px"]} />
                    </Box>
                    <Box marginLeft={['35px','45px','65px']}>
                        <Button onClick={()=>handleInputs()} border='1px solid #34d399' bg='#10af7a' _hover={{background:"#34d399"}} color='white'>Connect With Me</Button>
                    </Box>
                </Box>
            </Flex>
        </Element>
    )
};