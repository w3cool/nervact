pragma solidity ^0.4.19;

import "./Ownable.sol";

contract TableFactory is Ownable {
    
    event NewTable(uint tableId, string name, uint fee);

    uint cooldownTime = 1 days;

    struct Table {
      string name;
      uint[] players;
      unit32 fee;
      unit32 total;
      uint8 top1 = 100;
      uint8 top2 = 0;
      uint8 top3 = 0;
      //add it
      uint32 readyTime;
    }

    Table[] public tables;

    mapping (uint => address) public tableToOwner;
    mapping (address => uint) ownerTableCount;

    function _createTable(string _name, uint _fee, uint8 _top1, uint8 _top2, uint8 _top3) internal {
        uint id = tables.push(Table(_name, _dna, 1, _fee, 0, _top1, _top2, _top3, uint32(now + cooldownTime))) - 1;
        tableToOwner[id] = msg.sender;
        ownerTableCount[msg.sender]++;
        NewTable(id, _name, );
    }

    function createTable(string _name, uint _fee,) public {
        //require(ownerTableCount[msg.sender] == 0);
        _createTable(_name, _fee, 100, 0, 0);
    }
    
}