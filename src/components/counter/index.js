import { h, Component } from "preact";

export default class Counter extends Component {
    state = { count: store.getState()};

  constructor() {
    super();
    console.log("preact", this.state);
    store.subscribe(_ => {
        console.log("update preact");
        this.setState({count: store.getState()});
      });
}


  render(props, {count}) {
    return (
        <b>{count}</b>
    );
  }
}
