const mypromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Complete");
    resolve();
  }, 1000);
});

mypromise.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 3000);
}).then(function () {
  console.log("Async log 2");
});

const prom3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ch", email: "chai@example" });
  }, 1000);
});
prom3.then(function (user) {
  console.log(user);
});


async function consume() {
    const response = await prom3
    console.log(response);
}

consume() 