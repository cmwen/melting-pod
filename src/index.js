// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from "preact";
import "./style";
import { app, h as hyperh} from "hyperapp";
/** @jsx h */
const hyperx = require("hyperx")
const html = hyperx(hyperh)

let root;
function init() {
  let App = require("./components/app").default;
  root = render(<App />, document.getElementById("preact"), root);

//   console.log(<h1></h1>);
//   app({
//     state: store.getState(),
//     // view: (state, action) => (<div><h1>{state}</h1><button onclick={action.add}>+</button></div>),
//     view: (state, action) => html`<div><h1>${state}</h1><button onclick=${action.add}>+</button></div>`,
// 	// view: state => hyperh("h1", null, state),
//     root: document.getElementById("hyperapp"),
// 	 actions: {
//    	 add: state => {store.dispatch({type: 'INCRESE'}); return store.getState(); },
//    	//  add: state => console.log("aaa"),
//     	sub: state => state - 1
//   	}
//   });
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV === "production") {
  require("./pwa");
}

// in development, set up HMR:
if (module.hot) {
  //require('preact/devtools');   // turn this on if you want to enable React DevTools!
  module.hot.accept("./components/app", () => requestAnimationFrame(init));
}

init();
