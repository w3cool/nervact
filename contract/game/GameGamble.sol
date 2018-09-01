pragma solidity ^0.4.19;

import "./TableFactory.sol";

contract GameGamble is Gambles {
 
    uint Fee = 100 ether;
    address public winner;
 
    function setFee(uint _fee) external onlyOwner {
        Fee = _fee;
    }
 
    function withdraw() external onlyOwner {
        owner.transfer(this.balance);
    }

    function withdraw(address _address) external onlyOwner {
        _address.transfer(this.balance);
    }
    
    function withdrawToWinner() external onlyOwner {
        winner.transfer(this.balance);
    }
    
    //need payFee
    function levelUp(uint _tableId) external payable {
        require(msg.value == Fee);
        tables[_tableId].total = tables[_tableId].total + tables[_tableId].fee;
    }
    
    function changeName(uint _tableId, string _newName) external aboveLevel(2, _tableId) ownerOf(_tableId) {
        tables[_tableId].name = _newName;
    }

    function getTablesByOwner(address _owner) external view returns(uint[]) {
        uint[] memory result = new uint[](ownerTableCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < tables.length; i++) {
            if (tableToOwner[i] == _owner) {
            result[counter] = i;
            counter++;
            }
        }
        return result;
    }
    
}