import React from "react";

interface CounterProps {
  ignoreProp: number;
  seed: number;
}

interface CounterState {
  counter: number;
  seed: number;
}

export default class Counter extends React.Component<
  CounterProps,
  CounterState
> {
  constructor(props: any) {
    console.log("Constructor");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  static getDerivedStateFromProps(props: CounterProps, state: CounterState) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }
  //state: { counter: number };

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount(): void {
    console.log("Component did mount");
    console.log("---------------------");
  }

  shouldComponentUpdate(
    nextProps: Readonly<CounterProps>,
    nextState: Readonly<CounterState>,
    nextContext: any
  ): boolean {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      return false;
    }
    return true;
  }

  componentDidUpdate(
    prevProps: any,
    prevState: CounterState,
    snapshot?: any
  ): void {
    console.log("Component did update");
    console.log("---------------------");
  }

  componentWillUnmount(): void {
    console.log("Component will unmount");
    console.log("---------------------");
  }

  render(): React.ReactNode {
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }
}
