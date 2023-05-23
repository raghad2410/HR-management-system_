let ghaziSamer = {
    EmployeeID: 1000,
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    img: ("https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true"),
    salary: function () {
        console.log(this.department)
        if (this.level === "Senior") {
            const min = 1500;
            const max = 2000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Mid-Senior") {
            const min = 1000;
            const max = 1500;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Junior") {
            const min = 500;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }
}
let netSalghazi = ghaziSamer['netSalary'] = Math.floor(0.925 * ghaziSamer.salary())
const newPGhazi = document.createElement("p");
newPGhazi.textContent = `Employee name: ${ghaziSamer.fullName}`;
const newPPGhazi = document.createElement("p");
newPPGhazi.textContent = `Employee salary:${ghaziSamer.salary()} Employee salary with 7.5% tax : ${netSalghazi}`;
const parentGhazi = document.createElement("div");
parentGhazi.appendChild(newPGhazi)
parentGhazi.appendChild(newPPGhazi)
const parentElementghazi = document.getElementById("list");
parentElementghazi.appendChild(parentGhazi);


let lanaAli = {
    EmployeeID: 1001,
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    img: ("https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true"),
    salary: function () {
        console.log(this.department)
        if (this.level === "Senior") {
            const min = 1500;
            const max = 2000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Mid-Senior") {
            const min = 1000;
            const max = 1500;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Junior") {
            const min = 500;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }
}
let netSalLana = lanaAli['netSalary'] = Math.floor(0.925 * lanaAli.salary())
const newPLana = document.createElement("p");
newPLana.textContent = `Employee name: ${lanaAli.fullName}`;
const newPPLana = document.createElement("p");
newPPLana.textContent = `Employee salary:${lanaAli.salary()} Employee salary with 7.5% tax : ${netSalLana}`;
const parentLana = document.createElement("div");
parentLana.appendChild(newPLana)
parentLana.appendChild(newPPLana)
const parentElementLana = document.getElementById("list");
parentElementLana.appendChild(parentLana);

let tamaraAyoub = {
    EmployeeID: 1002,
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    img: ("https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true"),
    salary: function () {
        console.log(this.department)
        if (this.level === "Senior") {
            const min = 1500;
            const max = 2000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Mid-Senior") {
            const min = 1000;
            const max = 1500;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Junior") {
            const min = 500;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }
}
let netSalTamara = tamaraAyoub['netSalary'] = Math.floor(0.925 * tamaraAyoub.salary())
const newPTamara = document.createElement("p");
newPTamara.textContent = `Employee name: ${tamaraAyoub.fullName}`;
const newPPTamara = document.createElement("p");
newPPTamara.textContent = `Employee salary:${tamaraAyoub.salary()} Employee salary with 7.5% tax : ${netSalTamara}`;
const parentTamara = document.createElement("div");
parentTamara.appendChild(newPTamara)
parentTamara.appendChild(newPPTamara)
const parentElementTamara = document.getElementById("list");
parentElementTamara.appendChild(parentTamara);

let safiWalid = {
    EmployeeID: 1003,
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    img: ("https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true"),
    salary: function () {
        console.log(this.department)
        if (this.level === "Senior") {
            const min = 1500;
            const max = 2000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Mid-Senior") {
            const min = 1000;
            const max = 1500;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Junior") {
            const min = 500;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }

}
let netSalSafi = safiWalid['netSalary'] = Math.floor(0.925 * safiWalid.salary())
const newPSafi = document.createElement("p");
newPSafi.textContent = `Employee name: ${safiWalid.fullName}`;
const newPPsafi = document.createElement("p");
newPPsafi.textContent = `Employee salary:${safiWalid.salary()} Employee salary with 7.5% tax : ${netSalSafi}`;
const parentSafi = document.createElement("div");
parentSafi.appendChild(newPSafi)
parentSafi.appendChild(newPPsafi)
const parentElementSafi = document.getElementById("list");
parentElementSafi.appendChild(parentSafi);


let omarZaid = {
    EmployeeID: 1004,
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    img: ("https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true"),
    salary: function () {
        console.log(this.department)
        if (this.level === "Senior") {
            const min = 1500;
            const max = 2000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Mid-Senior") {
            const min = 1000;
            const max = 1500;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Junior") {
            const min = 500;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }
}
let netSalOmar = omarZaid['netSalary'] = Math.floor(0.925 * omarZaid.salary())
const newPOmar = document.createElement("p");
newPOmar.textContent = `Employee name: ${omarZaid.fullName}`;
const newPPOmar = document.createElement("p");
newPPOmar.textContent = `Employee salary:${omarZaid.salary()} Employee salary with 7.5% tax : ${netSalOmar}`;
const parentOmar = document.createElement("div");
parentOmar.appendChild(newPOmar)
parentOmar.appendChild(newPPOmar)
const parentElementOmar = document.getElementById("list");
parentElementOmar.appendChild(parentOmar);

let ranaSaleh = {
    EmployeeID: 1005,
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    img: ("https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true"),
    salary: function () {
        console.log(this.department)
        if (this.level === "Senior") {
            const min = 1500;
            const max = 2000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Mid-Senior") {
            const min = 1000;
            const max = 1500;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Junior") {
            const min = 500;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }
}
let netSalRana = ranaSaleh['netSalary'] = Math.floor(0.925 * ranaSaleh.salary())
const newPRana = document.createElement("p");
newPRana.textContent = `Employee name: ${ranaSaleh.fullName}`;
const newPPRana = document.createElement("p");
newPPRana.textContent = `Employee salary:${ranaSaleh.salary()} Employee salary with 7.5% tax : ${netSalRana}`;
const parentRana = document.createElement("div");
parentRana.appendChild(newPRana)
parentRana.appendChild(newPPRana)
const parentElementRana = document.getElementById("list");
parentElementRana.appendChild(parentRana);


let hadiAhmad = {
    EmployeeID: 1006,
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    img: ("https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true"),
    salary: function () {
        console.log(this.department)
        if (this.level === "Senior") {
            const min = 1500;
            const max = 2000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Mid-Senior") {
            const min = 1000;
            const max = 1500;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        } else if (this.level === "Junior") {
            const min = 500;
            const max = 1000;
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }
}
let netSalHadi = hadiAhmad['netSalary'] = Math.floor(0.925 * hadiAhmad.salary())
const newPHadi = document.createElement("p");
newPHadi.textContent = `Employee name: ${hadiAhmad.fullName}`;
const newPPHadi = document.createElement("p");
newPPHadi.textContent = `Employee salary:${hadiAhmad.salary()} Employee salary with 7.5% tax : ${netSalHadi}`;
const parentHadi = document.createElement("div");
parentHadi.appendChild(newPHadi)
parentHadi.appendChild(newPPHadi)
const parentElementHadi = document.getElementById("list");
parentElementHadi.appendChild(parentHadi);
