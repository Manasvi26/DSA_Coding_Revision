const promise = createOrder();

promise
  .then((orderId) => console.log("orderId --->", orderId))
  .catch((err) => console.log("err -->", err));

function createOrder() {
  const pr = new Promise((resolve, reject) => {
    if (!validateOrder()) {
      const err = new Error("Order is not valid");
      reject(err);
    } else {
      const result = proceedToPayment();
      setTimeout(() => {
        resolve(result);
      }, 3000);
    }
  });
  return pr; //this is very important, to return. Otherwise you will get undefined.
}

function validateOrder() {
  return true;
}

function proceedToPayment(params) {
  const orderId = 12345;
  return orderId;
}
