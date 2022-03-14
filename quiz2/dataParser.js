const fs = require("fs");
const DATA = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

// Function to get the list of all active accts
const getActiveAccounts = () => DATA.filter(a => a.isActive);

// Function to get the highest balance string
const getHighestBalance = () => {
    const numberify = string => parseFloat(string.replace(/[$,]+/g,""));
    return DATA.reduce((prev, cur) => {
        if (numberify(cur.balance) > numberify(prev)) return cur.balance;
        return prev;
    }, "0");
}

// Function to get friends of all clients
const getAllFriends = () => DATA.flatMap(a => a.friends.map(f => f.name));

// Function to return comma separated account holder names
const getAccountHolderNames = () => DATA.map(a => a.name.split(` `)[0]).join(`, `);

console.log("Active accounts:");
console.log(getActiveAccounts());
console.log("Highest balance:");
console.log(getHighestBalance());
console.log("Friends list:");
console.log(getAllFriends());
console.log("Account holders:");
console.log(getAccountHolderNames());