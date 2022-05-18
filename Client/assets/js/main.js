var web3 = new Web3(window.ethereum);
var contractAddress = "0xC00fBE3D17Be703A88449532CAB96568c58EA738";
var abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "doctorName",
        type: "string",
      },
      {
        internalType: "string",
        name: "doctorTitle",
        type: "string",
      },
      {
        internalType: "string",
        name: "doctorGender",
        type: "string",
      },
      {
        internalType: "string",
        name: "doctorEmail",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "doctorAge",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "doctorPhoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "doctorAddress",
        type: "string",
      },
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "addDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "hospName",
        type: "string",
      },
      {
        internalType: "string",
        name: "hospEmail",
        type: "string",
      },
      {
        internalType: "string",
        name: "hospPhoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "hospAddress",
        type: "string",
      },
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "addHospital",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "startDate",
            type: "string",
          },
          {
            internalType: "string",
            name: "endDate",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "daysExcused",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "diagnosis",
            type: "string",
          },
          {
            internalType: "string",
            name: "diagnosisDescription",
            type: "string",
          },
          {
            internalType: "string",
            name: "prescription",
            type: "string",
          },
        ],
        internalType: "struct Patient.MedicalRecord",
        name: "medRec",
        type: "tuple",
      },
    ],
    name: "addMedRec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientName",
        type: "string",
      },
      {
        internalType: "string",
        name: "patientGender",
        type: "string",
      },
      {
        internalType: "string",
        name: "patientEmail",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "patientAge",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "patientPhoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "patientAddress",
        type: "string",
      },
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "addPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDoctorList",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHospitalList",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPatientList",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "getRole",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "removeDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "removeHospital",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeMedRec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "removePatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewMedRec",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "privAddress",
        type: "address",
      },
    ],
    name: "viewMedRec",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
contract = new web3.eth.Contract(abi, contractAddress);
var account = localStorage.getItem("account");

async function login() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  await web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      alert(
        "No account found! Make sure the Ethereum client is configured properly."
      );
      return;
    }
    account = accounts[0];
    console.log("Account: " + account);
    web3.eth.defaultAccount = account;
    localStorage.setItem("account", account);
  });

  await contract.methods
    .getRole(account)
    .call({ from: account })
    .then(function (role) {
      if (role == 0) alert("User is not registered. Kindly contact the admin.");
      else if (role == 1) window.location.replace("organization.html");
      else if (role == 2) window.location.replace("doctor.html");
      else if (role == 3) window.location.replace("patient.html");
      else if (role == 4) window.location.replace("admin.html");
    })
    .catch((err) => alert(err));
}

var address;
async function getHospitalList() {
  await contract.methods
    .getHospitalList()
    .call({ from: account })
    .then(function (list) {
      const mytable = document.getElementById("hospitalList");
      for (var i = 0; i < list[0].length; i++) {
        let newRow = document.createElement("tr");
        let cell;
        for (var j = 0; j < 5; j++) {
          cell = document.createElement("td");
          cell.innerText = list[j][i];
          newRow.appendChild(cell);
        }
        address = list[4][i];
        cell = document.createElement("td");
        cell.innerHTML = `<td><a class="delete" title="Delete" data-toggle="tooltip" onClick="javascript:removeHospital(${address});">Delete</i></a></td>`;
        newRow.appendChild(cell);
        mytable.appendChild(newRow);
      }
    });
}

async function addHospital() {
  var hospName = document.getElementById("hospName").value;
  var hospEmail = document.getElementById("hospEmail").value;
  var hospPhoneNumber = document.getElementById("hospPhoneNumber").value;
  var hospETHAddress = document.getElementById("hospETHAddress").value;
  var hospstreetAddress = document.getElementById("hospstreetAddress").value;
  var hospcity = document.getElementById("hospcity").value;
  var hospstate = document.getElementById("hospstate").value;
  var hosppostalCode = document.getElementById("hosppostalCode").value;
  var hospcountry = document.getElementById("hospcountry").value;

  await contract.methods
    .addHospital(
      hospName,
      hospEmail,
      hospPhoneNumber,
      hospstreetAddress +
        ", " +
        hospcity +
        ", " +
        hospstate +
        ", " +
        hosppostalCode +
        ", " +
        hospcountry,
      hospETHAddress
    )
    .send({ from: account })
    .then(function () {
      alert("Hospital added successfully");
      window.location.reload();
    });
}

async function removeHospital(address) {
  await contract.methods
    .removeHospital(address)
    .send({ from: account })
    .then(function () {
      alert("Hospital removed successfully");
      window.location.reload();
    });
}

async function addDoctor() {
  var doctorName = document.getElementById("doctorName").value;
  var doctorTitle = document.getElementById("doctorTitle").value;
  var doctorGender = document.getElementById("doctorGender").value;
  var doctorEmail = document.getElementById("doctorEmail").value;
  var doctorAge = document.getElementById("doctorAge").value;
  var doctorPhoneNumber = document.getElementById("doctorPhoneNumber").value;
  var doctorETHAddress = document.getElementById("doctorETHAddress").value;
  var doctorstreetAddress = document.getElementById(
    "doctorstreetAddress"
  ).value;
  var doctorcity = document.getElementById("doctorcity").value;
  var doctorstate = document.getElementById("doctorstate").value;
  var doctorpostalCode = document.getElementById("doctorpostalCode").value;
  var doctorcountry = document.getElementById("doctorcountry").value;

  await contract.methods
    .addDoctor(
      doctorName,
      doctorTitle,
      doctorGender,
      doctorEmail,
      doctorAge,
      doctorPhoneNumber,
      doctorstreetAddress +
        ", " +
        doctorcity +
        ", " +
        doctorstate +
        ", " +
        doctorpostalCode +
        ", " +
        doctorcountry,
      doctorETHAddress
    )
    .send({ from: account })
    .then(function () {
      alert("Doctor added successfully");
      window.location.reload();
    });
}

async function getDoctorList() {
  await contract.methods
    .getDoctorList()
    .call({ from: account })
    .then(function (list) {
      const mytable = document.getElementById("doctorList");
      for (var i = 0; i < list[0].length; i++) {
        let newRow = document.createElement("tr");
        let cell;
        for (var j = 0; j < 8; j++) {
          cell = document.createElement("td");
          cell.innerText = list[j][i];
          newRow.appendChild(cell);
        }
        address = list[7][i];
        cell = document.createElement("td");
        cell.innerHTML = `<td><a class="delete" title="Delete" data-toggle="tooltip" onClick="javascript:removeDoctor(${address});">Delete</i></a></td>`;
        newRow.appendChild(cell);
        mytable.appendChild(newRow);
      }
    });
}

async function removeDoctor(address) {
  await contract.methods
    .removeDoctor(address)
    .send({ from: account })
    .then(function () {
      alert("Doctor removed successfully");
      window.location.reload();
    });
}

async function addPatient() {
  var patientName = document.getElementById("patientName").value;
  var patientGender = document.getElementById("patientGender").value;
  var patientEmail = document.getElementById("patientEmail").value;
  var patientAge = document.getElementById("patientAge").value;
  var patientPhoneNumber = document.getElementById("patientPhoneNumber").value;
  var patientETHAddress = document.getElementById("patientETHAddress").value;
  var patientstreetAddress = document.getElementById(
    "patientstreetAddress"
  ).value;
  var patientcity = document.getElementById("patientcity").value;
  var patientstate = document.getElementById("patientstate").value;
  var patientpostalCode = document.getElementById("patientpostalCode").value;
  var patientcountry = document.getElementById("patientcountry").value;

  await contract.methods
    .addPatient(
      patientName,
      patientGender,
      patientEmail,
      patientAge,
      patientPhoneNumber,
      patientstreetAddress +
        ", " +
        patientcity +
        ", " +
        patientstate +
        ", " +
        patientpostalCode +
        ", " +
        patientcountry,
      patientETHAddress
    )
    .send({ from: account })
    .then(function () {
      alert("Patient added successfully");
      window.location.reload();
    });
}

async function getPatientList() {
  await contract.methods
    .getPatientList()
    .call({ from: account })
    .then(function (list) {
      const mytable = document.getElementById("patientList");
      for (var i = 0; i < list[0].length; i++) {
        let newRow = document.createElement("tr");
        let cell;
        for (var j = 0; j < 7; j++) {
          cell = document.createElement("td");
          cell.innerText = list[j][i];
          newRow.appendChild(cell);
        }
        address = list[6][i];
        cell = document.createElement("td");
        cell.innerHTML = `<td><a class="info" title="View Records" data-toggle="tooltip" onClick="javascript:getPatMedRecord(${address});">View Records</i></a></td>`;
        newRow.appendChild(cell);
        cell = document.createElement("td");
        cell.innerHTML = `<td><a class="delete" title="Delete" data-toggle="tooltip" onClick="javascript:removePatient(${address});">Delete</i></a></td>`;
        newRow.appendChild(cell);
        mytable.appendChild(newRow);
      }
    });
}

async function removePatient(address) {
  await contract.methods
    .removePatient(address)
    .send({ from: account })
    .then(function () {
      alert("Patient removed successfully");
      window.location.reload();
    });
}

async function getPatMedRecord(address) {
  await contract.methods
    .viewMedRec(address)
    .call({ from: account })
    .then(function (list) {
      const elmntToView = document.getElementById("content4-20");
      elmntToView.scrollIntoView({ behavior: "smooth" });
      const mytable = document.getElementById("medRecordList");
      for (var i = 0; i < list[0].length; i++) {
        let newRow = document.createElement("tr");
        let cell;
        for (var j = 0; j < 6; j++) {
          cell = document.createElement("td");
          cell.innerText = list[j][i];
          newRow.appendChild(cell);
        }
        newRow.appendChild(cell);
        mytable.appendChild(newRow);
      }
    });
}

async function addMedicalRecord() {
  var SDate = document.getElementById("SDate").value;
  var EDate = document.getElementById("EDate").value;
  var DaysExcused = document.getElementById("DaysExcused").value;
  var Diagnosis = document.getElementById("Diagnosis").value;
  var DiagnosisDescription = document.getElementById(
    "DiagnosisDescription"
  ).value;
  var Prescription = document.getElementById("Prescription").value;

  await contract.methods
    .addMedRec([
      SDate,
      EDate,
      DaysExcused,
      Diagnosis,
      DiagnosisDescription,
      Prescription,
    ])
    .send({ from: account })
    .then(function () {
      alert("Medical Record added successfully");
      window.location.reload();
    });
}

var index;
async function getMedRecordList() {
  await contract.methods
    .viewMedRec()
    .call({ from: account })
    .then(function (list) {
      const mytable = document.getElementById("medRecords");
      for (var i = 0; i < list[0].length; i++) {
        let newRow = document.createElement("tr");
        let cell;
        for (var j = 0; j < 6; j++) {
          cell = document.createElement("td");
          cell.innerText = list[j][i];
          newRow.appendChild(cell);
        }
        index = i;
        cell = document.createElement("td");
        cell.innerHTML = `<td><a class="delete" title="Delete" data-toggle="tooltip" onClick="javascript:removeMedRec(${index});">Delete</i></a></td>`;
        newRow.appendChild(cell);
        mytable.appendChild(newRow);
      }
    });
}

async function removeMedRec(index) {
  await contract.methods
    .removeMedRec(index)
    .send({ from: account })
    .then(function () {
      alert("Medical Record removed successfully");
      window.location.reload();
    });
}
