import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markDownContent from './MDDemo.md?raw'
import BlogHead from "../BlogHead";
import 'github-markdown-css/github-markdown-light.css';

const MD = () => {
  return (
    <>
      <BlogHead title="available with .md" params="md" tags={["learning", "React", "Markdown"]} />
      <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
              { markDownContent }
          </ReactMarkdown>
      </div>
    </>
  );
}

export default MD;