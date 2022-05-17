// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Doctor.sol";

contract Organization {
    string public orgName;
    string public orgEmail;
    string public orgPhoneNumber;
    string public orgAddress;
    address public orgPrivAddress;
    mapping(address => Doctor) private doctorList;

    constructor(
        string memory hospName,
        string memory hospEmail,
        string memory hospPhoneNumber,
        string memory hospAddress,
        address hospPrivAddress
    ) {
        orgName = hospName;
        orgEmail = hospEmail;
        orgPhoneNumber = hospPhoneNumber;
        orgAddress = hospAddress;
        orgPrivAddress = hospPrivAddress;
    }

    function addDoctor(
        Doctor.Name memory doctorName,
        string memory doctorTitle,
        uint256 doctorGender,
        string memory doctorEmail,
        uint256 doctorAge,
        Doctor.PhoneNumber memory doctorPhoneNumber,
        Doctor.Address memory doctorAddress,
        address privAddress
    ) public {
        Doctor d = new Doctor(
            doctorName,
            doctorTitle,
            doctorGender,
            doctorEmail,
            doctorAge,
            doctorPhoneNumber,
            doctorAddress
        );
        doctorList[privAddress] = d;
    }

    function removeDoctor(address privAddress) public {
        delete doctorList[privAddress];
    }

    function getDoctor(address privAddress) public view returns (Doctor) {
        return doctorList[privAddress];
    }
}
