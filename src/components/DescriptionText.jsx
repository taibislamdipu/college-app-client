const DescriptionText = ({ className, children }) => {
  return (
    <p
      className={`${className} text-[13px] !leading-6 text-secondary md:text-lg md:!leading-7`}
    >
      {children}
    </p>
  );
};

export default DescriptionText;
