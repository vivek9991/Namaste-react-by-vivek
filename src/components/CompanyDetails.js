import { useEffect } from "react";
const CompanyDetails = (p) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hi");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>Hey, this is about food villa {p.name}</div>;
};
export default CompanyDetails;
