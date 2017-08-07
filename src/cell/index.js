module.exports = {
  $cell: true,
  $type: "div",
  id: "celljs",
  $init: function() {
    // some initialization
  },
  $components: [
    {
      $type: "a",
      $text: "Decrease",
      href: "#",
      onclick: e => {
        console.log("click");
        store.dispatch({ type: "DECRESE" });
      }
    },
    {
      $type: "span",
      $text: store.getState(),
      id: "cell-counter"
    }
  ]
};
