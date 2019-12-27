import React, { Component } from "react";

export default class HowToPlay extends Component {
  render() {
    return (
      <article>
        <h5>How to play</h5>
        <p>Write a 4-digit secret number between 0123 and 9876.</p>
        <p>
          The digits must be all different. If the matching digits are in their
          right positions, they are "bulls", if in different positions, they are
          "cows".
        </p>
        <span>Example: </span>
        <ul>
          <li>Secret number: 4271</li>
          <li>Your try: 1234</li>
        </ul>
        <p>
          Answer: 1 bull and 2 cows. (The bull is "2", the cows are "4" and
          "1".)
        </p>
        <p>If you have 4 bulls, you win.</p>
      </article>
    );
  }
}
