let arr = [];
let employeeIDCounter = 1000;

function EmployeeInformation(fullName, department, level) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;

    this.employeeID = this.generateEmployeeID();
    this.salary = this.calcSalary();
    this.netSalary = Math.round(0.925 * this.salary);

    arr.push(this);
}

EmployeeInformation.prototype.generateEmployeeID = function () {
    const generatedID = employeeIDCounter;
    employeeIDCounter++;
    return generatedID;
};


EmployeeInformation.prototype.calcSalary = function () {
    if (this.level === "Senior") {
        min = 1500;
        max = 2000;
    } else if (this.level === "Mid-Senior") {
        min = 1000;
        max = 1500;
    } else if (this.level === "Junior") {
        min = 500;
        max = 1000;
    }
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
};

EmployeeInformation.prototype.renderInformation = function () {
    document.write(`Employee name: ${this.fullName}<br>`);
    document.write(`Department: ${this.department}<br>`);
    document.write(`Employee Salary: ${this.salary}<br>`);
    document.write(`Employee ID: ${this.employeeID}<br><br>`);
};



const emp1000 = new EmployeeInformation("Ghazi Samer", "Administration", "Senior");
const emp1001 = new EmployeeInformation("Lana Ali", "Finance", "Senior");
const emp1002 = new EmployeeInformation("Tamara Ayoub", "Marketing", "Senior");
const emp1003 = new EmployeeInformation("Safi Walid", "Administration", "Mid-Senior");
const emp1004 = new EmployeeInformation("Omar Zaid", "Development", "Senior");
const emp1005 = new EmployeeInformation("Rana Saleh", "Development", "Junior");
const emp1006 = new EmployeeInformation("Hadi Ahmad", "Finance", "Mid-Senior");


for (let i = 0; i < arr.length; i++) {
    arr[i].renderInformation();
}

