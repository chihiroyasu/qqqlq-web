import { Card, Heading, Stack } from "@chakra-ui/react"

const CardDemo = () => {
  return (
    <Stack>
      <Card.Root width={{ base: "100%", md: "100%", lg: "100%" }}>
        <Card.Header>
          <Heading size="md"> Card - sm</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>

      <Card.Root width={{ base: "100%", md: "100%", lg: "100%" }}>
        <Card.Header>
          <Heading size="md"> Card - sm</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}
export default CardDemo