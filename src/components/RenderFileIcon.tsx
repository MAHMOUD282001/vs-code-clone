import { extentionFilePaths } from "../constants";
import IconFile from "./IconFile";
import File from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

function RenderFileIcon({ fileName, isFolder, isOpen }: IProps) {
  const extension = fileName.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extentionFilePaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extentionFilePaths[extension]}-open.svg`
        : `${extentionFilePaths[extension]}.svg`
      : `${extentionFilePaths[extension]}.svg`;

    return <IconFile src={iconPath} />;
  }

  if (isFolder && isOpen)
    return <IconFile src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconFile src="/icons/folder-default.svg" />;

  return <File />;
}

export default RenderFileIcon;
