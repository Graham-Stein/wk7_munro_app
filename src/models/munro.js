const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munro = function () {
  this.data = [];
};

Munro.prototype.getData = function () {
  const url = "https://munroapi.herokuapp.com/api/munros";
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
    .then((data) => {
      this.handleDataReady(data);
      PubSub.publish("Munro:hills-ready", this.data);
    })
    .catch((error) => {
      PubSub.publish("Murno:error", error);
    });
};

Munro.prototype.handleDataReady = function (hills) {
  this.data = hills.map((hill) => {
    return {
      name: hill.name,
      meaning: hill.meaning,
      height: hill.height
    };
  });
};

module.exports = Munro;
