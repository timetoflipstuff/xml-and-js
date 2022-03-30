const timeout = ms => new Promise(resolve => setTimeout(() => { resolve(); }, ms));
const interval = ms => new Promise(resolve => setInterval(() => { resolve(); }, ms));

console.log("called");
interval(3000).then(() => {
    console.log("called again");
});