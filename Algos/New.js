let promise1 = new Promise((res, rej) => res("Promise 1 resolved"));

let promise2 = new Promise((res, rej) => res("Promise 2 resolved"));

let promise3 = new Promise((res, rej) => rej("Promise 2 rejected"));

let promiseArr = [promise1, promise2, promise3];
function promisesResolver(promArr) {
  let result = [];

  promArr.forEach((promise, index) => {
    promise
      .then(
        (val) =>
          (result[index] = {
            staus: "fulfilled",
            reason: "Success",
            value: val,
          })
      )
      .catch(
        (val) =>
          (result[index] = {
            staus: "rejected",
            reason: "Fail",
            value: val,
          })
      );
  });

  if (result.length === promArr.length) return result;
}
