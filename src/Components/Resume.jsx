import { Box,Link,Button} from "@chakra-ui/react";
import './../Styles/Resume.css';

export const Resume=()=>{
    return (
        <Box id='resume'>
            <Button><Link href='./Portfolio.pdf' download>Download Resume</Link></Button>
            <Button><Link href="https://drive.google.com/file/d/1fa8CTWOXEmGO-y5mtrBLlIEezJKu243d/view">See My resume</Link></Button>
        </Box>
    )
};