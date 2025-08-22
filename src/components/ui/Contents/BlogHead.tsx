import { useNavigate } from "react-router-dom";
import {
  Separator,
  Box,
  HStack,
  Text,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { RiArrowDropRightLine } from "react-icons/ri"

type BlogProps = {
  params: string;
  title: string;
  tags: string[];
};

const BlogHead = (props: BlogProps) => {
  const navigate = useNavigate();
  const goToTop = () => navigate("/");
  const goToTags = () => navigate("/blog/tag");
  const goToBlog = () => navigate(`/blog/${props.params}`);

  // タグの色を定義
  const TagColor: { [key: string]: string } = {
    learning: "purple",
    Chakra: "teal",
    React: "orange",
  };

  return (
    <>
      <Separator orientation="vertical" />
      <Box borderBottom="2px solid" display="inline-block">
        <HStack gap={2}>
          <Box onClick={goToTop} cursor="pointer">
            <Text fontSize={{ base: "lg", md: "lg", lg: "3xl" }} whiteSpace="nowrap">Top</Text>
          </Box>
          <RiArrowDropRightLine size="2em" />
          <Box onClick={goToTags} cursor="pointer">
            <Text fontSize={{ base: "lg", md: "lg", lg: "3xl" }} whiteSpace="nowrap">Tech Blog</Text>
          </Box>
          <RiArrowDropRightLine size="2em" />
          <Box onClick={goToBlog} cursor="pointer">
            <Text fontSize={{ base: "lg", md: "lg", lg: "3xl" }} whiteSpace="nowrap">{props.title}</Text>
          </Box>
        </HStack>
      </Box>
      <Separator orientation="vertical" />

      <Stack direction="row" gap={4} wrap="wrap">
        {props.tags.map(tag => (
          <Tag.Root 
            key={tag} 
            cursor="pointer" 
            colorPalette={TagColor[tag] || "gray"}
          >
            <Tag.Label>{tag}</Tag.Label>
          </Tag.Root>
        ))}
      </Stack>

      <Separator orientation="vertical" />
    </>
  );
};

export default BlogHead;
