import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import Close from "./SVG/Close";
import {
  setClickedFile,
  setOpenedFiles,
  setTabIdToRemove,
} from "../store/features/fileTreeSlice";
import { RootState } from "../store/store";

interface IProps {
  file: IFile;
}

function OpennedFilesBarTab({ file }: IProps) {
  const dispatch = useDispatch();
  const {
    clickedFile: { activeTabId },
    openedFiles,
  } = useSelector((state: RootState) => state.fileTree);

  const handleTabClick = () => {
    dispatch(
      setClickedFile({
        fileName: file.name,
        fileContent: file.content,
        activeTabId: file.id,
      })
    );
  };

  const handleCloseTab = (e: React.MouseEvent, selectedTabId: string) => {
    e.stopPropagation();

    const filteredTabs = openedFiles.filter(
      (file) => file.id !== selectedTabId
    );
    const lastTab = filteredTabs[filteredTabs.length - 1];

    dispatch(setOpenedFiles(filteredTabs));

    if (!lastTab) {
      dispatch(
        setClickedFile({
          fileName: "",
          fileContent: "",
          activeTabId: null,
        })
      );
      return;
    }

    dispatch(
      setClickedFile({
        fileName: lastTab.name,
        fileContent: lastTab.content,
        activeTabId: lastTab.id,
      })
    );
  };

  const handleSetTabIdToClose = (
    e: React.MouseEvent,
    selectedTabId: string
  ) => {
    e.preventDefault();
    dispatch(setTabIdToRemove(selectedTabId));
  };

  return (
    <div
      className={`flex items-center gap-1 p-2 cursor-pointer border-t-2 ${
        activeTabId === file.id ? "border-blue-500" : "border-transparent"
      }`}
      onClick={handleTabClick}
      onContextMenu={(e) => handleSetTabIdToClose(e, file.id)}
    >
      <RenderFileIcon fileName={file.name} />
      <span key={file.id}>{file.name}</span>
      <span
        className="cursor-pointer hover:bg-gray-200 duration-300 rounded-md p-1"
        onClick={(e) => handleCloseTab(e, file.id)}
      >
        <Close />
      </span>
    </div>
  );
}

export default OpennedFilesBarTab;
