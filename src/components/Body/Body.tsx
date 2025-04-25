import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'


const Body = () => {
  return (
    <Box width={"100vw"}>
      <Flex flexDirection={{base: "column", md: "column", lg:"row"}} justify={"space-between"} marginInline={"3rem"}>
        <Box display={{base:"grid", md:"grid", lg:"block"}} placeContent={"center"}>
            <Image 
             alt='illustration'
             src={"./illustration-mockups.svg"}
             height={{base: 130, md: 250 , lg:350}}
             width={{base:270,lg:770}}
            />
        </Box>

        <Box width={{base:"20rem",lg:"30rem"}}  paddingInline={"1rem"}>
            <Text fontSize={{base:"1.5rem",lg:"2.5rem"}} textAlign={{base:"center", lg:"left"}} marginTop={{base:"1rem", lg:"none"}} fontWeight={"bold"}>
                Build The Community Your Fans Will Love
            </Text>

            <Text fontSize={{base:"1rem",lg:"1rem"}} textAlign={{base:"center", lg:"left"}} marginTop={{base:"1rem", lg:"none"}}>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with users as you engage in genuine discussions.
            </Text>

            <Button  marginLeft={{base:"5.4rem", lg:"0rem"}} height={"3rem"} width={"8rem"} marginTop={"1rem"}  marginBottom={{base:"3rem", lg:"none"}} backgroundColor={"white"} color={"purple.800"} fontSize={".9rem"} _hover={{ backgroundColor: "purple.600", color:"white"}}>
                Register
            </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Body
