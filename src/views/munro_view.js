
const MunroView = function(container, munro) {
  this.container = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  const munroContainer = document.createElement("div");
  munroContainer.classList.add("munro");

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const detailsList = this.createDetailsList();
  munroContainer.appendChild(detailsList);

  this.container.appendChild(munroContainer);
};

MunroView.prototype.createMunroHeading = function() {
  const name = document.createElement("h2");
  name.classList.add("munro-name")
  name.textContent = this.munro.name;
  return name;
};

MunroView.prototype.createDetailsList = function() {
  const detailsList = document.createElement('ul');
  detailsList.classList.add('details');
  this.populateList(detailsList);
  return detailsList;
}

MunroView.prototype.populateList = function(list) {
  const meaningItem = document.createElement('li');
  meaningItem.textContent = `Meaning: ${ this.munro.meaning } `;
  list.appendChild(meaningItem);

  const heightItem = document.createElement('li');
  heightItem.textContent = `Elevation: ${ this.munro.height } `;
  list.appendChild(heightItem);
}



module.exports = MunroView;
