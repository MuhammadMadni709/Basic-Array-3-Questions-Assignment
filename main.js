"use strict";
// Part 1: Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.
// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.
// 3. Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).
// 4. Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.
Object.defineProperty(exports, "__esModule", { value: true });
let employees = [{
        name: "employee1",
        hoursWorked: 20,
        hourlyRate: 15,
        salary: 50000,
    }, {
        name: "employee2",
        hoursWorked: 20,
        hourlyRate: 25,
        salary: 60000,
    }
];
function calculateSalary(employee) {
    let totalSalary = employee.salary;
    totalSalary = totalSalary + employee.hourlyRate * employee.hoursWorked;
    if (employee.hoursWorked >= 20) {
        totalSalary = totalSalary + totalSalary * 0.1;
    }
    return totalSalary;
}
for (const employee of employees) {
    const employeeTotalSalary = calculateSalary(employee);
    console.log(`${employee.name} is total salary : ${employeeTotalSalary.toFixed(2)}`);
}
