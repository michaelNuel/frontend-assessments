import { Box, Image } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <Box display={"flex"} margin={"3rem"}>
      <Image 
       alt='logo'
       src="./logo.svg"
       height={{ base: "25px", md: "40px", lg: "50px" }}
       width={{ base: "auto", md: "auto", lg: "auto" }}
       maxWidth={{ base: "100px", md: "150px", lg: "200px" }}
       
      />
    </Box>
  )
}

export default Navbar
