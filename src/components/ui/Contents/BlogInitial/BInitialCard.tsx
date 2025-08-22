import { Card, Heading, HStack, Tag} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const BInitialCard = () => {
  
  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog/initial");
  };

  // タグ色々
  const TagInfo = [
    { tag: "learning", color: "purple" },
  ];

  return (
    <>
      <Card.Root width="100%" onClick={goToBlog} cursor="pointer">
          <Card.Header>
            <HStack gap={2} justifyContent="space-between">
                <Heading size="md"> I'm qqqlq.</Heading>
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
            This is an initial post. This blog was created using React.
          </Card.Body>
        </Card.Root>
    </>
  )
}
export default BInitialCard;