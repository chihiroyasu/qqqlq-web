import { Container, VStack } from '@chakra-ui/react'
import CardDemo from './components/ui/Card';

function App() {
  return (
    <Container 
      maxW="80%"  // 幅を80%に設定
      mx="auto"     // 中央寄せ
      p={4}
    >
      <VStack>
        <CardDemo />
      </VStack>
    </Container>
  )
}

export default App;
