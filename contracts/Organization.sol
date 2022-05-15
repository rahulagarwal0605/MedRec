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
        string postalCode;
        string country;
    }
    string orgName;
    string orgEmail;
    PhoneNumber orgPhoneNumber;
    Address orgAddress;
    address metaMaskAddr;

    Doctor[] private doctorList;

    constructor(
        string memory name,
        string memory email,
        uint256 areaCode,
        uint256 phoneNumber,
        string memory streetAddress,
        string memory city,
        string memory state,
        string memory postalCode,
        string memory country
    ) {
        orgName = name;
        orgEmail = email;
        orgPhoneNumber = PhoneNumber(areaCode, phoneNumber);
        orgAddress = Address(streetAddress, city, state, postalCode, country);
    }

    function addDoctor(
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
    ) public {
        Doctor d = new Doctor(
            firstName,
            lastName,
            doctorTitle,
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
        doctorList.push(d);
    }

    function removeDoctor(uint256 index) public {
        for (uint256 i = index; i < doctorList.length - 1; i++) {
            doctorList[i] = doctorList[i + 1];
        }
        doctorList.pop();
    }
}
