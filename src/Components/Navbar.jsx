import {Navbar,Container,Link,Box} from '@chakra-ui/react'

export const Navbar=()=>{
    return (
        <Container>
        <Box>
        <Link href=''>Sayyad Gul Mohammad</Link>
        </Box>
        <Navbar>
        <Link href='#home'>Home</Link>
        <Link href='#about'>About</Link>
        <Link href='#skills'>Skills</Link>
        <Link href='#projects'>Projects</Link>
        <Link href='#resume'>Resume</Link>
        <Link href='#contact'>Contact</Link>
        </Navbar>
        </Container>
    )

}