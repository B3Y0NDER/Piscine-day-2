let a = 5
let b = 6
let action = "add"

function calculator() {
  if (action === "add") {
    return addition()
  } else if (action === "sub") {
    return soustraction()
  }
}
function addition() {
  return a + b
}

function soustraction() {
  return a - b
}

// DO NOT TOUCH - This line will call calculator and display the result for you
if (
  typeof calculator === "function" &&
  typeof a === "number" &&
  typeof b === "number" &&
  typeof action === "string"
) {
  displayResult(calculator, a, b, action)
} else {
  console.error("Missing/bad variables or calculator function")
}
