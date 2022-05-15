// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./User.sol";

contract Patient is User {
    struct MedicalRecord {
        string startDate;
        string endDate;
        uint256 daysExcused;
        string diagnosis;
        string diagnosisDescription;
        string prescription;
    }

    MedicalRecord[] private patientMedRec;

    constructor(
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
    {}

    function addMedRec(
        string memory startDate,
        string memory endDate,
        uint256 daysExcused,
        string memory diagnosis,
        string memory diagnosisDescription,
        string memory prescription
    ) public {
        patientMedRec.push(
            MedicalRecord(
                startDate,
                endDate,
                daysExcused,
                diagnosis,
                diagnosisDescription,
                prescription
            )
        );
    }

    function removeMedRec(uint256 index) public {
        for (uint256 i = index; i < patientMedRec.length - 1; i++) {
            patientMedRec[i] = patientMedRec[i + 1];
        }
        patientMedRec.pop();
    }

    function viewMedRec()
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
        string[] memory startDate = new string[](patientMedRec.length);
        string[] memory endDate = new string[](patientMedRec.length);
        uint256[] memory daysExcused = new uint256[](patientMedRec.length);
        string[] memory diagnosis = new string[](patientMedRec.length);
        string[] memory diagnosisDescription = new string[](
            patientMedRec.length
        );
        string[] memory prescription = new string[](patientMedRec.length);
        for (uint256 i = 0; i < patientMedRec.length; i++) {
            MedicalRecord storage medRec = patientMedRec[i];
            startDate[i] = medRec.startDate;
            endDate[i] = medRec.endDate;
            daysExcused[i] = medRec.daysExcused;
            diagnosis[i] = medRec.diagnosis;
            diagnosisDescription[i] = medRec.diagnosisDescription;
            prescription[i] = medRec.prescription;
        }
        return (
            startDate,
            endDate,
            daysExcused,
            diagnosis,
            diagnosisDescription,
            prescription
        );
    }
}
