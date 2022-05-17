var web3 = new Web3(window.ethereum);
var contractAddress = "0xd2066cA1518F8c9Da3D841994cFf046D717386F9";
var abi = [
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
    stateMutability: "nonpayable",
    type: "constructor",
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
        cell.innerHTML = `<td><a class="delete" title="Delete" data-toggle="tooltip" onClick="javascript:removeHospital(address);">Delete</i></a></td>`;
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
