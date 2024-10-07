const weight = document.getElementById("weight")
const height = document.getElementById("height")
const result = document.getElementById("result")
const btn = document.getElementById("btn")

function calculateBMI() {
  const weightValue = parseFloat(weight.value)
  const heightValue = parseFloat(height.value)
  if (isNaN(weightValue) || isNaN(heightValue)) {
    result.textContent = "Invalid input values"
    return
  }
  const bmi = weightValue / (heightValue ** 2);
  return bmi.toFixed(2) // Return the result with 2 decimal places
}

btn.addEventListener("click", function() {
  result.textContent = calculateBMI() // Assign the returned value to result.textContent

    // Clear the input fields
    weight.value = ""
    height.value = ""
})