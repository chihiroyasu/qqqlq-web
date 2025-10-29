import { Stack } from "@chakra-ui/react"
import Trans from "../layout/TopTrans";
import BTestCard from "./BlogTest/BTestCard";
import BInitialCard from "./BlogInitial/BInitialCard";
import BMDCard from "./BlogMD/BMDCard";
import BExpoRoutingCard from "./BlogExpoRouting/BExpoRoutingCard";

const Blogs = () => {
  return (
    <>
      <Trans />

      <Stack>
        <BExpoRoutingCard />
        <BMDCard />
        <BInitialCard />
        <BTestCard />
      </Stack>
    </>
  )
}
export default Blogs;