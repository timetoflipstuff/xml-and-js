const someFunc = (...args) => new Promise((resolve, reject) => {
    args.length == 0 ? reject("No arguments passed!") : resolve(args);
});

someFunc().then(res => {
    console.log(res);
}).catch(e => {
    console.error("error in first call");
});

someFunc(3, 2, 1, "rush b").then(res => {
    console.log(res);
}).catch(e => {
    console.error("error in second call");
});