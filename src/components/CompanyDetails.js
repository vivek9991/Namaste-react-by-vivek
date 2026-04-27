import React, { useEffect } from "react";
const CompanyDetails = (p) => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    // const timer = setInterval(() => {
    console.log("hi");
    // }, 1000);
    return () => {
      console.log("cleanup");
      // clearInterval(timer);
    };
  });
  return (
    <div>
      <p>Hey, this is about food villa {p.name}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
export default CompanyDetails;
