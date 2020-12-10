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
    let detail = "";

    if (thin.checked) {
      totalPrice += parseInt(thin.value);
      detail += "thin";
    } else if (thick.checked) {
      totalPrice += parseInt(thick.value);
      detail += "thick";
    } else if (sicilian.checked) {
      totalPrice += parseInt(sicilian.value);
      detail += "sicilian";
    } else {
      totalPrice += parseInt(bagels.value);
      detail += "bagels";
    }

    if (pepperoni.checked) {
      totalPrice += parseInt(pepperoni.value);
      detail += " pepperoni";
    }
    if (sausage.checked) {
      totalPrice += parseInt(sausage.value);
      detail += " sausage";
    }
    if (greenpep.checked) {
      totalPrice += parseInt(greenpep.value);
      detail += " green peppers";
    }
    if (onion.checked) {
      totalPrice += parseInt(onion.value);
      detail += " onion";
    }
    if (xcheese.checked) {
      totalPrice += parseInt(xcheese.value);
      detail += " xcheese";
    }

    document.querySelector("#order").innerHTML = `Thank you ${lname.value} ${
      fname.value
    } for placing your order with us. Your Order Details are: <br> Total Price: $${parseInt(
      totalPrice
    )} <br> Toppings are: ${detail}`;
  }
});

//Answer 2
const addItem = document.querySelector("#additem");
const removeitem = document.querySelector("#removeitem");
const item = document.querySelector("#item");
const productList = [""];
const minutes = document.querySelector("#minutes");
const amount = document.querySelector("#amount");

addItem.addEventListener("click", () => {
  if (item.value === "" || productList.includes(item.value)) {
    alert("Please insert a valid item");
  } else {
    productList.push(item.value);
    const option = document.createElement("option");
    option.value = item.value;
    option.innerHTML = item.value;
    document.querySelector("#selectedItems").appendChild(option);
  }
});

removeitem.addEventListener("click", () => {
  if (productList.length === 0) {
    alert("OPS! There is no items to delete");
  } else {
    let index = document.getElementsByName("group")[0].selectedIndex;
    let box = document.querySelector("#selectedItems");
    for (var i = 0; i <= productList.length; i++) {
      if (i === index) {
        box.remove(i, 1);
      }
    }
    productList.splice(index, 1);
  }
});

const onBlur = () => {
  const size = productList.length;
  if (size === 1) {
    amount.value = size * minutes.value;
  } else if (size === 2) {
    amount.value = size * minutes.value;
  } else if (size === 3) {
    amount.value = size * minutes.value;
  } else {
    amount.value = size * minutes.value;
  }
};

//Answer 3
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventListener("click", () => {
  console.log("Start");
});

stop.addEventListener("click", () => {
  console.log("stop");
});
