// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./User.sol";
import "./Patient.sol";

contract Doctor is User {
    string private title;
    mapping(address => Patient) private patientList;

    constructor(
        Name memory doctorName,
        string memory doctorTitle,
        uint256 doctorGender,
        string memory doctorEmail,
        uint256 doctorAge,
        PhoneNumber memory doctorPhoneNumber,
        Address memory doctorAddress
    )
        User(
            doctorName,
            doctorGender,
            doctorEmail,
            doctorAge,
            doctorPhoneNumber,
            doctorAddress
        )
    {
        title = doctorTitle;
    }

    function addPatient(
        Name memory patientName,
        uint256 patientGender,
        string memory patientEmail,
        uint256 patientAge,
        PhoneNumber memory patientPhoneNumber,
        Address memory patientAddress,
        address privAddress
    ) public {
        Patient p = new Patient(
            patientName,
            patientGender,
            patientEmail,
            patientAge,
            patientPhoneNumber,
            patientAddress
        );
        patientList[privAddress] = p;
    }

    function removePatient(address privAddress) public {
        delete patientList[privAddress];
    }

    function viewMedRec(address privAddress)
        public
        view
        returns (
            string[] memory,
            string[] memory,
            uint256[] memory,
            string[] memory,
            string[] memory,
            string[] memory
        )
    {
        return patientList[privAddress].viewMedRec();
    }
}
