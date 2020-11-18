//////////////Solution 1//////////////////////
const onCalculateTip = (form) => {
  let tip = form[0].value;
  document.getElementById("result").innerHTML = `The tip on $${tip} is of $${
    tip * 0.2
  }`;
};

//////////////Solution 2//////////////////////
const changeColor = (color) => {
  document.querySelector(".question2").style.backgroundColor = color;
};

//////////////Solution 3//////////////////////
const onConvertFahrenheit2Celsius = () => {
  let fahrenheit = prompt("Enter Fahrenheit temperature");
  let celsius = (5 / 9) * (fahrenheit - 32);
  alert(
    "Fahrenheit temperature is: " +
      fahrenheit +
      "\nCelsius temperature is:" +
      celsius
  );
};

//////////////Solution 4//////////////////////
// This function is the solution of: https://stackoverflow.com/questions/20169217/how-to-write-isnumber-in-javascript
const isNumber = (number) => {
  return typeof number === "number" && isFinite(number);
};

const onCalculateGrade = (form) => {
  let grade = form[0].value;
  console.log(grade);
  if (isNumber(grade) || grade > 100 || grade < 0) {
    alert("Please, re-enter a valid number between 0 and 100");
    document.querySelector("#result4").innerHTML = "";
  } else {
    if (grade >= 88 && grade <= 100) {
      document.querySelector(
        "#result4"
      ).innerHTML = `Number grade ${grade} an concept letter: A`;
    } else if (grade >= 80 && grade < 88) {
      document.querySelector(
        "#result4"
      ).innerHTML = `Number grade ${grade} an concept letter: B`;
    } else if (grade >= 68 && grade < 80) {
      document.querySelector(
        "#result4"
      ).innerHTML = `Number grade ${grade} an concept letter: C`;
    } else if (grade >= 60 && grade < 68) {
      document.querySelector(
        "#result4"
      ).innerHTML = `Number grade ${grade} an concept letter: D`;
    } else {
      document.querySelector(
        "#result4"
      ).innerHTML = `Number grade ${grade} an concept letter: F`;
    }
  }
};

//////////////Solution 5//////////////////////
const onMouseOver = (obj) => {
  obj.src = "./yls.jpg";
};

const onMouseOut = (obj) => {
  obj.src = "./pls.jpg";
};

const onMouseUp = (obj) => {
  obj.style.transform = "scale(1)";
};

const onMouseDown = (obj) => {
  obj.style.transform = "scale(1.1)";
};

//////////////Solution 6//////////////////////
const onAssignNews = () => {
  const newsItems = [
    "Warman Community School just confirmed new cases of the new corona virus. The children are ok and most of the staff remain in quarentine",
    "Even though the number of cases reported is bad, the numbers are falling rapidly.",
    "Volunteers distribute more than food, they distribute an act of kindness and love.",
    "Fines are being issue, but the law is not clear about the criteria for doing so.",
    "Things are getting bad. Political problems are being put over the population interests and the pipeline should be open again soon.",
  ];

  let index = document.getElementsByName("headline")[0].selectedIndex;

  document.querySelector("#news").innerText = newsItems[index];
};

//////////////Solution 7//////////////////////
const CalculateRoots = (form) => {
  isValid = true;

  let a = form[0].value;
  let b = form[1].value;
  let c = form[2].value;

  errorMessage = "";

  if (!Number.isInteger(a) || a < -99 || a > 99 || a == 0) {
    isValid = false;
    errorMessage +=
      "a needs to be an integer between -99 and 99 and different than 0.";
  }

  if (!Number.isInteger(b) || b < -99 || b > 99) {
    isValid = false;
    errorMessage += " b needs to be an integer between -99 and 99.";
  }

  if (!Number.isInteger(c) || c < -99 || c > 99) {
    isValid = false;
    errorMessage += " c needs to be an integer between -99 and 99.";
  }

  if (isValid) {
    let x1 = ((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
    let x2 = ((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;

    if (Math.pow(b, 2) < 4 * a * c) {
      document.querySelector(
        "#soln"
      ).innerHTML = `Solution: x's roots are imaginary.`;
    } else if (Math.pow(b, 2) == 4 * a * c) {
      document.querySelector(
        "#soln"
      ).innerHTML = `Solution: x = ${x1} single root`;
    } else {
      document.querySelector(
        "#soln"
      ).innerHTML = `Solution: x = ${x1}, x = ${x2} `;
    }
  } else {
    document.querySelector("#soln").innerHTML = `Error!!!\n${errorMessage}`;
  }
};

const onCheck = (event, id) => {
  console.log(id);
  if (
    event.target.value > 99 ||
    event.target.value < -99 ||
    Number.isInteger(event.target.value)
  ) {
    document.querySelector(`#${id}`).style.borderColor = "red";
  } else {
    document.querySelector(`#${id}`).style.borderColor = "none";
  }
};
