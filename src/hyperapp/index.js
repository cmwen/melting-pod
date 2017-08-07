import { app, h } from "hyperapp";
/** @jsx h */

let hyperAppInstance = app({
  state: store.getState(),
  view: (state, action) =>
    <div>
      <h1>
        {state}
      </h1>
      <button onclick={action.add}>+</button>
    </div>,
  // view: (state, action) => html`<div><h1>${state}</h1><button onclick=${action.add}>+</button></div>`,
  // view: state => hyperh("h1", null, state),
  root: document.getElementById("hyperapp"),
  actions: {
    add: state => {
      store.dispatch({ type: "INCRESE" });
      return store.getState();
    },
    //  add: state => console.log("aaa"),
    sub: state => state - 1,
    setData: (state, actions, data) => data
  },
  events: {
    init: (state, actions) => {
      console.log("init hyperapp");
      store.subscribe(_ => {
        console.log("update hyperapp");
        actions.setData(store.getState());
      });
    },
    customEvent: (state, actions) => {}
  }
});

console.log("hyperInstance", hyperAppInstance);
