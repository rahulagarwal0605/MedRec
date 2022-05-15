// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Doctor.sol";

contract Organization {
    struct PhoneNumber {
        uint256 areaCode;
        uint256 phoneNumber;
    }
    struct Address {
        string streetAddress;
        string city;
        string state;
        uint256 postalCode;
        string country;
    }
    string orgName;
    string orgEmail;
    PhoneNumber orgPhoneNumber;
    Address orgAddress;
    mapping(address => Doctor) private doctorList;

    constructor(
        string memory hospName,
        string memory hospEmail,
        PhoneNumber memory hospPhoneNumber,
        Address memory hospAddress
    ) {
        orgName = hospName;
        orgEmail = hospEmail;
        orgPhoneNumber = hospPhoneNumber;
        orgAddress = hospAddress;
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
}
