const { getAll } = require("./api/cars.js");

const form = document.querySelector('form');

const renderTable = data => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  const rows = source.reduce(
    (acc, { id, make, model, year }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${make}</td><td>${model}</td><td>${year}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = event => {
  event.preventDefault();

  const id = event.target.id.value;
  const make = event.target.make.value;
  const model = event.target.model.value;
  const year = event.target.year.value;

  console.log(id, make, model, year);

  getAll({id: id, make: make, model: model, year: year}).then(({ data }) => renderTable(data));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

form.onsubmit = onSubmit;
form.onreset = onReset;