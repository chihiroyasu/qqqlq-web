import { Stack } from "@chakra-ui/react"
import Trans from "../layout/TopTrans";
import BTestCard from "./BlogTest/BTestCard";
import BInitialCard from "./BlogInitial/BInitialCard";

const Blogs = () => {
  return (
    <>
      <Trans />

      <Stack>
        <BInitialCard />
        <BTestCard />
      </Stack>
    </>
  )
}
export default Blogs;