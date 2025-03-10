import { useState } from "react";
import { IFile } from "../interfaces";
import Right from "./SVG/Right";
import Bottom from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFile,
  setOpenedFiles,
} from "../store/features/fileTreeSlice";
import { isFileExists } from "../utils/functions";
import { RootState } from "../store/store";

interface IProps {
  fileTree: IFile;
}

function LeftPanel({ fileTree }: IProps) {
  const { id, name, isFolder, children, content } = fileTree;

  const [isOpen, setIsOpen] = useState(false);
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  const toggle = () => setIsOpen((prev) => !prev);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setClickedFile({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
    const isExists = isFileExists(openedFiles, id);
    if (isExists) return;
    dispatch(setOpenedFiles([...openedFiles, fileTree]));
  };

  return (
    <div className="ml-5">
      <div className="flex items-center gap-2 mb-1.5 cursor-pointer">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center gap-2">
            {isOpen ? <Bottom /> : <Right />}
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span>{name}</span>
          </div>
        ) : (
          <div onClick={handleClick} className="flex items-center gap-2">
            <RenderFileIcon fileName={name} />
            <span>{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((item, index) => (
          <LeftPanel fileTree={item} key={index} />
        ))}
    </div>
  );
}

export default LeftPanel;
