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
        string memory hospName,
        string memory hospEmail,
        Organization.PhoneNumber memory hospPhoneNumber,
        Organization.Address memory hospAddress
    ) public onlyAdmin {
        Organization h = new Organization(
            hospName,
            hospEmail,
            hospPhoneNumber,
            hospAddress
        );
        hospitalList.push(h);
    }
}
