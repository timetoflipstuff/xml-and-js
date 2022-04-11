/**
 * Function to get username and total age of user's vehicles
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of objects:
 * [{
 *  userName - string,
 *  totalAgent - number
 * }]
 */
const getUserNameAndVehicleAge = data => new Promise(res => {
    const result = data.map(v => {
        return {
            userName: v.userName,
            totalAge: v.vehicle.reduce((a, c) => a + c.age, 0)
        }
    });
    res(result);
});

module.exports = getUserNameAndVehicleAge;
