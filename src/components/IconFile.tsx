interface IProps {
  src: string;
  className?: string;
}

function IconFile({ src, className = "w-5 h-5" }: IProps) {
  return <img src={src} alt="Icon Image" className={className} />;
}

export default IconFile;
