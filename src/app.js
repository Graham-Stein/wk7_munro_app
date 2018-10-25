const Munro = require("./models/munro.js");
const MunroListView = require("./views/munro_list_view.js");


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munroListContainer = document.querySelector("#munro-list")
  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();

  const test_hill = new Munro();
  test_hill.getData();

});
