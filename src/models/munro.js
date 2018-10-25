const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munro = function () {
  this.data = null;
};

Munro.prototype.getData = function () {
  const url = "https://munroapi.herokuapp.com/api/munros";
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
    .then((data) => {
      this.data = data
      Pubsub.publish("Munro:hills-ready", thils.data);
    });
    .catch((error) => {
      PubSub.publish("Murno:error", error);
    });
};

module.exports = Munro;
