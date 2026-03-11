import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("rootDiv"));
const vari = 10;
const Element = <h1>Element{vari}</h1>;
const Heading = function () {
  return (
    <div>
      Hello
      {Element}
      {setTimeout(() => {
        alert("hi");
      }, 5000)}
    </div>
  );
};
root.render(Heading());
