/* eslint-disable react/prop-types */
const Button = ({ btnText }) => {
  return (
    <button className="py-2 px-4 text-center bg-blue-400 text-white rounded hover:bg-blue-500 transition w-full">
      {btnText}
    </button>
  );
};

export default Button;
