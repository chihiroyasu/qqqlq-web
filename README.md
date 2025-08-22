# 記事の追加方法(備忘録)


qqqlq-web(技術ブログ)における記事追加の流れを以下に記す。

## 1. 記事ファイルの作成

`@/components/ui/Contents`下に任意のディレクトリを作成し以下テンプレートをもとに"B[ブログのparams等].tsx"と"B[ブログのparams等]Card.tsx"を作成する。

***BSample.tsx***
```js:BSample.tsx
import { Stack, Text } from "@chakra-ui/react"
import BlogHead from "../BlogHead";

const BlogSample = () => {
  return (
    <>
      <BlogHead title="sample post" params="sample" tags={["learning", "sample"]} />
      // コンテンツ
    </>
  )
}
export default BlogSample;
```
***BSampleCard.tsx***
```js:BSampleCard.tsx
import { Card, Heading, Tag, HStack} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const BSampleCard = () => {

  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog/sample");
  };

  // タグ色々
  const TagInfo = [
    { tag: "learning", color: "purple" },
    { tsg: "sample", color: "red"},
  ];

  return (
    <>
      <Card.Root width="100%" onClick={goToBlog} cursor="pointer">
          <Card.Header>
            <HStack gap={2} justifyContent="space-between">
              <Heading size="md">Sample Post</Heading>
              <HStack gap={2}>
                {TagInfo.map(tag => (
                  <Tag.Root key={tag.tag} cursor="pointer" colorPalette={tag.color}>
                    <Tag.Label>{tag.tag}</Tag.Label>
                  </Tag.Root>
                ))}
              </HStack>
            </HStack>
          </Card.Header>
          <Card.Body color="fg.muted">
            This is a sample.
          </Card.Body>
        </Card.Root>
    </>
  )
}
export default BSampleCard;
```

## 2. 記事内容の執筆

手順1にて作成した"B[ブログのparams等].tsx"にjsxで頑張る。

## 3. Cardの飾り

- 当記事のタイトル(なるべく短く)とサイト内での場所(パスパラメータ)、適切なtag(タグの色なども含む)を決める。
- 決定事項をもとに"B[ブログのparams等].tsx"のBlogHeadコンポーネントに各propsを設定する。
- "B[ブログのparams等]Card.tsx"のgoToBlog関数のnavigateの引数を当記事のパスパラメータに設定する。TagsInfoのオブジェクトについても該当するものを書き込む。
- `@/components/Contents/BlogRoutes.tsx`にて"B[ブログのparams等].tsx"をimportしてルーティングする。
- 従来のタグにないものを指定する場合、`@/components/Contents/BlogSearch.tsx`にてBTagsとTagColorにそれぞれ決めた情報を追加する。
- 従来のタグ以外のものを指定する場合、`@/components/COntents/BlogHead.tsx`にも同様にTagColorの情報を追加する。
