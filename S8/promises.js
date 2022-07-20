const name = "pepe";

const promise = new Promise((resolve, reject) => {
  if (name === "juan") {
    setTimeout(function () {
      resolve();
    }, 2000);
  } else {
    reject();
  }
});

promise
  .then(() => {
    console.log(`resuelto`);
  })
  .catch(() => {
    console.log(`resuelto`);
  });

console.log("Voy antes");
