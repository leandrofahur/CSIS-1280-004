//////////////Solution 1//////////////////////

function processEntries(form) {
  let isValid = true;

  let subtotal = parseInt(form[0].value);
  let taxRate = parseInt(form[1].value);

  if (subtotal <= 0 || subtotal >= 10000) {
    alert("Subtotal must be > 0 and < 10000");
    isValid = false;
  }

  if (taxRate <= 0 || taxRate >= 12) {
    alert("Tax Rate must be > 0 and < 12");
    isValid = false;
  }

  if (isValid) {
    let salesTax = subtotal * taxRate;
    let total = subtotal + salesTax;

    // console.log(subtotal);
    // console.log(taxRate);
    // console.log(salesTax);
    // console.log(total);

    document.getElementById("sales_tax").value = `$${salesTax}`;
    document.getElementById("total").value = `$${total}`;
    document.querySelector(
      "#result"
    ).innerHTML = `Sale Tax: ${salesTax} and Total: ${total}`;
    document.getElementById("subtotal").focus();
  }
}
function clearEntries(form) {
  form[0].value = "";
  form[1].value = "";
  form[2].value = "";
  form[3].value = "";
  document.querySelector("#result").innerHTML = ``;
}

//////////////Solution 2//////////////////////

function styledContent() {
  document.querySelector("#qn2a").style.backgroundColor = "red";
  document.querySelector("#qn2a").style.color = "yellow";
  document.querySelector("#qn2a").style.fontSize = "32pt";
  document.querySelector("#qn2a").style.fontStyle = "bold";

  document.querySelector("#qn2b").style.backgroundColor = "white";
  document.querySelector("#qn2b").style.color = "purple";
  document.querySelector("#qn2b").style.fontSize = "45pt";
  document.querySelector("#qn2b").style.fontStyle = "italic";
}

function onMouseOver(obj) {
  obj.style.textDecoration = "underline";
  obj.style.color = "red";
}

function onMouseOut(obj) {
  obj.style.textDecoration = "none";
  obj.style.color = "yellow";
}

//////////////Solution 3//////////////////////

function displayResults() {
  const scores = [85, 77, 56, 99, 87, 89, 67, 70];

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  let average = sum / scores.length;

  document.querySelector(
    "#averageScore"
  ).innerHTML = `The average score is: ${average}`;

  document.querySelector(
    "#highestScore"
  ).innerHTML = `The average score is: ${Math.max(...scores)}`;

  scores.splice(2, 0, 90);
  scores.splice(3, 0, 95);

  const newScores = scores.map((element) => {
    return `${element}`;
  });

  for (let i = 0; i < newScores.length; i++) {
    document.querySelector("#newScores").innerHTML += `${newScores[i]} <br/ >`;
  }
}
