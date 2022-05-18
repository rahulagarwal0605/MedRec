// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./User.sol";
import "./Patient.sol";

contract Doctor is User {
    string public title;
    mapping(address => Patient) private patientList;
    Patient[] private patientlist;

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
        patientlist.push(p);
    }

    function removePatient(address privAddress) public {
        delete patientList[privAddress];
        uint256 index;
        for (uint256 i = 0; i < patientlist.length; i++) {
            if (patientlist[i].userPrivAddress() == privAddress) {
                index = i;
                break;
            }
        }
        for (uint256 i = index; i < patientlist.length - 1; i++) {
            patientlist[i] = patientlist[i + 1];
        }
        patientlist.pop();
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

    function getPatientList()
        public
        view
        returns (
            string[] memory,
            string[] memory,
            string[] memory,
            uint256[] memory,
            string[] memory,
            string[] memory,
            address[] memory
        )
    {
        string[] memory patName = new string[](patientlist.length);
        string[] memory patGender = new string[](patientlist.length);
        string[] memory patEmail = new string[](patientlist.length);
        uint256[] memory patAge = new uint256[](patientlist.length);
        string[] memory patPhoneNumber = new string[](patientlist.length);
        string[] memory patAddress = new string[](patientlist.length);
        address[] memory patPrivAddress = new address[](patientlist.length);
        for (uint256 i = 0; i < patientlist.length; i++) {
            patName[i] = patientlist[i].userName();
            patGender[i] = patientlist[i].userGender();
            patEmail[i] = patientlist[i].userEmail();
            patAge[i] = patientlist[i].userAge();
            patPhoneNumber[i] = patientlist[i].userPhoneNumber();
            patAddress[i] = patientlist[i].userAddress();
            patPrivAddress[i] = patientlist[i].userPrivAddress();
        }
        return (
            patName,
            patGender,
            patEmail,
            patAge,
            patPhoneNumber,
            patAddress,
            patPrivAddress
        );
    }
}
