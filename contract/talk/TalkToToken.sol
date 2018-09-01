pragma solidity ^0.4.19;

import "./Ownable.sol";
import "./StringUtils.sol";

contract TalkToToken is Ownable {

    address public talker;
    
    function withdrawToTalker() external onlyOwner {
        talker.transfer(msg.value);
    }

    event NewMessage(string _username, string data, uint _value);
    
    struct Message {
      string username;
      string data;
      unit value;
    }
    
    string[] valueString = new string[]('区块链','共识机制','去中心化','CITA','存在性证明','经济模型','智能合约',
'侧链')

    Message memory msg;

    mapping (string => address) public msgToOwner;

    function _newMsg(string _name, string _date, uint _value) internal {

        for (uint i = 0; i < valueString.length; i++) {
            if (_date.substring(valueString[i] > 0) {
            _value++;
            }
        }

        msg.username = _name;
        msg.data = _date;
        msg.value = _value;
    }

    function newMsg(string _name, string _data,) public {
        //require(ownerTableCount[msg.sender] == 0);
        _createTable(_name, _data, 0);
    }
    

}