import {Link,Box,Flex} from '@chakra-ui/react'

export const Navbar=()=>{
    return (
        <Box bg='gray.800'  fontSize={['16px','18px','20px']} boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 2px 0px' pb={3}>
        <Flex direction={['column','column','row']} mx={3} p={6} alignItems={['center','center','left']}>
        <Box>
        <Link as='a' color='#fffff2' href='#home' _hover={{textDecorationLine:"none"}} pb={['10px','0px','0px']}  pr={['0px','15px','50px']} fontWeight='bold' >Sayyad Gul Mohammad</Link>
        </Box>
        <Flex direction={['column','row','row']}  justifyContent={['center','flex-start','flex-start']} gap={['10px','20px','30px']} >
        <Link _hover={{color:'#fffff2'}} transitionDuration='1000ms' href='#home'>Home</Link>
        <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#about'>About</Link>
        <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#skills'>Skills</Link>
        <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#projects'>Projects</Link>
        <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#resume'>Resume</Link>
        <Link _hover={{color:'#fffff2'}} transitionDuration='1200ms' href='#contact'>Contact</Link>
        </Flex>
        </Flex>
        </Box>
    )

}