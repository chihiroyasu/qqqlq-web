import { 
    Box,
    Tag,
    Separator,
} from "@chakra-ui/react"

// ナビゲーションバー本体
const Trans = () => {
  return (
    <>
        <Box position="relative" padding="5">
            <Separator orientation="vertical" />
            <Tag.Root>
                <Tag.Label>Tags</Tag.Label>
                <Tag.EndElement>
                    <Tag.CloseTrigger />
                </Tag.EndElement>
            </Tag.Root>
        </Box>
    </>
  )
}

export default Trans;