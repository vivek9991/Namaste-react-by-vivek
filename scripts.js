{
  /* <div id="parent">
  <div id="child">
    <h1>Hellow world</h1>
    <h2> Vivek </h2>
  </div>
</div>; */
}

const h1 = React.createElement("h1", {}, "Hellow world");
const h2 = React.createElement("h2", {}, "Vivek");
const childDiv = React.createElement("div", { id: "child" }, [h1, h2]);
const parentDiv = React.createElement("div", { id: "parent" }, childDiv);
const root = ReactDOM.createRoot(document.getElementById("rootDiv"));
root.render(parentDiv);

async function fn() {
  const response = await fetch("www.google.com");
  const data = await response.json();
  console.log(data);
}

let debouncedFn = throttle(fn, 500);

function throttle(fn, time) {
  let call = true;
  return () => {
    if (call) {
      call = false;
      setTimeout(() => {
        call = true;
        fn();
      }, time);
    }
  };
}
