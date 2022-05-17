// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Admin.sol";
import "./Organization.sol";
import "./Doctor.sol";
import "./Patient.sol";

contract Main {
    Admin private a;
    mapping(address => uint256) private userList;
    mapping(address => address) private docOrg;
    mapping(address => address) private patDoc;
    mapping(address => mapping(address => address)) private patDocOrg;

    modifier onlyAdmin(address privAddress) {
        require(a.getAdminAddress() == privAddress, "User is not an admin");
        _;
    }

    modifier onlyOrg(address privAddress) {
        require(
            userList[privAddress] == 1,
            "User is not related to an Organization"
        );
        _;
    }

    modifier onlyDoc(address privAddress) {
        require(userList[privAddress] == 2, "User is not a doctor");
        _;
    }

    modifier onlyPat(address privAddress) {
        require(userList[privAddress] == 3, "User is not a patient");
        _;
    }

    constructor() {
        a = new Admin();
        userList[tx.origin] = 4;
    }

    function getRole(address privAddress) public view returns (uint256) {
        return userList[privAddress];
    }

    function addHospital(
        string memory hospName,
        string memory hospEmail,
        string memory hospPhoneNumber,
        string memory hospAddress,
        address privAddress
    ) public onlyAdmin(msg.sender) {
        a.addHospital(
            hospName,
            hospEmail,
            hospPhoneNumber,
            hospAddress,
            privAddress
        );
        userList[privAddress] = 1;
    }

    function removeHospital(address privAddress) public onlyAdmin(msg.sender) {
        a.removeHospital(privAddress);
        userList[privAddress] = 0;
    }

    function getHospitalList()
        public
        view
        onlyAdmin(msg.sender)
        returns (
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            address[] memory
        )
    {
        return a.getHospitalList();
    }

    function addDoctor(
        string memory doctorName,
        string memory doctorTitle,
        string memory doctorGender,
        string memory doctorEmail,
        uint256 doctorAge,
        string memory doctorPhoneNumber,
        string memory doctorAddress,
        address privAddress
    ) public onlyOrg(msg.sender) {
        a.getHospital(msg.sender).addDoctor(
            doctorName,
            doctorTitle,
            doctorGender,
            doctorEmail,
            doctorAge,
            doctorPhoneNumber,
            doctorAddress,
            privAddress
        );
        userList[privAddress] = 2;
        docOrg[privAddress] = msg.sender;
    }

    function removeDoctor(address privAddress) public onlyOrg(msg.sender) {
        a.getHospital(msg.sender).removeDoctor(privAddress);
        userList[privAddress] = 0;
        docOrg[privAddress] = address(0);
    }

    function getDoctorList()
        public
        view
        onlyOrg(msg.sender)
        returns (
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            uint256[] memory,
            string[] memory,
            string[] memory,
            address[] memory
        )
    {
        return a.getHospital(msg.sender).getDoctorList();
    }

    function addPatient(
        string memory patientName,
        string memory patientGender,
        string memory patientEmail,
        uint256 patientAge,
        string memory patientPhoneNumber,
        string memory patientAddress,
        address privAddress
    ) public onlyDoc(msg.sender) {
        a.getHospital(docOrg[msg.sender]).getDoctor(msg.sender).addPatient(
            patientName,
            patientGender,
            patientEmail,
            patientAge,
            patientPhoneNumber,
            patientAddress,
            privAddress
        );
        userList[privAddress] = 3;
        patDoc[privAddress] = msg.sender;
        patDocOrg[privAddress][msg.sender] = docOrg[msg.sender];
    }

    function removePatient(address privAddress) public onlyDoc(msg.sender) {
        a.getHospital(docOrg[msg.sender]).getDoctor(msg.sender).removePatient(
            privAddress
        );
        userList[privAddress] = 0;
        patDoc[privAddress] = address(0);
        patDocOrg[privAddress][msg.sender] = address(0);
    }

    function viewMedRec(address privAddress)
        public
        view
        onlyDoc(msg.sender)
        returns (
            string[] memory,
            string[] memory,
            uint256[] memory,
            string[] memory,
            string[] memory,
            string[] memory
        )
    {
        return
            a.getHospital(docOrg[msg.sender]).getDoctor(msg.sender).viewMedRec(
                privAddress
            );
    }

    function addMedRec(Patient.MedicalRecord memory medRec)
        public
        onlyPat(msg.sender)
    {
        a
            .getHospital(patDocOrg[msg.sender][patDoc[msg.sender]])
            .getDoctor(patDoc[msg.sender])
            .getPatient(msg.sender)
            .addMedRec(medRec);
    }

    function removeMedRec(uint256 index) public onlyPat(msg.sender) {
        a
            .getHospital(patDocOrg[msg.sender][patDoc[msg.sender]])
            .getDoctor(patDoc[msg.sender])
            .getPatient(msg.sender)
            .removeMedRec(index);
    }

    function viewMedRec()
        public
        view
        onlyPat(msg.sender)
        returns (
            string[] memory,
            string[] memory,
            uint256[] memory,
            string[] memory,
            string[] memory,
            string[] memory
        )
    {
        return
            a
                .getHospital(patDocOrg[msg.sender][patDoc[msg.sender]])
                .getDoctor(patDoc[msg.sender])
                .getPatient(msg.sender)
                .viewMedRec();
    }
}
