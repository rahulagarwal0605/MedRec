// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Organization.sol";

contract Admin {
    mapping(address => Organization) private hospitalList;
    address private adminAddress;

    modifier onlyAdmin() {
        require(adminAddress == msg.sender, "User is not an admin");
        _;
    }

    constructor() {
        adminAddress = tx.origin;
    }

    function addHospital(
        string memory hospName,
        string memory hospEmail,
        Organization.PhoneNumber memory hospPhoneNumber,
        Organization.Address memory hospAddress,
        address privAddress
    ) public onlyAdmin {
        Organization h = new Organization(
            hospName,
            hospEmail,
            hospPhoneNumber,
            hospAddress
        );
        hospitalList[privAddress] = h;
    }

    function removeHospital(address privAddress) public {
        delete hospitalList[privAddress];
    }
}
