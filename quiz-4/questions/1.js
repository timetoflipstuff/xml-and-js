/**
 * Function to get array of all states.
 * - with no duplicates
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getAllStates = data => new Promise(res => {
    res([...new Set(data.flatMap(v => v.address.map(a => a.state)))]);
});

module.exports = getAllStates;