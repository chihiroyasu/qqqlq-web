import { useState } from "react";

// 記事データ例
const posts = [
  { id: 1, title: "ReactのHooks入門", tags: ["React", "Hooks"] },
  { id: 2, title: "TypeScriptで型安全なコードを書く", tags: ["TypeScript"] },
  { id: 3, title: "Next.jsでSSGブログ", tags: ["React", "Next.js"] },
];

// 検索コンポーネント例
function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div>
      <div>
        {["React", "Hooks", "TypeScript", "Next.js"].map((tag) => (
          <button key={tag} onClick={() => setSelectedTag(tag)}>
            {tag}
          </button>
        ))}
        <button onClick={() => setSelectedTag(null)}>All</button>
      </div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default BlogList;