import { Container, VStack } from '@chakra-ui/react'
import CardDemo from './components/ui/Card';

function App() {
  return (
    <Container maxW="100%" mx="auto" p={4}>
      <VStack width="80%" mx="auto" align="stretch">
        <CardDemo />
      </VStack>
    </Container>
  )
}

export default App;
