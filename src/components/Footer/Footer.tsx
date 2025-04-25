import { Box, Button } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <Box display={"flex"}  gap={"2rem"} marginInline={"3rem"} justifyContent={{base:"center",lg:"end"}}>
      <Button border={"1px solid white"} color={"white"}  height={"3rem"} backgroundColor={"transparent"} display={"flex"} justifyContent={"center"} _hover={{border: "1px solid purple.600", color: "purple.600"}} alignItems={"center"} width={"3rem"} borderRadius={"50%"} padding={".5rem"}>
             <FaFacebookF />
      </Button>
      <Button border={"1px solid white"} color={"white"}  height={"3rem"} backgroundColor={"transparent"} display={"flex"} justifyContent={"center"} _hover={{border: "1px solid purple.600", color: "purple.600"}} alignItems={"center"} width={"3rem"} borderRadius={"50%"} padding={".5rem"}>
             <FaTwitter/>
      </Button>
      <Button border={"1px solid white"} color={"white"}  height={"3rem"} backgroundColor={"transparent"} display={"flex"} justifyContent={"center"} _hover={{border: "1px solid purple.600", color: "purple.600"}} alignItems={"center"} width={"3rem"} borderRadius={"50%"} padding={".5rem"}>
             <FaInstagram />
      </Button>
    </Box>
  )
}

export default Footer
