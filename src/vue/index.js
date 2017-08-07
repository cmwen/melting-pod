let vue = new Vue({
  el: "#vue",
  data: {
    message: "test"
  },
  methods: {
    messageClick : (event) => { console.log("vue click", event);store.dispatch({ type: "RESET" });}
  },
  template:'<div  id="vue" v-on:click="messageClick">{{message}}</div>'
});

store.subscribe(_ => {
  console.log("update vue");
  vue.message = store.getState();
});
