import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markDownContent from './MDDemo.md?raw'
import BlogHead from "../BlogHead";

// const markdownContents = markDownContent;

const MD = () => {
  return (
    // <div>
    //   <ReactMarkdown>{markdown}</ReactMarkdown>
    // </div>
    <>
      <BlogHead title="available with .md" params="md" tags={["learning", "React", "Markdown"]} />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {/* {markdownContents} */}
          { markDownContent }
      </ReactMarkdown>
    </>
  );
}

export default MD;