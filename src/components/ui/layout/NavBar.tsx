import { 
    Box,
    Flex,
    Stack,
} from "@chakra-ui/react"
import {
    ColorModeButton,
    useColorModeValue,
} from "@/components/ui/color-mode"
import { FaXTwitter, FaGithub } from "react-icons/fa6";

// ナビゲーションバー本体
const NavBar = () => {
  return (
    <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box>qqqlq</Box>
                <Stack direction="row" alignItems="center">
                    <ColorModeButton />
                    <Box
                        as="button"
                        onClick={() => window.open('https://github.com/chihiroyasu', '_blank')}
                        cursor="pointer"
                        fontSize="xl"
                        _hover={{ color: 'gray.500' }}
                    >
                        <FaGithub />
                    </Box>
                    <Box
                        as="button"
                        onClick={() => window.open('https://twitter.com/qqqlq', '_blank')}
                        cursor="pointer"
                        fontSize="xl"
                        _hover={{ color: 'gray.500' }}
                    >
                        <FaXTwitter />
                    </Box>
                </Stack>
            </Flex>
        </Box>
    </>
  )
}

export default NavBar