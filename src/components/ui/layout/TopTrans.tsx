import { 
    Box,
    Separator,
    Text,
    HStack
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri"

// ナビゲーションバー本体
const Trans = () => {

  const navigate = useNavigate();

  const goToTags = () => {
    navigate("/blog/tag");
  };

  return (
    <>
        {/* <Box position="relative" padding="5">
            <Separator orientation="vertical" />
            <Tag.Root onClick={goToTags} cursor="pointer">
                <Tag.Label>Tags</Tag.Label>
                <Tag.EndElement>
                    <Tag.CloseTrigger />
                </Tag.EndElement>
            </Tag.Root>
        </Box> */}
        <Separator orientation="vertical" />
            <Box onClick={goToTags} cursor="pointer" borderBottom="2px solid" display="inline-block">
                <HStack gap={2}>
                    <Text textStyle="3xl">Tech Blog</Text>
                    <RiArrowDropRightLine size="2em" />
                </HStack>
            </Box>
        <Separator orientation="vertical" />
    </>
  )
}

export default Trans;