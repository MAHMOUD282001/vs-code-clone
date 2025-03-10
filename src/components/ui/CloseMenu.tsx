import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFiles } from "../../store/features/fileTreeSlice";
import { RootState } from "../../store/store";

interface IProps {
  setShowCloseMenu: (showCloseMenu: boolean) => void;
  position: {
    top: number;
    left: number;
  };
}

function CloseMenu({ position: { top, left }, setShowCloseMenu }: IProps) {
  const closeMenuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.fileTree
  );

  const closeAllTabs = () => {
    dispatch(setOpenedFiles([]));
    setShowCloseMenu(false);
  };

  const handleCloseMenu = () => {
    const filteredTabs = openedFiles.filter(
      (file) => file.id !== tabIdToRemove
    );

    dispatch(setOpenedFiles(filteredTabs));
    setShowCloseMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeMenuRef.current &&
        !closeMenuRef.current.contains(event.target as Node)
      ) {
        setShowCloseMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowCloseMenu]);

  return (
    <div ref={closeMenuRef}>
      <ul
        className="w-fit bg-[#2b2b2b] rounded-md text-white absolute z-10 p-2 cursor-pointer"
        style={{ top: top, left: left }}
      >
        <li
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-md"
        >
          Close Tab
        </li>
        <li
          onClick={closeAllTabs}
          className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-md"
        >
          Close All Tabs
        </li>
      </ul>
    </div>
  );
}

export default CloseMenu;
