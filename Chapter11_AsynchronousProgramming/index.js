// callback to approach asynchronouse
setTimeout(() => console.log("Tick"), 1000);
let fifteen = Promise.resolve(15);
console.log(14);
fifteen.then(value => console.log(`GOT ${value}`));

// Promise constructor resolve
// function storage(nest, name) {
//     return new Promise(resolve => {
//         nest.readStorage(name, result => resolve(result));
//     })
// }
// storage(bigOak, "enemies").then(value => console.log(value));

// Promise constructor reject
new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1", value))
    .catch(reason => {
        console.log("Caught failure " + reason);
        return "nothing";
    })
    .then(value => console.log("Handler 2", value))
// → Caught failure Error: Fail
// → Handler 2 nothing


// Multiple promise
let promiser = new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 3000); // (*)

}).then(function (result) { // (**)

    alert(result); // 1
    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 4000);
    });

}).then(function (result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function (result) {

    alert(result); // 4
    return result * 2;

});

promiser.then(result => console.log(result));