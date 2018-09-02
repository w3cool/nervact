<template>
  <div>
    <list-title title="查看代码"></list-title>
    <div class="group-intro">
      <div class="group-title">查看游戏规则代码</div>
    </div>
    <div class="tab-container">
      <div
        v-for="tab in tabs" 
        :key="tab.key"
        :class="[
          'tab-item',
          {'tab-item-active': tab.key === activeTab},
        ]"
        @click.stop="changeTab(tab.key)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div v-if="activeTab === 2">
      <div class="group-info">
        <p> pragma solidity ^0.4.19;  </p>
        <p>   </p>
        <p> import "./TableFactory.sol";  </p>
        <p>   </p>
        <p> contract Gambles is TableFactory {  </p>
        <p>   </p>
        <p>     modifier ownerOf(uint _tableId) {  </p>
        <p>         require(msg.sender == tableToOwner[_tableId]);  </p>
        <p>         _;  </p>
        <p>     }  </p>
        <p>       </p>
        <p> }  </p>
      </div>
    </div>
    <div v-if="activeTab === 1">
      <div class="group-info">
        <p>  /**  </p>
        <p>   * @title Ownable  </p>
        <p>   * @dev The Ownable contract has an owner address, and provides basic authorization control  </p>
        <p>   * functions, this simplifies the implementation of "user permissions".  </p>
        <p>   */  </p>
        <p>  contract Ownable {  </p>
        <p>    address public owner;  </p>
        <p>    </p>
        <p>    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);  </p>
        <p>    </p>
        <p>    /**  </p>
        <p>     * @dev The Ownable constructor sets the original `owner` of the contract to the sender  </p>
        <p>     * account.  </p>
        <p>     */  </p>
        <p>    function Ownable() public {  </p>
        <p>      owner = msg.sender;  </p>
        <p>    }  </p>
        <p>    </p>
        <p>    </p>
        <p>    /**  </p>
        <p>     * @dev Throws if called by any account other than the owner.  </p>
        <p>     */  </p>
        <p>    modifier onlyOwner() {  </p>
        <p>      require(msg.sender == owner);  </p>
        <p>      _;  </p>
        <p>    }  </p>
        <p>    </p>
        <p>    </p>
        <p>    /**  </p>
        <p>     * @dev Allows the current owner to transfer control of the contract to a newOwner.  </p>
        <p>     * @param newOwner The address to transfer ownership to.  </p>
        <p>     */  </p>
        <p>    function transferOwnership(address newOwner) public onlyOwner {  </p>
        <p>      require(newOwner != address(0));  </p>
        <p>      OwnershipTransferred(owner, newOwner);  </p>
        <p>      owner = newOwner;  </p>
        <p>    }  </p>
        <p>    </p>
        <p>  }  </p>
      </div>
    </div>
    <div v-if="activeTab === 3">
      <div class="group-info">
        <p>  pragma solidity ^0.4.19;   </p>
        <p>     </p>
        <p>  import "./Ownable.sol";   </p>
        <p>     </p>
        <p>  contract TableFactory is Ownable {   </p>
        <p>         </p>
        <p>      event NewTable(uint tableId, string name, uint fee);   </p>
        <p>     </p>
        <p>      uint cooldownTime = 1 days;   </p>
        <p>     </p>
        <p>      struct Table {   </p>
        <p>        string name;   </p>
        <p>        uint[] players;   </p>
        <p>        unit32 fee;   </p>
        <p>        unit32 total;   </p>
        <p>        uint8 top1 = 100;   </p>
        <p>        uint8 top2 = 0;   </p>
        <p>        uint8 top3 = 0;   </p>
        <p>        uint32 readyTime;   </p>
        <p>      }   </p>
        <p>     </p>
        <p>      Table[] public tables;   </p>
        <p>     </p>
        <p>      mapping (uint => address) public tableToOwner;   </p>
        <p>      mapping (address => uint) ownerTableCount;   </p>
        <p>     </p>
        <p>      function _createTable(string _name, uint _fee, uint8 _top1, uint8 _top2, uint8 _top3) internal {   </p>
        <p>          uint id = tables.push(Table(_name, _dna, 1, _fee, 0, _top1, _top2, _top3, uint32(now + cooldownTime))) - 1;   </p>
        <p>          tableToOwner[id] = msg.sender;   </p>
        <p>          ownerTableCount[msg.sender]++;   </p>
        <p>          NewTable(id, _name, );   </p>
        <p>      }   </p>
        <p>     </p>
        <p>      function createTable(string _name, uint _fee,) public {   </p>
        <p>          //require(ownerTableCount[msg.sender] == 0);   </p>
        <p>          _createTable(_name, _fee, 100, 0, 0);   </p>
        <p>      }   </p>
        <p>         </p>
        <p>  }   </p>
      </div>
    </div>
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle';

export default {
  components: {
    ListTitle,
  },
  data() {
    return {
      tabs: [
        {
          key: 1, 
          name: 'Ownable.sol',
        },
        {
          key: 2, 
          name: 'Gambles.sol',
        },
        {
          key: 3, 
          name: 'TableFactory.sol',
        },
      ],
      activeTab: 2,
    }
  },
  
  mounted() {
  },

  methods: {
    // 切换tab
    changeTab(key) {
      this.activeTab = key;
    },
  },
};
</script>
<style lang="scss" scoped>
.group-intro {
  background-color: white;
  padding: 12px;
  .group-title {
    font-size: .9em;
    color: rgba(0, 0, 0, .75);
  }
  .group-inro-content {
    font-size: .8em;
    color: rgba(0, 0, 0, .55);
    height: 20px;
    display: flex;
    align-items: center;
  }
}
.group-info {
  background-color: white;
  margin-top: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: .8em;
  color: rgba(0, 0, 0, .55);
}
.tab-container {
  display: flex;
  justify-content: space-between;
  .tab-item {
    text-align: center;
    width: 250rpx;
    height: 36px;
    padding-top: .4em;
    border-bottom: 1px solid #cccccc;
    color: rgba(0, 0, 0, .75);
    background-color: #cccccc;
    font-size: .9em;
    border-right: 1px solid #eeeeee;
  }
  .tab-item-active {
    border-bottom: 1px solid #006dff;
    color: #006dff;
    background-color: white;
  }
}
</style>

