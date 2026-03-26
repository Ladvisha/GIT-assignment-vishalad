//1: Student Report System
//Calculate average marks for each student
//Add a new property average using map()
//Assign result:
//• Avg ≥ 75 → "Distinction"
//• Avg ≥ 50 → "Pass"
//• Else → "Fail"

let students = [
  { name: "Vishwa", marks: [80, 70, 90] },
  { name: "Riya", marks: [50, 60, 55] },
  { name: "John", marks: [30, 40, 20] }]

let result = students.map(student => {
    let total = student.marks.reduce((sum, m) => sum + m, 0)
    let avg = total / student.marks.length
    let grade
  if (avg >= 75) grade = "Distinction"
  else if (avg >= 50) grade = "Pass"
  else grade = "Fail"
    return {
    ...student,
    average: avg,
    result: grade
  }
})
console.log("=== 1: Student Report System ===")
console.log(result)

//2: Shopping Cart Analyzer
//Calculate total bill
//Return:
//• Total amount
//• Total quantity of items
//Use rest operator to accept multiple items

function cartAnalyzer(...items) {
  let totalAmount = 0
  let totalQuantity = 0
    items.forEach(item => {
      totalAmount += item.price * item.quantity
      totalQuantity += item.quantity
  })
  return { totalAmount, totalQuantity }
}
console.log("\n=== 2: Shopping Cart Analyzer ===")
console.log(cartAnalyzer(
  { price: 100, quantity: 2 },
  { price: 50, quantity: 3 }
))

//3: User Profile Updater
//Create a function to:
//• Update city
//• Add new property profession
//Use spread operator
//Do NOT modify original object

let user = {
  name: "Suresh",
  city: "Mumbai"
};
function updateProfile(user, newCity, profession) {
    return {
    ...user,
    city: newCity,
    profession: profession
  }
}
console.log("\n=== 3: User Profile Updater ===")
console.log(updateProfile(user, "Bangalore", "Developer"))
console.log("Original user:", user)

//4: Product Filter & Transform
//Filter products with price > 1000
//Use map() to:
//• Add discountedPrice (10% off)
//Return new array

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 20000 }]

let filtered = products.filter(p => p.price > 1000)

let resultProducts = filtered.map(p => {
  return {
    ...p,
    discountedPrice: p.price * 0.9
  }
})
console.log("\n=== 4: Product Filter & Transform ===")
console.log(resultProducts)


//5: Dynamic Number Processor
//Separate:
//• Even numbers
//• Odd numbers
//Also calculate:
//• Sum of even numbers
//• Sum of odd numbers

let numbers = [1, 2, 3, 4, 5, 6]
let evenNumbers = numbers.filter(n => n % 2 === 0)
let oddNumbers = numbers.filter(n => n % 2 !== 0)
let evenSum = evenNumbers.reduce((sum, n) => sum + n, 0)
let oddSum = oddNumbers.reduce((sum, n) => sum + n, 0)

console.log("\n=== 5: Dynamic Number Processor ===")
console.log("Even Numbers:", evenNumbers)
console.log("Odd Numbers:", oddNumbers)
console.log("Sum of Even:", evenSum)
console.log("Sum of Odd:", oddSum)
