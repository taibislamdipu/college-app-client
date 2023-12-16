/* eslint-disable react/prop-types */
const Button = ({ btnText }) => {
  return (
    <button className="py-2 px-4 text-center bg-secondary text-white rounded font-medium hover:bg-[#059c3c] transition w-full">
      {btnText}
    </button>
  );
};

export default Button;
