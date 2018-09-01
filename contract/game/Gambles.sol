pragma solidity ^0.4.19;

import "./TableFactory.sol";

contract Gambles is TableFactory {

    modifier ownerOf(uint _tableId) {
        require(msg.sender == tableToOwner[_tableId]);
        _;
    }
    
}