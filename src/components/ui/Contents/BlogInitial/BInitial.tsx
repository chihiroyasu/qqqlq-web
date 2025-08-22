import { Separator, Stack, Text, Link } from "@chakra-ui/react"
import BlogHead from "../BlogHead";
import { LuExternalLink } from "react-icons/lu"

const BlogInitial = () => {
  return (
    <>
      <BlogHead title="Hello World." params="initial" tags={["learning",]} />
      <Stack>
        <Text textStyle={"xl"} fontWeight={"bold"}>Hello World.</Text>
        <Text>I'm qqqlq.</Text>
        <Text>This blog was created using React.</Text>
        <Text>Details and configuration are on{" "}
          <Link
            variant={"underline"}
            href="https://github.com/chihiroyasu/qqqlq-web"
            colorPalette={"teal"}
          >
            GitHub <LuExternalLink />
          </Link>{" "}
        </Text>
        <Separator orientation={"vertical"} />
        <Text fontWeight={"bold"}>To Do</Text>
        <Text>・make this available with .md</Text>
      </Stack>
    </>
  )
}
export default BlogInitial;