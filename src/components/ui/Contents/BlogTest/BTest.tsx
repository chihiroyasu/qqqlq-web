import { Stack, Text } from "@chakra-ui/react"
import BlogHead from "../BlogHead";

const BlogTest = () => {
  return (
    <>
      <BlogHead title="test post" params="test" tags={["learning", "Chakra", "React"]} />
      <Stack>
        <Text textStyle="xs">qqqlq</Text>
        <Text textStyle="sm">qqqlq</Text>
        <Text textStyle="md">qqqlq</Text>
        <Text textStyle="lg">qqqlq</Text>
        <Text textStyle="xl">qqqlq</Text>
        <Text textStyle="2xl">qqqlq</Text>
        <Text textStyle="3xl">qqqlq</Text>
        <Text textStyle="4xl">qqqlq</Text>
        <Text textStyle="5xl">qqqlq</Text>
        <Text textStyle="6xl">qqqlq</Text>
        <Text textStyle="7xl">qqqlq</Text>
      </Stack>
    </>
  )
}
export default BlogTest;