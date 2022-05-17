// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Organization.sol";

contract Admin {
    address private adminAddress;
    mapping(address => Organization) private hospitalList;
    Organization[] private hospitallist;

    constructor() {
        adminAddress = tx.origin;
    }

    function getAdminAddress() public view returns (address) {
        return adminAddress;
    }

    function addHospital(
        string memory hospName,
        string memory hospEmail,
        Organization.PhoneNumber memory hospPhoneNumber,
        Organization.Address memory hospAddress,
        address privAddress
    ) public {
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

    function getHospital(address privAddress)
        public
        view
        returns (Organization)
    {
        return hospitalList[privAddress];
    }

    function getHospitalList() public view returns (Organization[] memory) {
        return hospitallist;
    }
}
