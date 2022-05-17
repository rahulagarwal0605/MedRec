// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./User.sol";
import "./Patient.sol";

contract Doctor is User {
    string public title;
    mapping(address => Patient) private patientList;

    constructor(
        string memory doctorName,
        string memory doctorTitle,
        string memory doctorGender,
        string memory doctorEmail,
        uint256 doctorAge,
        string memory doctorPhoneNumber,
        string memory doctorAddress,
        address doctorPrivAddress
    )
        User(
            doctorName,
            doctorGender,
            doctorEmail,
            doctorAge,
            doctorPhoneNumber,
            doctorAddress,
            doctorPrivAddress
        )
    {
        title = doctorTitle;
    }

    function addPatient(
        string memory patientName,
        string memory patientGender,
        string memory patientEmail,
        uint256 patientAge,
        string memory patientPhoneNumber,
        string memory patientAddress,
        address privAddress
    ) public {
        Patient p = new Patient(
            patientName,
            patientGender,
            patientEmail,
            patientAge,
            patientPhoneNumber,
            patientAddress,
            privAddress
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

    function getPatient(address privAddress) public view returns (Patient) {
        return patientList[privAddress];
    }
}
