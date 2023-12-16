import { AiFillCaretRight } from "react-icons/ai";

/* eslint-disable react/prop-types */
const Button = ({ btnText }) => {
  return (
    <button className="py-3 px-4 text-center flex items-center justify-center gap-2 bg-primary text-white rounded font-medium hover:bg-white hover:text-primary transition w-full custom-box-shadow">
      {btnText}
      <AiFillCaretRight />
    </button>
  );
};

export default Button;
