// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract User {
    string public userName;
    string public userGender;
    string public userEmail;
    uint256 public userAge;
    string public userPhoneNumber;
    string public userAddress;
    address public userPrivAddress;

    constructor(
        string memory username,
        string memory usergender,
        string memory useremail,
        uint256 userage,
        string memory userphoneNumber,
        string memory useraddress,
        address userprivaddress
    ) {
        userName = username;
        userGender = usergender;
        userEmail = useremail;
        userAge = userage;
        userPhoneNumber = userphoneNumber;
        userAddress = useraddress;
        userPrivAddress = userprivaddress;
    }
}
