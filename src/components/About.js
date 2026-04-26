import { Outlet } from "react-router-dom";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent mount");
  }

  componentDidUpdate() {
    console.log("parent updated");
  }

  componentWillUnmount() {
    console.log("parent about to unmonut");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <p>About Food villa</p>
        <Outlet />
      </div>
    );
  }
}
export default About;
