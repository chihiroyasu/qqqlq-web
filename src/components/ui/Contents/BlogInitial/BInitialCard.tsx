import { Card, Heading} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const BInitialCard = () => {
  
  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog/initial");
  };

  return (
    <>
      <Card.Root width="100%" onClick={goToBlog} cursor="pointer">
          <Card.Header>
            <Heading size="md"> I'm qqqlq.</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            This is a an initial blog post. This blog will be used to sharing daily learning and knowledge.
          </Card.Body>
        </Card.Root>
    </>
  )
}
export default BInitialCard;