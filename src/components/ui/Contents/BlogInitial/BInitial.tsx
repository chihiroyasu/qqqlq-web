import { Stack, Text } from "@chakra-ui/react"
import BlogHead from "../BlogHead";

const BlogInitial = () => {
  return (
    <>
      <BlogHead title="I'm qqqlq." params="initial" tags={["learning",]} />
      <Stack>
        <Text textStyle="xs">Chakra</Text>
        <Text textStyle="sm">Chakra</Text>
        <Text textStyle="md">Chakra</Text>
        <Text textStyle="lg">Chakra</Text>
        <Text textStyle="xl">Chakra</Text>
        <Text textStyle="2xl">Chakra</Text>
        <Text textStyle="3xl">Chakra</Text>
        <Text textStyle="4xl">Chakra</Text>
        <Text textStyle="5xl">Chakra</Text>
        <Text textStyle="6xl">Chakra</Text>
        <Text textStyle="7xl">Chakra</Text>
      </Stack>
    </>
  )
}
export default BlogInitial;