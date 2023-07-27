import { myGlobalArray } from "./main.js";

const addDynamicEventListener = (target, event, callback) => {
    target.addEventListener(event, callback);
}

const getButton = (inner) => {
    const button1 = document.createElement("button");
    button1.innerText = inner;
    button1.style.margin = `${8}px`;

    return button1;
}

export const insertInTable = (...myStudent) => {

    const table = document.getElementsByClassName("table")[0];
    let index = table?.lastElementChild?.lastElementChild?.firstElementChild?.textContent ?? 0;

    if (index == '#')
        index = 0;

    myStudent.unshift(Number(index) + 1);
    console.log(index);

    const row = table.insertRow();

    myStudent.forEach((value) => {
        const cell = row.insertCell();
        cell.textContent = value;
    })

    row.appendChild(addActions());
}

export const updateInTable = (...myStudent) => {
    const table = document.getElementsByTagName("table")[0].rows[myStudent[0]];
    console.log(table);

    myStudent.forEach((value, index) => {
        table.cells[index].innerText = value;
    })

}

export const clearInputs = () => {
    const name = document.getElementById("Name");
    const city = document.getElementById("City");
    const fees = document.getElementById("Fees");
    const sadd = document.getElementById("mainButton");

    name.value = "";
    city.value = "";
    fees.value = "";
    sadd.innerText = "Add";
}

const editOption = (node) => {

    let name = document.getElementById("Name");
    let city = document.getElementById("City");
    let fees = document.getElementById("Fees");
    let sadd = document.getElementById("mainButton");
    sadd.innerText = "Save";

    name.value = node.childNodes[1].innerText;
    city.value = node.childNodes[2].innerText;
    fees.value = node.childNodes[3].innerText;
    localStorage.setItem('editIndex', node.childNodes[0].innerText);
}

const addActions = () => {

    const container = document.createElement("div");
    addDynamicEventListener(container, 'click', (event) => {

        const whichButton = event.target.innerText;

        if (whichButton === "Delete") {
            deleteFromTable(event.target.parentNode);
        } else {
            editOption(event.target.parentNode.parentNode);
        }

        console.log("containue clicked!");
    })

    const button1 = getButton("Edit");
    const button2 = getButton("Delete");

    // Add an event listener to the button
    addDynamicEventListener(button1, 'click', (target) => {
        console.log(target);
        console.log("Button clicked!");
    });

    addDynamicEventListener(button2, 'click', (target) => {
        console.log(target);
        console.log("Button clicked!");
    });

    // Append the button to the container
    container.appendChild(button1);
    container.appendChild(button2)
    return container;
}

const deleteFromTable = (td) => {

    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
    const index = tr.firstElementChild.textContent;

    const table = document.getElementsByTagName("table")[0].rows;

    for (let i = 1; i < table.length; i++) {
        table[i].cells[0].innerText = (i);
    }

    myGlobalArray.removeStudent(index - 1);
    myGlobalArray.getStats();
}

export const finalizeTheStats = (arr) => {

    const table = document.getElementsByTagName("table")[1].rows;

    for (let i = 1; i < table.length; i++) {
        table[i].cells[1].innerText = arr[i - 1];
    }

}

