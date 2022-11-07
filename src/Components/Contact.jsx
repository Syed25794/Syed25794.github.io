import {Box, Input, Text} from '@chakra-ui/react'

export const Contact=()=>{
    return (
        <Box id='contact' padding={10}>
            <Box p={5}>
                <Text marginBottom={2}>Name</Text>
                <Input w="250px" />
            </Box>
            <Box p={5}>
                <Text marginBottom={2}>Email</Text>
                <Input w="250px" />
            </Box>
            <Box p={5}>
                <Text marginBottom={2}>Message</Text>
                <Input w="250px" />
            </Box>
        </Box>
    )
};