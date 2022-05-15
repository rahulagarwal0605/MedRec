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
        uint256 postalCode;
        string country;
    }

    Name userName;
    Gender userGender;
    string userEmail;
    uint256 userAge;
    PhoneNumber userPhoneNumber;
    Address userAddress;

    constructor(
        Name memory username,
        uint256 usergender,
        string memory useremail,
        uint256 userage,
        PhoneNumber memory userphoneNumber,
        Address memory useraddress
    ) {
        userName = username;
        if (usergender == 0) userGender = Gender.Male;
        else userGender = Gender.Female;
        userEmail = useremail;
        userAge = userage;
        userPhoneNumber = userphoneNumber;
        userAddress = useraddress;
    }
}
