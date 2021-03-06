// ========================= EXAMPLE 1 =========================
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//     .then(function () {
//     console.log("Success 1");
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1");
//   })

//   .then(function () {
//     console.log("Success 4");
//   });

// ========================= EXAMPLE 2 =========================
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data);

    return job(false);
  })

  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);
  });

function fizzbuzz() {
    for (let i = 0; i < 100; i++) {
      if (i % 3 === 0 && i%5===0) {
       console.log(i + " = " + "fizzBuzz");
      } else
        if (i % 3 === 0) {
          console.log(i + " = " + "fizz");
        } else
          if(i % 5 === 0){
          console.log(i + " = " + "buzz");
          }else console.log(i)
    }
}
    fizzbuzz()
