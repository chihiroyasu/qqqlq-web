'use client'

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

// 子要素を受け取るリンクコンポーネント
interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a" // Boxをリンク(<a>)として使う
      px={2} // 左右の余白
      py={1} // 上下の余白
      rounded="md" // 角を丸くする
      _hover={{ // ホバー時のスタイル
        textDecoration: 'none', 
        bg: useColorModeValue('gray.200', 'gray.700'), // ライト/ダークで背景色を変える
      }}
      href="#"> 
      {children} 
    </Box>
  )
}

// ナビゲーションバー本体
export default function Nav() {
  // 現在の色モード(light/dark)を取得・切替
  const { colorMode, toggleColorMode } = useColorMode()
  // メニューの開閉状態を管理
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* ナビバー全体の背景色と左右余白 */}
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        {/* 横並びレイアウト: 左にLogo、右にボタンやメニュー */}
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* 左側のロゴ */}
          <Box>Logo</Box>

          {/* 右側: ダークモード切替ボタン + ユーザーメニュー */}
          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              
              {/* ダークモード切替ボタン */}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* ユーザーメニュー */}
              <Menu>
                <MenuButton
                  as={Button} // クリックできるボタンにする
                  rounded="full" // 丸い形
                  variant="link" // ボタンの見た目をリンク風に
                  cursor="pointer"
                  minW={0} // 最小幅をゼロにして小さくする
                >
                  <Avatar
                    size="sm"
                    src="https://avatars.dicebear.com/api/male/username.svg"
                  />
                </MenuButton>

                {/* メニューの中身 */}
                <MenuList alignItems="center">
                  <br />
                  <Center>
                    <Avatar
                      size="2xl"
                      src="https://avatars.dicebear.com/api/male/username.svg"
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
