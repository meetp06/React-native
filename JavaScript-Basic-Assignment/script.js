var count = 1;
var records = [];
var editRecordData = null;

function addDataIntoTable() {

    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var no = row.insertCell(0);
    var name = row.insertCell(1);
    var city = row.insertCell(2);
    var fees = row.insertCell(3);
    var action = row.insertCell(4);

    var editRecord = document.createElement("button");

    editRecord.id = "edit";
    editRecord.innerHTML = "Edit";
    editRecord.type = 'button';
    editRecord.onclick = function () {
        return false;
    };

    var deleteRecord = document.createElement("button");
    deleteRecord.id = "delete";
    deleteRecord.innerHTML = "Delete";
    deleteRecord.type = 'button';
    deleteRecord.onclick = function () {
        table.deleteRow(count - 2);
        records.splice(0, count - 2);
        calculateStatistics();
    };

    let obj = {
        id: count,
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        fees: document.getElementById("fees").value
    };

    no.innerHTML = count;
    name.innerHTML = document.getElementById("name").value;
    city.innerHTML = document.getElementById("city").value;
    fees.innerHTML = document.getElementById("fees").value;
    action.appendChild(deleteRecord);
    action.appendChild(editRecord);
    count = count + 1;
    records.push(obj);
    studentForm.reset();

    this.calculateStatistics();
}

function calculateStatistics() {
    var totalFees = 0;
    var fees = 0;
    var feesBetweenTwoNumber = 0;
    var statistic3 = 0;
    var statistic4 = "";
    var stuFeesLessThanThousand = 0;
    var statistics8 = 0;
    var statistics9 = 0;
    var statistics10Min = Math.min(...records.map(item => item.fees));
    var statistics10Max = Math.max(...records.map(item => item.fees));
    records.map((record, i) => {
        totalFees = totalFees + Number(record.fees);
        if (i === 3) {
            statistic4 = record.city;
        }
        if (i === 2 || i === 4) {
            fees = fees + Number(record.fees);
        }
        if (record.fees > 2000 && record.fees < 3900) {
            feesBetweenTwoNumber = feesBetweenTwoNumber + 1;
        }
        if (record.name.startsWith("R")) {
            statistic3 = statistic3 + 1;
        }
        if (record.fees < 1000) {
            stuFeesLessThanThousand = stuFeesLessThanThousand + 1;
        }
        if (record.name.startsWith("S") && record.city.startsWith("Ch")) {
            statistics8 = statistics8 + 1;
        }
        if (record.name.startsWith("J") || record.city.startsWith("H")) {
            statistics9 = statistics9 + 1;
        }
    });
    document.getElementById('state1').innerHTML = totalFees;
    document.getElementById('state2').innerHTML = records.length;
    document.getElementById('state3').innerHTML = statistic3;
    document.getElementById('state4').innerHTML = statistic4;
    document.getElementById('state5').innerHTML = fees;
    document.getElementById('state6').innerHTML = feesBetweenTwoNumber;
    document.getElementById('state7').innerHTML = stuFeesLessThanThousand;
    document.getElementById('state8').innerHTML = statistics8;
    document.getElementById('state9').innerHTML = statistics9;
    document.getElementById('state10').innerHTML = statistics10Min + ' ' + statistics10Max;
}