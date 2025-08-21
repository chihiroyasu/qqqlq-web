import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Stack,
    Tag,
    VStack,
    Separator,
    Box,
    HStack,
    Text,
} from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi"
import BlogTest from "./BlogTest/BTestCard";
import BlogInitial from "./BlogInitial/BInitialCard";
import { RiArrowDropRightLine } from "react-icons/ri"


const BlogSearch = () => {
    const navigate = useNavigate();
    const goToTop = () => {
        navigate("/");
    }
    const goToTags = () => {
        navigate("/blog/tag");
    };

    // タグごとの状態を管理する
    const [selectedTags, setSelectedTags] = useState<Record<string, boolean>>({});
    // タグの選択状態をトグルする関数
    const toggleTag = (tag: string) => {
        setSelectedTags(prev => ({
        ...prev,
        [tag]: !prev[tag]
        }));
    };
    // ここでタグのデータを定義
    const BTags = [
        {id: 0, component: BlogTest, tags: ["Chakra", "React",]},
        {id: 1, component: BlogInitial, tags: ["learning",]},
    ];
    // タグの色を定義
    const TagColor = {
        learning: "purple",
        Chakra: "teal",
        React: "orange",
    };
    // 全てのタグをマージした配列
    const AllTags = Array.from(new Set(BTags.flatMap(item => item.tags)));
    // 選択されているタグに対応するコンポーネントのリスト取得
    const getSearchedComponents = () => {
        return Object.keys(selectedTags)
            .filter(tag => selectedTags[tag])
            .flatMap(tag => 
                BTags.filter(item => item.tags.includes(tag))
                    .map(item => ({id: item.id, Component: item.component}))
            );
    }
    // const SearchedComponents = Array.from(new Set(getSearchedComponents()));
    const SearchedComponents = Object.values(
        getSearchedComponents().reduce((acc, item) => {
            acc[item.id] = item; // 同じidなら上書きされる
            return acc;
        }, {} as Record<number, {id:number; Component:any}>)
    );
    const SortedComponents = SearchedComponents.sort((a, b) => b.id - a.id);

    return (
        <>
            <Separator orientation="vertical" />
                <Box borderBottom="2px solid" display="inline-block">
                    <HStack gap={2}>
                        <Box onClick={goToTop} cursor="pointer">
                            <Text textStyle="3xl">Top</Text>
                        </Box>
                        <RiArrowDropRightLine size="2em" />
                        <Box onClick={goToTags} cursor="pointer">
                            <Text textStyle="3xl">Tech Blog</Text>
                        </Box>
                    </HStack>
                </Box>
            <Separator orientation="vertical" />
            
            <Stack direction="row" gap={4} wrap="wrap">
                {AllTags.map(tag => (
                    <div key={tag} onClick={() => toggleTag(tag)}>
                        {selectedTags[tag] ? (
                            <Tag.Root variant="solid" cursor="pointer">
                                <Tag.Label>{tag}</Tag.Label>
                                <Tag.CloseTrigger onClick={(e) => {
                                    e.stopPropagation();
                                    toggleTag(tag);
                                }} />
                            </Tag.Root>
                        ) : (
                            <Tag.Root cursor="pointer">
                                <Tag.StartElement as={HiPlus} />
                                <Tag.Label>{tag}</Tag.Label>
                            </Tag.Root>
                        )}
                    </div>
                ))}
            </Stack>

            <Separator orientation="vertical" />

            <VStack>
                {SortedComponents.map((item) => (
                    <item.Component key={item.id} />
                ))}
            </VStack>
        </>
    )
}

export default BlogSearch;