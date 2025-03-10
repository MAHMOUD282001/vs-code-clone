import { useSelector } from "react-redux";
import { IFile } from "../interfaces";
import OpennedFilesBarTab from "./OpennedFilesBarTab";
import { RootState } from "../store/store";
import { useState } from "react";
import CloseMenu from "./ui/CloseMenu";

interface IProps {}

function OpennedFilesBar({}: IProps) {
  const [showCloseMenu, setShowCloseMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const { openedFiles } = useSelector((state: RootState) => state.fileTree);

  const handleShowCloseMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCloseMenu(true);
    setMenuPosition({ top: e.clientY, left: e.clientX });
  };

  return (
    <>
      <div
        className="flex gap-2 h-14 border-b border-gray-300 w-full"
        onContextMenu={(e) => handleShowCloseMenu(e)}
      >
        {openedFiles.map((file: IFile) => (
          <OpennedFilesBarTab key={file.id} file={file} />
        ))}
      </div>

      {showCloseMenu && <CloseMenu position={menuPosition} setShowCloseMenu={setShowCloseMenu} />}
    </>
  );
}

export default OpennedFilesBar;
