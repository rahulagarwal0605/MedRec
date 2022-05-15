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
        Name memory patientName,
        uint256 patientGender,
        string memory patientEmail,
        uint256 patientAge,
        PhoneNumber memory patientPhoneNumber,
        Address memory patientAddress
    )
        User(
            patientName,
            patientGender,
            patientEmail,
            patientAge,
            patientPhoneNumber,
            patientAddress
        )
    {}

    function addMedRec(MedicalRecord memory medRec) public {
        patientMedRec.push(medRec);
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
