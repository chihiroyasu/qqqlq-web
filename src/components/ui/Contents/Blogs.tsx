import { Stack } from "@chakra-ui/react"
import Trans from "../layout/TopTrans";
import BTestCard from "./BlogTest/BTestCard";
import BInitialCard from "./BlogInitial/BInitialCard";
import BMDCard from "./BlogMD/BMDCard";

const Blogs = () => {
  return (
    <>
      <Trans />

      <Stack>
        <BMDCard />
        <BInitialCard />
        <BTestCard />
      </Stack>
    </>
  )
}
export default Blogs;