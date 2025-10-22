declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// declare module '*.md' {
//   const content: string;
//   export default content;
// }

declare module "*.md?raw" {
  const content: string;
  export default content;
}


declare module 'github-markdown-css/github-markdown-light.css';
declare module 'github-markdown-css/github-markdown-dark.css';
declare module '*.md' {
  const content: string;
  export default content;
}