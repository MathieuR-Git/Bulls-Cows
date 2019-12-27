import React from "react";
import "./game.scss";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      bulls: 0,
      cows: 0,
      attemptCounter: 0,
      response: "",
      victory: 0,
      history: [],
      highscore: null
    };
  }

  //Get initial value
  getValue = () => {
    let Tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let Tab2 = [];
    while (Tab2.length !== 4) {
      let number = Math.round(Math.random() * (Tab.length - 1));
      //
      Tab2.push(Tab[number]);
      //
      Tab.splice(number, 1);
      //
    }
    if (Tab2.length === 4) {
      this.setState({ value: "" + Tab2[0] + Tab2[1] + Tab2[2] + Tab2[3] });
    }
  };

  //Restart a game
  restart = () => {
    this.setState(
      {
        value: "",
        bulls: 0,
        cows: 0,
        attemptCounter: 0,
        response: "",
        history: []
      },
      this.getValue
    );
  };

  //Change your response
  handleChange = e => {
    this.setState({
      response: e.target.value
    });
  };

  //Verify your response (Add Bulls / Cows)
  verify = () => {
    if (this.state.response.length !== 4) {
      return;
    } else {
      let historyTab = this.state.history;
      historyTab.push(this.state.response);
      //
      this.setState({
        attemptCounter: this.state.attemptCounter + 1,
        bulls: 0,
        cows: 0,
        response: ""
      });

      //initialing variables
      let responseCompare = this.state.response.toString().split("");
      let valueCompare = this.state.value.toString().split("");
      let i;
      let j;
      let bullsNumber = 0;
      let cowsNumber = 0;

      //Double loop to compare each digit
      for (i = 0; i < responseCompare.length; i++) {
        for (j = 0; j < valueCompare.length; j++) {
          if (responseCompare[i] === valueCompare[j]) {
            if (i === j) {
              bullsNumber = bullsNumber + 1;
            } else {
              cowsNumber = cowsNumber + 1;
            }
            this.setState({ bulls: bullsNumber, cows: cowsNumber });
            if (bullsNumber === 4) {
              if (this.state.highscore === null) {
                this.setState({
                  highscore: this.state.attemptCounter
                });
              } else {
                if (this.state.attemptCounter < this.state.highscore) {
                  this.setState({ highscore: this.state.attemptCounter });
                }
              }

              this.setState({ victory: this.state.victory + 1 });
            }
          }
        }
      }
    }
  };

  render() {
    const {
      value,
      bulls,
      cows,
      response,
      attemptCounter,
      victory,
      history,
      highscore
    } = this.state;

    return (
      <div className="game">
        {bulls === 4 ? (
          <>
            <h1>Congratulations !</h1>
            <i className="fas fa-trophy fa-2x"> {victory}</i>
            <button onClick={this.restart}>Restart ?</button>
            <div className="pyro">
              <div className="before"></div>
              <div className="after"></div>
            </div>
          </>
        ) : (
          <>
            {!value ? (
              <button type="button" class="btn  btn-lg" onClick={this.getValue}>
                Start
              </button>
            ) : (
              <div className="row">
                <div className="col align-self-center">
                  <div className="text-center mb-2" title="Number of victory">
                    <i className="fas fa-trophy"> {victory}</i>
                  </div>
                  <br />
                  <div className="text-center mb-2">
                    <span>
                      Bulls : {bulls} | Cows : {cows}
                    </span>
                  </div>

                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      onChange={this.handleChange}
                      value={response}
                      placeholder="Your response"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn" onClick={this.verify}>
                      Validate
                    </button>
                  </div>
                </div>
                {history ? (
                  <div className="">
                    <ul>
                      {history.map((element, index) => {
                        return <li key={index}>{element}</li>;
                      })}
                    </ul>
                    <h6>Attempt : {attemptCounter}</h6>
                  </div>
                ) : (
                  <></>
                )}
                {highscore === null ? (
                  <></>
                ) : (
                  <div className="text-center" title="Number of victory">
                    <h6>High Score : {highscore} attemps !</h6>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Game;
