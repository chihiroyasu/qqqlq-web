import { Card, Heading, Tag, HStack} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const BTestCard = () => {

  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog/test");
  };

  // タグ色々
  const TagInfo = [
    { tag: "learning", color: "purple" },
    { tag: "Chakra", color: "teal" },
    { tag: "React", color: "orange" },
  ];

  return (
    <>
      <Card.Root width="100%" onClick={goToBlog} cursor="pointer">
          <Card.Header>
            <HStack gap={2} justifyContent="space-between">
              <Heading size="md">Test Post</Heading>
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
            This is a test.
          </Card.Body>
        </Card.Root>
    </>
  )
}
export default BTestCard;