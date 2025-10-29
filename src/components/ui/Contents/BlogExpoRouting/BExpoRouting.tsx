import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markDownContent from './BExpoRouting.md?raw';
import BlogHead from "../BlogHead";
import { useEffect, useState } from 'react';

const MD = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 現在のテーマを検出する関数
    const detectTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                     document.documentElement.getAttribute('data-theme') === 'dark';
      return isDark ? 'dark' : 'light';
    };

    // 初期テーマを設定
    setTheme(detectTheme());

    // MutationObserver: HTML要素の変更を監視
    const observer = new MutationObserver(() => {
      setTheme(detectTheme()); // テーマが変わったら更新
    });

    // document.documentElement（<html>タグ）の変更を監視
    observer.observe(document.documentElement, {
      attributes: true, // 属性の変更を監視
      attributeFilter: ['class', 'data-theme'] // classとdata-theme属性だけ監視
    });

    // クリーンアップ
    return () => {
      observer.disconnect();
    };
  }, []);

  // テーマが変更されるたびにCSSを更新
  useEffect(() => {
    const existingLink = document.getElementById('github-markdown-css');
    if (existingLink) {
      existingLink.remove();
    }

    const link = document.createElement('link');
    link.id = 'github-markdown-css';
    link.rel = 'stylesheet';
    link.href = theme === 'dark'
      ? 'https://cdn.jsdelivr.net/npm/github-markdown-css@5/github-markdown-dark.css'
      : 'https://cdn.jsdelivr.net/npm/github-markdown-css@5/github-markdown-light.css';
    
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [theme]); // themeが変わるたびに実行

  return (
    <>
      <BlogHead title="available with .md" params="md" tags={["Expo", "expo-router", "ルーティング", "React Native"]} />
      <div className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markDownContent}
        </ReactMarkdown>
      </div>
    </>
  );
}

export default MD;