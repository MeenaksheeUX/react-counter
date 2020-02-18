import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomClicks: 1,
      roomShow: true,
      adultClicks: 2,
      adultShow: true,
      childClicks: 0,
      childShow: true
    };
  }

  // Room Counter Handler
  IncrementItemRoom = () => {
    this.setState({ roomClicks: this.state.roomClicks + 1 });
  };
  DecreaseItemRoom = () => {
    this.setState({ roomClicks: this.state.roomClicks - 1 });
  };
  ToggleClickRoom = () => {
    this.setState({ roomShow: !this.state.roomShow });
  };

  // Adult Counter Handler
  IncrementItemAdult = () => {
    this.setState({ adultClicks: this.state.adultClicks + 1 });
  };
  DecreaseItemAdult = () => {
    this.setState({ adultClicks: this.state.adultClicks - 1 });
  };
  ToggleClickAdult = () => {
    this.setState({ adultShow: !this.state.adultShow });
  };

  // Child Counter Handler
  IncrementItemChild = () => {
    this.setState({ childClicks: this.state.childClicks + 1 });
  };
  DecreaseItemChild = () => {
    this.setState({ childClicks: this.state.childClicks - 1 });
  };
  ToggleClickChild = () => {
    this.setState({ childShow: !this.state.childShow });
  };

  render() {
    return (
      <div>
        <h1>React Counter Increment and Decrement</h1>
        <table style={{ border: "1px solid black", align: "center", width: "100%" }}>
          <tbody>
            {/* Room */}
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>Rooms</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.IncrementItemRoom}>
                  Click to increment by 1
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.DecreaseItemRoom}>
                  Click to decrease by 1
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.ToggleClickRoom}>
                  {this.state.roomShow ? "Hide number" : "Show number"}
                </button>
                {this.state.roomShow ? <h2>{this.state.roomClicks}</h2> : ""}
              </td>
            </tr>

            {/* Adult */}
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>Adults</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.IncrementItemAdult}>
                  Click to increment by 1
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.DecreaseItemAdult}>
                  Click to decrease by 1
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.ToggleClickAdult}>
                  {this.state.adultShow ? "Hide number" : "Show number"}
                </button>
                {this.state.adultShow ? <h2>{this.state.adultClicks}</h2> : ""}
              </td>
            </tr>

            {/* Child */}
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>Childrens</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.IncrementItemChild}>
                  Click to increment by 1
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.DecreaseItemChild}>
                  Click to decrease by 1
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={this.ToggleClickChild}>
                  {this.state.childShow ? "Hide number" : "Show number"}
                </button>
                {this.state.childShow ? <h2>{this.state.childClicks}</h2> : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counter;
