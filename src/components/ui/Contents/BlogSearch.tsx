import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
    Stack,
    Tag,
    HStack,
    // Text,
} from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi"


const BlogSearch = () => {
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
        {id: 1, title: "test", tags: ["Chakra", "React",]},
        {id: 2, title: "initial", tags: ["learning",]},
    ];
    // タグの色を定義
    const TagColor = {
        learning: "purple",
        Chakra: "teal",
        React: "orange",
    };
    // 全てのタグをマージした配列
    const AllTags = Array.from(new Set(BTags.flatMap(item => item.tags)));
    // 対象タグを含むtitleのリスト
    const getTitle = (tag: string) => {
        return BTags
            .filter(item => item.tags.includes(tag)) // tagを含むアイテムをフィルタリング
            .map(item => item.title) // タイトルを抽出
            .join(", "); // タイトルをカンマ区切りで結合
    };
    // 選択されているタグのタイトルをリスト取得
    const getSearchedTitles = () => {
        return Object.keys(selectedTags)
            .filter(tag => selectedTags[tag]) // 選択されているタグのみをフィルタリング
            .map(tag => getTitle(tag)) // タイトルを取得
    };
    // 重複を排除したタイトルのリスト
    const SearchedTitles = Array.from(new Set(getSearchedTitles()));


    const navigate = useNavigate();
    const goToBlog = (params: string) => {
        navigate(`/blog/${params}`);
    };

    return (
        <>
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

            <HStack>

            </HStack>
        </>
    )
}

export default BlogSearch;