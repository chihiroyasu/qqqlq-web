import { Card, Heading, Tag, HStack} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const BMDCard = () => {

  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog/md");
  };

  // タグ色々
  const TagInfo = [
    { tag: "learning", color: "purple" },
    { tag: "React", color: "orange"},
    { tag: "Markdown", color: "red"},
  ];

  return (
    <>
      <Card.Root width="100%" onClick={goToBlog} cursor="pointer">
          <Card.Header>
            <HStack gap={2} justifyContent="space-between">
              <Heading size="md">handle .md</Heading>
              <HStack gap={2}>
                {TagInfo.map(tag => (
                  <Tag.Root key={tag.tag} cursor="pointer" colorPalette={tag.color}>
                    <Tag.Label>{tag.tag}</Tag.Label>
                  </Tag.Root>
                ))}
              </HStack>
            </HStack>
          </Card.Header>
          <Card.Body color="fg.muted">
            Using react-markdown, it is available to handle .md
          </Card.Body>
        </Card.Root>
    </>
  )
}
export default BMDCard;