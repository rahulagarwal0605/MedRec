// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./User.sol";
import "./Patient.sol";

contract Doctor is User {
    string private title;
    Patient[] private patientList;

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
        Address memory patientAddress
    ) public {
        Patient p = new Patient(
            patientName,
            patientGender,
            patientEmail,
            patientAge,
            patientPhoneNumber,
            patientAddress
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
