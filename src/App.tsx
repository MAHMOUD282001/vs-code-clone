import { useSelector } from "react-redux";
import "./App.css";
import { fileTree } from "./components/fileTree";
import LeftPanel from "./components/LeftPanel";
import ResizablePanel from "./components/ResizablePanel";
import RightPanel from "./components/RightPanel";
import { RootState } from "./store/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);

  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel
          leftPanel={
            <div className="mt-3">
              <LeftPanel fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length > 0 ? <RightPanel /> : <WelcomeTab />}
          showLeftPanel={true}
        />
      </div>
    </div>
  );
}

export default App;
