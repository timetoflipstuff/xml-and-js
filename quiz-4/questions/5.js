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
const getEmailDomains = data => new Promise(res => {
    res([...new Set(data.map(v => v.email.split(`@`)[1]))]);
});

module.exports = getEmailDomains;
