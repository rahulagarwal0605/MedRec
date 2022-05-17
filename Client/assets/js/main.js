var web3 = new Web3(window.ethereum);
var contractAddress = "0xc4BD609F0159F7a0e1Ad7dc45B52F4E70c199cc2";
var abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "firstName",
            type: "string",
          },
          {
            internalType: "string",
            name: "lastName",
            type: "string",
          },
        ],
        internalType: "struct User.Name",
        name: "doctorName",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "doctorTitle",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "doctorGender",
        type: "uint256",
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
        components: [
          {
            internalType: "uint256",
            name: "areaCode",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "phoneNumber",
            type: "uint256",
          },
        ],
        internalType: "struct User.PhoneNumber",
        name: "doctorPhoneNumber",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "streetAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "string",
            name: "state",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "postalCode",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "country",
            type: "string",
          },
        ],
        internalType: "struct User.Address",
        name: "doctorAddress",
        type: "tuple",
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
        components: [
          {
            internalType: "uint256",
            name: "areaCode",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "phoneNumber",
            type: "uint256",
          },
        ],
        internalType: "struct Organization.PhoneNumber",
        name: "hospPhoneNumber",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "streetAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "string",
            name: "state",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "postalCode",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "country",
            type: "string",
          },
        ],
        internalType: "struct Organization.Address",
        name: "hospAddress",
        type: "tuple",
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
        components: [
          {
            internalType: "string",
            name: "firstName",
            type: "string",
          },
          {
            internalType: "string",
            name: "lastName",
            type: "string",
          },
        ],
        internalType: "struct User.Name",
        name: "patientName",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "patientGender",
        type: "uint256",
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
        components: [
          {
            internalType: "uint256",
            name: "areaCode",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "phoneNumber",
            type: "uint256",
          },
        ],
        internalType: "struct User.PhoneNumber",
        name: "patientPhoneNumber",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "streetAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "string",
            name: "state",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "postalCode",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "country",
            type: "string",
          },
        ],
        internalType: "struct User.Address",
        name: "patientAddress",
        type: "tuple",
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
    name: "getHospitalList",
    outputs: [
      {
        internalType: "contract Organization[]",
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

async function getHospitalList() {
  await contract.methods
    .getHospitalList()
    .call({ from: account })
    .then(function (list) {
      console.log(list);
    });
}

async function addHospital() {


  var hospName = document.getElementById('hospName')
  var hospEmail = document.getElementById('hospEmail')
  var hospPhoneNumber = document.getElementById('hospPhoneNumber')
  var hospETHAddress = document.getElementById('hospETHAddress')
  var hospstreetAddress = document.getElementById('hospstreetAddress')
  var hospcity = document.getElementById('hospcity')
  var hospstate = document.getElementById('hospstate')
  var hosppostalCode = document.getElementById('hosppostalCode')
  var hospcountry = document.getElementById('hospcountry')


  await contract.methods
    .getHospitalList()
    .call({ from: account })
    .then(function (list) {
      console.log(list);
    });
}
