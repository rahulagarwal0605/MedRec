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
        string memory hospPhoneNumber,
        string memory hospAddress,
        address privAddress
    ) public {
        Organization h = new Organization(
            hospName,
            hospEmail,
            hospPhoneNumber,
            hospAddress,
            privAddress
        );
        hospitalList[privAddress] = h;
        hospitallist.push(h);
    }

    function removeHospital(address privAddress) public {
        delete hospitalList[privAddress];
        uint256 index;
        for (uint256 i = 0; i < hospitallist.length; i++) {
            if (hospitallist[i].orgPrivAddress() == privAddress) {
                index = i;
                break;
            }
        }
        for (uint256 i = index; i < hospitallist.length - 1; i++) {
            hospitallist[i] = hospitallist[i + 1];
        }
        hospitallist.pop();
    }

    function getHospital(address privAddress)
        public
        view
        returns (Organization)
    {
        return (hospitalList[privAddress]);
    }

    function getHospitalList()
        public
        view
        returns (
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            address[] memory
        )
    {
        string[] memory hospName = new string[](hospitallist.length);
        string[] memory hospEmail = new string[](hospitallist.length);
        string[] memory hospPhoneNumber = new string[](hospitallist.length);
        string[] memory hospAddress = new string[](hospitallist.length);
        address[] memory hospPrivAddress = new address[](hospitallist.length);
        for (uint256 i = 0; i < hospitallist.length; i++) {
            hospName[i] = hospitallist[i].orgName();
            hospEmail[i] = hospitallist[i].orgEmail();
            hospPhoneNumber[i] = hospitallist[i].orgPhoneNumber();
            hospAddress[i] = hospitallist[i].orgAddress();
            hospPrivAddress[i] = hospitallist[i].orgPrivAddress();
        }
        return (
            hospName,
            hospEmail,
            hospPhoneNumber,
            hospAddress,
            hospPrivAddress
        );
    }
}
