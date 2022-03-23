const people = require("../data/people");

const getAll = ({id, firstName, lastName, email, gender, ipAddress}) =>
    new Promise((resolve) => {
        const isFiltered = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());

        let result = Array.from(people);

        if (id) result = result.filter(item => item.id == id);
        if (firstName) result = result.filter(item => isFiltered(item.first_name, firstName));
        if (lastName) result = result.filter(item => isFiltered(item.last_name, lastName));
        if (email) result = result.filter(item => isFiltered(item.email, email));
        if (gender) result = result.filter(item => isFiltered(item.last_name, gender));
        if (ipAddress) result = result.filter(item => isFiltered(item.ip_address, ipAddress));

        resolve({ code: 200, data: JSON.stringify(result) });
    });

const getById = (id) =>
    new Promise(resolve => {
        console.log(people[0]);
        const person = people.find(entry => entry.id == id);

        if (person) {
            resolve({ code: 200, data: person });
        } else {
            resolve({
                code: 404,
                data: { message: `No person found for id ${id}` },
            });
        }
    });

module.exports = {
    getAll,
    getById,
};
