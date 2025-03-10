import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  content: string | undefined;
}

function FileSyntaxHighlighter({ content }: IProps) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={darcula}
      customStyle={ {
        margin: "0",
        padding: "10px",
        height: "100vh"
      }}
      showLineNumbers={true}
    >
      {String(content)}
    </SyntaxHighlighter>
  );
}
export default FileSyntaxHighlighter;

