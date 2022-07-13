
const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve();
    }, 2000);
});


promise.then(() => {
    console.log(`resuelto`);
})


console.log("Voy antes");
