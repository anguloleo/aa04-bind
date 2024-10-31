const classes = require("./employee");

const Employee = classes.Employee;


const johnWick = new Employee("John Wick", "Dog Lover");

const printName = johnWick.sayName.bind(johnWick);

setTimeout(printName, 2000);

const printOccupation = johnWick.sayOccupation.bind(johnWick);

setTimeout(printOccupation, 3000);


