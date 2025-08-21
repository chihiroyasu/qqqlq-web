import { Card, Heading} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const BTestCard = () => {

  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog/test");
  };

  return (
    <>
      <Card.Root width={{ base: "100%", md: "100%", lg: "100%" }} onClick={goToBlog} cursor="pointer">
          <Card.Header>
            <Heading size="md">Test post</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            This is a test.
          </Card.Body>
        </Card.Root>
    </>
  )
}
export default BTestCard;