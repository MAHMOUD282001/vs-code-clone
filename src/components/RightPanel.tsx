import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import { RootState } from "../store/store";
import OpennedFilesBar from "./OpennedFilesBar";

interface IProps {}

function RightPanel({}: IProps) {
  const { clickedFile } = useSelector((state: RootState) => state.fileTree);

  return (
    <div className="flex flex-col w-full">
      <OpennedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
}

export default RightPanel;
