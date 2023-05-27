let arr = [];
let employeeIDCounter = 1000;


const divE = document.getElementsByTagName("main")[0];

const divAdmin = document.createElement("div")
divAdmin.setAttribute("class", "administration")
const titleAdmin = document.createElement("div")
titleAdmin.setAttribute("class", "department-title")
titleAdmin.textContent = "Administration Department"
divAdmin.appendChild(titleAdmin)


const divFin = document.createElement("div")
divFin.setAttribute("class", "finance")
const titleFinance = document.createElement("div")
titleFinance.setAttribute("class", "department-title")
titleFinance.textContent = "Finance Department"
divFin.appendChild(titleFinance)

const divMark = document.createElement("div")
divMark.setAttribute("class", "marketing")
const titleMarketing = document.createElement("div")
titleMarketing.setAttribute("class", "department-title")
titleMarketing.textContent = "Marketing Department"
divMark.appendChild(titleMarketing)

const divDev = document.createElement("div")
divDev.setAttribute("class", "development")
const titleDevelopment = document.createElement("div")
titleDevelopment.setAttribute("class", "department-title")
titleDevelopment.textContent = "Development Department"
divDev.appendChild(titleDevelopment)

divE.appendChild(divAdmin)
divE.appendChild(divFin)
divE.appendChild(divMark)
divE.appendChild(divDev)

function EmployeeInformation(fullName, department, level, img) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img

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


    if (this.department === "Administration") {

        let div = document.createElement("div")

        const adminImage = document.createElement("img")
        adminImage.src = this.img
        div.appendChild(adminImage)


        const adminiName = document.createElement("p")
        adminiName.textContent = `Full Name : ${this.fullName}`
        div.appendChild(adminiName)


        const adminDepartment = document.createElement("p")
        adminDepartment.textContent = `Department : ${this.department}`
        div.appendChild(adminDepartment)



        const adminlevel = document.createElement("p")
        adminlevel.textContent = `Level : ${this.level}`
        div.appendChild(adminlevel)

        const adminID = document.createElement("p")
        adminID.textContent = `ID : ${this.employeeID}`
        div.appendChild(adminID)

        const adminSalary = document.createElement("p")
        adminSalary.textContent = `Salary : ${this.salary}`
        div.appendChild(adminSalary)

        divAdmin.appendChild(div)


    } else if (this.department === "Finance") {
        let div = document.createElement("div")

        const finImage = document.createElement("img")
        finImage.src = this.img
        div.appendChild(finImage)


        const adminiName = document.createElement("p")
        adminiName.textContent = `Full Name : ${this.fullName}`
        div.appendChild(adminiName)

        const adminDepartment = document.createElement("p")
        adminDepartment.textContent = `Department : ${this.department}`
        div.appendChild(adminDepartment)


        const adminlevel = document.createElement("p")
        adminlevel.textContent = `Level : ${this.level}`
        div.appendChild(adminlevel)

        const adminID = document.createElement("p")
        adminID.textContent = `ID : ${this.employeeID}`
        div.appendChild(adminID)

        const adminSalary = document.createElement("p")
        adminSalary.textContent = `Salary : ${this.salary}`
        div.appendChild(adminSalary)

        divFin.appendChild(div)

    } else if (this.department === "Marketing") {

        let div = document.createElement("div")

        const markImage = document.createElement("img")
        markImage.src = this.img
        div.appendChild(markImage)


        const adminiName = document.createElement("p")
        adminiName.textContent = `Full Name : ${this.fullName}`
        div.appendChild(adminiName)

        const adminDepartment = document.createElement("p")
        adminDepartment.textContent = `Department : ${this.department}`
        div.appendChild(adminDepartment)


        const adminlevel = document.createElement("p")
        adminlevel.textContent = `Level : ${this.level}`
        div.appendChild(adminlevel)

        const adminID = document.createElement("p")
        adminID.textContent = `ID : ${this.employeeID}`
        div.appendChild(adminID)

        const adminSalary = document.createElement("p")
        adminSalary.textContent = `Salary : ${this.salary}`
        div.appendChild(adminSalary)

        divMark.appendChild(div)

    } else if (this.department === "Development") {

        let div = document.createElement("div")

        const devImage = document.createElement("img")
        devImage.src = this.img
        div.appendChild(devImage)


        const adminiName = document.createElement("p")
        adminiName.textContent = `Full Name : ${this.fullName}`
        div.appendChild(adminiName)

        const adminDepartment = document.createElement("p")
        adminDepartment.textContent = `Department : ${this.department}`
        div.appendChild(adminDepartment)


        const adminlevel = document.createElement("p")
        adminlevel.textContent = `Level : ${this.level}`
        div.appendChild(adminlevel)

        const adminID = document.createElement("p")
        adminID.textContent = `ID : ${this.employeeID}`
        div.appendChild(adminID)

        const adminSalary = document.createElement("p")
        adminSalary.textContent = `Salary : ${this.salary}`
        div.appendChild(adminSalary)

        divDev.appendChild(div)
    }
};





const emp1000 = new EmployeeInformation("Ghazi Samer", "Administration", "Senior", "./images/Ghazi.jpg");
const emp1001 = new EmployeeInformation("Lana Ali", "Finance", "Senior", "./images/Lana.jpg");
const emp1002 = new EmployeeInformation("Tamara Ayoub", "Marketing", "Senior", "./images/Tamara.jpg");
const emp1003 = new EmployeeInformation("Safi Walid", "Administration", "Mid-Senior", "./images/Safi.jpg");
const emp1004 = new EmployeeInformation("Omar Zaid", "Development", "Senior", "./images/Omar.jpg");
const emp1005 = new EmployeeInformation("Rana Saleh", "Development", "Junior", "./images/Rana.jpg");
const emp1006 = new EmployeeInformation("Hadi Ahmad", "Finance", "Mid-Senior", "./images/Hadi.jpg");


for (let i = 0; i < arr.length; i++) {
    arr[i].renderInformation();
}


