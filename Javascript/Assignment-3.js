//1.Employee Salary Process.
let employees = [
  { name: "Visha", salary: 50000 },
  { name: "Dhwani", salary: 30000 },
  { name: "Mahi", salary: 80000 }];

let filtered = employees.filter(emp => emp.salary > 40000);

let updated = filtered.map(emp => {
      let newSalary = emp.salary * 1.10;
        let level;
  if (newSalary >= 70000) {
    level = "Senior";
  } else {
    level = "Mid";
  }
    return {
    ...emp,
    salary: newSalary,
    level: level
  };
});
console.log(updated);
      
//2.Order Management System.
let orders = [
  {
    id: 1,
    items: [
      { name: "Shirt", price: 500, quantity: 2 },
      { name: "Shoes", price: 2000, quantity: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { name: "Bag", price: 1000, quantity: 3 }
    ]}];

let result = orders.map(order => {
      let totalAmount = order.items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
    let totalQuantity = order.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
    return {
    ...order,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity
  };
});
console.log(result);

//3.mini web App

function processData() {
  let employees = [
    { name: "Amit", salary: 50000 },
    { name: "Riya", salary: 30000 },
    { name: "John", salary: 80000 }
  ];

  let result = employees
    .filter(emp => emp.salary > 40000)
    .map(emp => {
      let newSalary = emp.salary * 1.10;
      let level = newSalary >= 70000 ? "Senior" : "Mid";

      return {
        ...emp,
        salary: newSalary,
        level: level
      };
    });

  document.getElementById("output").innerHTML =JSON.stringify(result, null, 2);
}