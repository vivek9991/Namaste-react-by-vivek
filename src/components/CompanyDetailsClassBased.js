import React from "react";
class CompanyDetailsClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      count2: 20,
      userData: {
        login: "dummy name",
        type: "dummy",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    console.log("child componentDidMount before data");
    const response = await fetch("https://api.github.com/users/vivek9991");
    const data = await response.json();
    this.setState({
      userData: data,
    });
    console.log(data);
    console.log("child componentDidMount data received");
  }

  componentDidUpdate() {
    console.log("child updated");
  }

  render() {
    return (
      <div>
        {console.log("child render")}
        <div>Hey, this is about food villa class based.</div>
        <p>{this.props.name}</p>
        <p>{this.state.count}</p>
        <p>{this.state.count2}</p>
        <button
          onClick={() =>
            this.setState({
              count: 1,
              count2: this.state.count + 1,
            })
          }
        >
          Btn
        </button>
        <div>{this.state.userData.login}</div>
        <div>{this.state.userData.type}</div>
        <img src={this.state.userData.avatar_url} alt="user_img" />
      </div>
    );
  }
}
export default CompanyDetailsClassBased;
