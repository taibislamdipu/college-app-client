const Title = ({ title }) => {
  return (
    <h2 className="text-4xl leading-tight border-b py-2 border-primary">
      <span className="border-b-4 py-1 border-primary">{title}</span>
    </h2>
  );
};

export default Title;
