const cars = require("../data/cars");

const getAll = ({ id, make, model, year } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(cars);

    if (id) {
      result = result.filter(item => item.id === Number(id));
    }

    if (make) {
      result = result.filter(item => item.make === make);
    }

    if (model) {
      result = result.filter(item => item.model === model);
    }

    if (year) {
      result = result.filter(item => item.year === Number(year));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const car = cars.find(car => car.id === id);

    if (car) {
      resolve({ code: 200, data: car });
    } else {
      resolve({
        code: 404,
        data: { message: `No car found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
