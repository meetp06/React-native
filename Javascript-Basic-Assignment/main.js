import Student from "./class.js";
import { insertInTable, clearInputs, updateInTable, finalizeTheStats } from "./logics.js";

export const myGlobalArray = (function () {

    const studentArray = [];

    const insStudent = (myStudent) => {
        studentArray.push(myStudent);
    }
    const delStudent = (index) => {
        studentArray.splice(index, 1);
    }

    const upStudent = (name, city, fees) => {
        const index = localStorage.getItem('editIndex');
        studentArray[index - 1].name = name;
        studentArray[index - 1].city = city;
        studentArray[index - 1].fees = fees;

        updateInTable(index, name, city, fees);
        localStorage.removeItem('editIndex');
    }

    const allStatistics = [

        () => {
            return studentArray.reduce((tillSum, value) => tillSum + Number(value.fees), 0);
        },

        () => {
            return studentArray.length;
        },

        () => {
            return studentArray.filter((value) => value.name.startsWith("R")).length;
        },

        () => {
            let ans = studentArray.length >= 4 ? studentArray[3].city : "Not Available";
            return ans;
        },

        () => {

            let ans = 0;

            if (studentArray.length >= 5)
                ans += Number(studentArray[4].fees);

            if (studentArray.length >= 3)
                ans += Number(studentArray[2].fees);

            return ans;
        },

        () => {
            return studentArray.filter((value) => Number(value.fees) >= 2000 && Number(value.fees) <= 3900).length;
        },

        () => {
            return studentArray.filter((value) => Number(value.fees) <= 1000).length;
        },

        () => {
            return studentArray.filter((value) => value.name.startsWith("S") && value.city.startsWith("Ch")).length;
        },

        () => {
            return studentArray.filter((value) => value.name.startsWith("J") || value.city.startsWith("H")).length;
        },

        () => {
            let minVal = studentArray.reduce((curMin, value) => Math.min(curMin, Number(value.fees)), 1000000);
            let maxVal = studentArray.reduce((curMax, value) => Math.max(curMax, Number(value.fees)), -1);

            if (maxVal == -1) {
                minVal = "Not available"
                maxVal = "Not available"
            }

            return `Min is ${minVal} and max is ${maxVal}`;
        },

    ];

    return {
        insertStudent: (name, city, fees) => {
            const myStudent = new Student(name, city, fees);
            insStudent(myStudent);
            insertInTable(name, city, fees);
        },

        removeStudent: (index) => {
            delStudent(index);
        },

        updateStudent: (name, city, fees) => {
            upStudent(name, city, fees)
        },

        getStats: () => {
            const ans = [];

            allStatistics.forEach((func) => {
                ans.push(func());
            })

            finalizeTheStats(ans)
        }
    }

})();

const validateForm = () => {

    const name = document.getElementById("Name").value;
    const city = document.getElementById("City").value;
    const fees = document.getElementById("Fees").value;
    const sadd = document.getElementById("mainButton").innerText;

    if (!Number(fees)) {
        alert("Please give a valid fees.")
        return;
    }

    if (city.length === 0 || fees.length === 0 || name.length === 0) {
        alert("Please fill all the details.")
        return;
    }

    if (sadd === 'Add')
        myGlobalArray.insertStudent(name, city, fees);

    else
        myGlobalArray.updateStudent(name, city, fees);

    clearInputs();
    myGlobalArray.getStats();
}

export { validateForm };