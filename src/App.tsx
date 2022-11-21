import React from "react";
import "./App.css";
import Counter from "./Counter";

interface AppState {
  mount: boolean;
  ignoreProp: number;
  seed: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };

    this.mountCounter = this.mountCounter.bind(this);
    this.unMountCounter = this.unMountCounter.bind(this);
    this.ignoreProp = this.ignoreProp.bind(this);
    this.seedGenerator = this.seedGenerator.bind(this);
  }

  mountCounter = () => {
    this.setState({ mount: true });
  };

  unMountCounter = () => {
    this.setState({ mount: false });
  };

  ignoreProp = () => {
    this.setState({ ignoreProp: Math.random() });
  };

  seedGenerator = () => {
    this.setState({ seed: Number.parseInt((Math.random() * 100).toString()) });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <div
          style={{
            marginTop: "2em",
            marginBottom: "2em",
          }}
        >
          <button onClick={this.mountCounter} disabled={this.state.mount}>
            Mount Counter
          </button>
          <button onClick={this.unMountCounter} disabled={!this.state.mount}>
            Unmount Counter
          </button>
          <button onClick={this.ignoreProp}>Ignore prop</button>
          <button onClick={this.seedGenerator}>Generate seed</button>
        </div>
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}

export default App;
