/**
 * Function to get vehicle object by VIN
 * - should return a promise
 * - should reject if no VIN passed
 *   error message: "No VIN provided"
 * - should reject if no matches found
 *   error message: "No items matching ${vin}"
 * @param {*} data - see shape in ../../data.example.json
 * @returns vehicle object
 */
const getByVIN = (data, vin) => new Promise((res, rej) => {
    if (!vin || vin.length == 0) rej("No VIN provided");
    data.forEach(v => {
        v.vehicle.forEach(v => {
            if (v.vin === vin) res(v);
        });
    });
    rej(`No items matching ${vin}`);
});

module.exports = getByVIN;
