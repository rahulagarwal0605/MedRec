// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Organization.sol";

contract Admin {
    Organization[] private hospitalList;
    address private owner;

    constructor() {
        owner = tx.origin;
    }

    modifier onlyAdmin() {
        require(owner == msg.sender, "User is not an admin");
        _;
    }

    function addHospital(
        string memory name,
        string memory email,
        uint256 areaCode,
        uint256 phoneNumber,
        string memory streetAddress,
        string memory city,
        string memory state,
        string memory postalCode,
        string memory country
    ) public onlyAdmin {
        Organization h = new Organization(
            name,
            email,
            areaCode,
            phoneNumber,
            streetAddress,
            city,
            state,
            postalCode,
            country
        );
        hospitalList.push(h);
    }
}
