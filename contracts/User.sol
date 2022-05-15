// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract User {
    struct Name {
        string firstName;
        string lastName;
    }
    enum Gender {
        Male,
        Female
    }
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

    Name userName;
    Gender userGender;
    string userEmail;
    uint256 userAge;
    PhoneNumber userPhoneNumber;
    Address userAddress;

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
    ) {
        userName = Name(firstName, lastName);
        if (gender == 0) userGender = Gender.Male;
        else userGender = Gender.Female;
        userEmail = email;
        userAge = age;
        userPhoneNumber = PhoneNumber(areaCode, phoneNumber);
        userAddress = Address(streetAddress, city, state, postalCode, country);
    }
}
