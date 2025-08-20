import { 
    Box,
    Flex,
    Stack
    // Button,
    // Menu,
    // useDisclosure,
} from "@chakra-ui/react"
import {
    ColorModeButton,
    useColorModeValue,
} from "@/components/ui/color-mode"
import { FaXTwitter, FaGithub } from "react-icons/fa6";

// ナビゲーションバー本体
const NavBar = () => {

  return (
    // ナビバー全体の背景色と左右余白
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        {/* 横並びレイアウト: 左にLogo、右にボタンやメニュー */}
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* 左側のロゴ */}
        <Box>qqqlq</Box>

        {/* 右側: 各ボタン */}
        <Stack direction="row" alignItems="center">
          <ColorModeButton />
          <Box
            as="button"
            onClick={() => window.open('https://github.com/あなたのURL', '_blank')}
            cursor="pointer"
            fontSize="xl"
            _hover={{ color: 'gray.500' }}
          >
            <FaGithub />
          </Box>
          <Box
            as="button"
            onClick={() => window.open('https://twitter.com/あなたのURL', '_blank')}
            cursor="pointer"
            fontSize="xl"
            _hover={{ color: 'gray.500' }}
          >
            <FaXTwitter />
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default NavBar