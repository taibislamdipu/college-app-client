const Image = ({ src, className }) => {
  return (
    <img className={`${className}`} src={src} alt="pic" draggable={false} />
  );
};

export default Image;
