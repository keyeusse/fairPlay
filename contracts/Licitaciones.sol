pragma solidity ^0.4.4;

contract Licitacion {

    string public name;
    string public price;
    string public time;
    string public experience;

    address public owner = msg.sender;

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    function setName(string _name) onlyOwner {
        name = _name;
    }

    function setPrice(string _price) onlyOwner {
        price = _price;
    }

    function setTime(string _time) onlyOwner {
        time = _time;
    }

    function setExp(string _experience) onlyOwner {
        experience = _experience;
    }
}
