import { 
    Box,
    Tag,
    Separator,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

// ナビゲーションバー本体
const Trans = () => {

  const navigate = useNavigate();

  const goToTags = () => {
    navigate("/blog/tag");
  };

  return (
    <>
        <Box position="relative" padding="5">
            <Separator orientation="vertical" />
            <Tag.Root onClick={goToTags} cursor="pointer">
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