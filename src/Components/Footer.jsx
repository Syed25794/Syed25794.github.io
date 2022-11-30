import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.footer_box}>
      <Flex>
        <Link href=''>Linkedin</Link>
        <Link href=''>Github</Link>
        <Link href=''>Email</Link>
        <Link href=''>Twitter</Link>
        <Link href=''>Number</Link>
      </Flex>
      <Box>
        <Text>Designed & Built by <span>Sayyad Gul Mohammad</span> © 2022</Text>
      </Box>
    </Box>
  )
}

export default Footer