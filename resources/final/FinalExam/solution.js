//Answer 1
const lname = document.querySelector("#lname");
const fname = document.querySelector("#fname");

const thin = document.querySelector("#thin");
const thick = document.querySelector("#thick");
const sicilian = document.querySelector("#sicilian");
const bagels = document.querySelector("#bagels");

const pepperoni = document.querySelector("#pepperoni");
const sausage = document.querySelector("#sausage");
const greenpep = document.querySelector("#greenpep");
const onion = document.querySelector("#onion");
const xcheese = document.querySelector("#xcheese");

const orderInfo = document.querySelector("#orderInfo");

const placeOrder = document.querySelector("#placeorder");

placeOrder.addEventListener("click", () => {
  if (lname.value === "" || fname.value === "") {
    alert("Please enter the first and last name.");
  } else {
    let totalPrice = 0;

    if (thin.checked) {
      totalPrice += parseInt(thin.value);
    } else if (thick.checked) {
      totalPrice += parseInt(thick.value);
    } else if (sicilian.checked) {
      totalPrice += parseInt(sicilian.value);
    } else {
      totalPrice += parseInt(bagels.value);
    }

    if (pepperoni.checked) {
      totalPrice += parseInt(pepperoni.value);
    } else if (sausage.checked) {
      totalPrice += parseInt(sausage.value);
    } else if (greenpep.checked) {
      totalPrice += parseInt(greenpep.value);
    } else if (onion.checked) {
      totalPrice += parseInt(onion.value);
    } else {
      totalPrice += parseInt(xcheese.value);
    }

    document.querySelector("#order").innerHTML = `Thank you ${lname.value} ${
      fname.value
    } for placing your order with us. Your Order Details are: <br> Total Price: $${parseInt(
      totalPrice
    )} <br> Toppings are:`;
  }
});

//Answer 2

//Answer 3
