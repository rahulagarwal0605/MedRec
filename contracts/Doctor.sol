// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./User.sol";
import "./Patient.sol";

contract Doctor is User {
    string private title;
    Patient[] private patientList;

    constructor(
        string memory firstName,
        string memory lastName,
        string memory doctorTitle,
        uint256 gender,
        string memory email,
        uint256 age,
        uint256 areaCode,
        uint256 phoneNumber,
        string memory streetAddress,
        string memory city,
        string memory state,
        string memory postalCode,
        string memory country
    )
        User(
            firstName,
            lastName,
            gender,
            email,
            age,
            areaCode,
            phoneNumber,
            streetAddress,
            city,
            state,
            postalCode,
            country
        )
    {
        title = doctorTitle;
    }

    function addPatient(
        string memory firstName,
        string memory lastName,
        uint256 gender,
        string memory email,
        uint256 age,
        uint256 areaCode,
        uint256 phoneNumber,
        string memory streetAddress,
        string memory city,
        string memory state,
        string memory postalCode,
        string memory country
    ) public {
        Patient p = new Patient(
            firstName,
            lastName,
            gender,
            email,
            age,
            areaCode,
            phoneNumber,
            streetAddress,
            city,
            state,
            postalCode,
            country
        );
        patientList.push(p);
    }

    function removePatient(uint256 index) public {
        for (uint256 i = index; i < patientList.length - 1; i++) {
            patientList[i] = patientList[i + 1];
        }
        patientList.pop();
    }

    function viewMedRec(uint256 index)
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
        return patientList[index].viewMedRec();
    }
}
