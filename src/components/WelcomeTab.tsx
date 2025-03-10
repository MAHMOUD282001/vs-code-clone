import IconFile from "./IconFile";

interface IProps {}

function WelcomeTab({}: IProps) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <IconFile src="/vscode.svg" className="w-64 h-64" />
    </div>
  );
}

export default WelcomeTab;
