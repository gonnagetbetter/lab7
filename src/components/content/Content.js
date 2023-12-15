import React, { Component } from "react";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstElementClass: " ",
      secondElementClass: " ",
    };
  }

  swapFirst = () => {
    this.setState((prevState) => ({
      firstElementClass: prevState.firstElementClass === " " ? "fAfter" : " "
    }));
  };
  swapSecond = () => {
    this.setState((prevState) => ({
    secondElementClass: prevState.secondElementClass === " " ? "sAfter" : " "
}));
  }

  render() {
    const { firstElementClass, secondElementClass } = this.state;
    return (
      <div>
        <h3>Hobbies</h3>
        <ul>
          <li>GYM</li>
          <li
            className={firstElementClass}
            id="first-element"
            onClick={this.swapFirst}
          >
            Basketball
          </li>
          <li
            className={secondElementClass}
            id="second-element"
            onClick={this.swapSecond}
          >
            Programming
          </li>
          <li>Guns</li>
        </ul>
        <h3>Favourite anime</h3>
        <ol>
          <li>Thast time i was reincarnated as a slime</li>
          <li>Bleach</li>
          <li>Legend about Wox Machina</li>
        </ol>
        <p>
          Odessa is a major port city located in the south of Ukraine, situated
          on the northwestern coast of the Black Sea.
          <br />
          It is a significant cultural, economic, and tourist hub known for its
          vibrant maritime history, diverse architecture,
          <br />
          and unique cultural blend of various ethnic and religious groups.
          Odessa is renowned for its beautiful beaches,
          <br />
          historic landmarks like the Potemkin Stairs, and a lively arts and
          entertainment scene. The city has a rich multicultural heritage,
          <br />
          reflecting influences from Ukrainian, Jewish, Greek, and other
          communities.
        </p>
      </div>
    );
  }
}

export default Content;
