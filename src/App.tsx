import { Container, VStack } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/layout/NavBar';
import Blogs from './components/ui/Contents/Blogs';
import BlogRoutes from './components/ui/Contents/BlogRoutes';

function App() {

  function NotFound() {
    return <div>Page Not Found</div>;
  };

  return (
    <Router>
      <NavBar />
      <Container maxW="100%" mx="auto" p={4}>
        <VStack width={{ base: "90%", md: "90%", lg: "90%" }} mx="auto" align="stretch">
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/blog/*" element={<BlogRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </VStack>
      </Container>
    </Router>
  )
}

export default App;