import {Box, Button, Flex, Heading, Input, Text} from '@chakra-ui/react'

export const Contact=()=>{
    return (
        <Flex direction={['column','row','row']} id='contact' padding={10} justifyContent='center'>
            <Box id='projects' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} my='90px' p={['10px','15px','25px']} borderRadius='8px' justifyContent='center'>
                <Heading>Contact me</Heading>
                <Box p={5}>
                    <Text marginBottom={2}>Name</Text>
                    <Input w={["200px","225px","250px"]} />
                </Box>
                <Box p={5}>
                    <Text marginBottom={2}>Email</Text>
                    <Input w={["200px","225px","250px"]} />
                </Box>
                <Box p={5}>
                    <Text marginBottom={2}>Message</Text>
                    <Input w={["200px","225px","250px"]} />
                </Box>
                <Box marginLeft={['35px','45px','65px']}>
                    <Button border='1px solid #34d399' bg='#10af7a' _hover={{background:"#34d399"}} color='white'>Connect With Me</Button>
                </Box>
            </Box>
        </Flex>
    )
};