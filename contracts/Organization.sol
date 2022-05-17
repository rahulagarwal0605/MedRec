// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./Doctor.sol";

contract Organization {
    string public orgName;
    string public orgEmail;
    string public orgPhoneNumber;
    string public orgAddress;
    address public orgPrivAddress;
    mapping(address => Doctor) private doctorList;
    Doctor[] private doctorlist;

    constructor(
        string memory hospName,
        string memory hospEmail,
        string memory hospPhoneNumber,
        string memory hospAddress,
        address hospPrivAddress
    ) {
        orgName = hospName;
        orgEmail = hospEmail;
        orgPhoneNumber = hospPhoneNumber;
        orgAddress = hospAddress;
        orgPrivAddress = hospPrivAddress;
    }

    function addDoctor(
        string memory doctorName,
        string memory doctorTitle,
        string memory doctorGender,
        string memory doctorEmail,
        uint256 doctorAge,
        string memory doctorPhoneNumber,
        string memory doctorAddress,
        address privAddress
    ) public {
        Doctor d = new Doctor(
            doctorName,
            doctorTitle,
            doctorGender,
            doctorEmail,
            doctorAge,
            doctorPhoneNumber,
            doctorAddress,
            privAddress
        );
        doctorList[privAddress] = d;
        doctorlist.push(d);
    }

    function removeDoctor(address privAddress) public {
        delete doctorList[privAddress];
        uint256 index;
        for (uint256 i = 0; i < doctorlist.length; i++) {
            if (doctorlist[i].userPrivAddress() == privAddress) {
                index = i;
                break;
            }
        }
        for (uint256 i = index; i < doctorlist.length - 1; i++) {
            doctorlist[i] = doctorlist[i + 1];
        }
        doctorlist.pop();
    }

    function getDoctor(address privAddress) public view returns (Doctor) {
        return doctorList[privAddress];
    }

    function getDoctorList()
        public
        view
        returns (
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            uint256[] memory,
            string[] memory,
            string[] memory,
            address[] memory
        )
    {
        string[] memory doctName = new string[](doctorlist.length);
        string[] memory doctTitle = new string[](doctorlist.length);
        string[] memory doctorGender = new string[](doctorlist.length);
        string[] memory doctorEmail = new string[](doctorlist.length);
        uint256[] memory doctorAge = new uint256[](doctorlist.length);
        string[] memory doctorPhoneNumber = new string[](doctorlist.length);
        string[] memory doctorAddress = new string[](doctorlist.length);
        address[] memory doctorPrivAddress = new address[](doctorlist.length);
        for (uint256 i = 0; i < doctorlist.length; i++) {
            doctName[i] = doctorlist[i].userName();
            doctTitle[i] = doctorlist[i].title();
            doctorGender[i] = doctorlist[i].userGender();
            doctorEmail[i] = doctorlist[i].userEmail();
            doctorAge[i] = doctorlist[i].userAge();
            doctorPhoneNumber[i] = doctorlist[i].userPhoneNumber();
            doctorAddress[i] = doctorlist[i].userAddress();
            doctorPrivAddress[i] = doctorlist[i].userPrivAddress();
        }
        return (
            doctName,
            doctTitle,
            doctorGender,
            doctorEmail,
            doctorAge,
            doctorPhoneNumber,
            doctorAddress,
            doctorPrivAddress
        );
    }
}
