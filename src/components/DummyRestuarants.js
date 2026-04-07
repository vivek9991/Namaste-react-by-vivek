const DummyRestuarants = () => {
  const dummyCount = 10;

  return (
    <>
      {Array.from({ length: dummyCount }).map((_, index) => (
        <div key={index} className="restuarantCard"></div>
      ))}
    </>
  );
};

export const EmptyList = () => {
  return <div className="noRestuarant">Please try searching different!!</div>;
};

export default DummyRestuarants;
