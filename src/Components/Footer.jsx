import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box>
      <Box>
        <Link>Linkedin</Link>
        <Link>Github</Link>
        <Link>Email</Link>
        <Link>Twitter</Link>
        <Link>Number</Link>
      </Box>
      <Box>
        <Text>Designed & Built by <span>Sayyad Gul Mohammad</span> © 2022</Text>
      </Box>
    </Box>
  )
}

export default Footer