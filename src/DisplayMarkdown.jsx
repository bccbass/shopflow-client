import { marked } from "marked";
import DOMPurify from "dompurify";

marked.setOptions({
    breaks: true, // Enable line breaks
    gfm: true, // GitHub-Flavored Markdown (better lists, tables, etc.)
    headerIds: false, // Prevents auto-generating IDs for headers
  });
  

const DisplayMarkdown = ({ note='' }) => {
    const markdownToHtml = marked(note); // Convert Markdown to HTML
    const sanitizedHTML = DOMPurify.sanitize(markdownToHtml); // Sanitize output
  
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
  };

export default DisplayMarkdown