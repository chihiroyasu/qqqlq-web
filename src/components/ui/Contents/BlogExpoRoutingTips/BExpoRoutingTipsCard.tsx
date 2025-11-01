import { Card, Heading, Tag, HStack} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const BExpoRoutingTipsCard = () => {

  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog/expo-routing-tips");
  };

  // タグ色々
  const TagInfo = [
    { tag: "Expo", color: "purple" },
    { tag: "expo-router", color: "orange"},
    { tag: "ルーティング", color: "red"},
    { tag: "React Native", color: "green"},
  ];

  return (
    <>
      <Card.Root width="100%" onClick={goToBlog} cursor="pointer">
          <Card.Header>
            <HStack gap={2} justifyContent="space-between">
              <Heading size="md">expo-router tips</Heading>
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
            expo-routerのルーティングのTips
          </Card.Body>
        </Card.Root>
    </>
  )
}
export default BExpoRoutingTipsCard;