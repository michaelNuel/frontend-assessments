
import './App.css'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Box>
        <Navbar />
        <Body />
        <Footer />
      </Box>
    </>
  )
}

export default App
