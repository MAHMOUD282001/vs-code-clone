import { svgStyle } from "../../styles";

interface IProps {}

function File({}: IProps) {
  return (
    <svg
      {...svgStyle}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
        fill="#4A4A4A"
      />
    </svg>
  );
}

export default File;
