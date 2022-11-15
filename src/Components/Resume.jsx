import { Box,Link, Flex} from "@chakra-ui/react";

export const Resume=()=>{
    return (
        <Flex justifyContent='center'>
        <Flex wrap='wrap' gap={[2,4,6]} direction={['column','row','row']} id='resume' boxShadow ='rgb(127,127,127) 0px 5px 15px' mx={['15px','25px','50px']} w={['350px','400px','450px']} height={['200px','250px','300px']} justifyContent='center'>
            <Link mx={['70px','0px','0px']} marginTop={[4,5,32]} href='./Portfolio.pdf'><Box bg='#33b249' color='white' w='200px' p='8px 20px 8px 20px' borderRadius={6} fontSize='18px' download>Download Resume</Box></Link>
            <Link target="_blank" mx={['70px','0px','0px']} marginTop={[4,5,32]} href='https://drive.google.com/file/d/1fa8CTWOXEmGO-y5mtrBLlIEezJKu243d/view' ><Box bg='#33b249' color='white' w='200px' p='8px 20px 8px 20px' borderRadius={6} fontSize='18px' download>See My Resume</Box></Link>
        </Flex>
        </Flex>
    )
};