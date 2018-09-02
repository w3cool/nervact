<template>
  <div>
    <list-title title="查看代码"></list-title>
    <div class="group-intro">
      <div class="group-title">查看群聊规则代码</div>
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
        <!-- <p>pragma solidity ^0.4.19;</p>
        <p>import "./zombiefactory.sol";</p>
        <p>// Create KittyInterface here</p>
        <p>function </p>
        <p>contract ZombieFeeding is ZombieFactory { </p>
        <p>function feedAndMultiply(uint _zombieId, uint _targetDna) public { </p>
        <p>require(msg.sender == zombieToOwner[_zombieId]);</p>
        <p>Zombie storage myZombie = zombies[_zombieId];</p>
        <p>_targetDna = _targetDna % dnaModulus;</p>
        <p>uint newDna = (myZombie.dna + _targetDna) / 2;</p>
        <p>_createZombie("NoName", newDna);</p>
        <p> }</p>
        <p> }</p> -->
      </div>
    </div>
    <div v-if="activeTab === 1">
      <div class="group-info">
        <p>  /**  </P>
        <p>   * @title Ownable  </P>
        <p>   * @dev The Ownable contract has an owner address, and provides basic authorization control  </P>
        <p>   * functions, this simplifies the implementation of "user permissions".  </P>
        <p>   */  </P>
        <p>  contract Ownable {  </P>
        <p>    address public owner;  </P>
        <p>    </P>
        <p>    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);  </P>
        <p>    </P>
        <p>    /**  </P>
        <p>     * @dev The Ownable constructor sets the original `owner` of the contract to the sender  </P>
        <p>     * account.  </P>
        <p>     */  </P>
        <p>    function Ownable() public {  </P>
        <p>      owner = msg.sender;  </P>
        <p>    }  </P>
        <p>    </P>
        <p>    </P>
        <p>    /**  </P>
        <p>     * @dev Throws if called by any account other than the owner.  </P>
        <p>     */  </P>
        <p>    modifier onlyOwner() {  </P>
        <p>      require(msg.sender == owner);  </P>
        <p>      _;  </P>
        <p>    }  </P>
        <p>    </P>
        <p>    </P>
        <p>    /**  </P>
        <p>     * @dev Allows the current owner to transfer control of the contract to a newOwner.  </P>
        <p>     * @param newOwner The address to transfer ownership to.  </P>
        <p>     */  </P>
        <p>    function transferOwnership(address newOwner) public onlyOwner {  </P>
        <p>      require(newOwner != address(0));  </P>
        <p>      OwnershipTransferred(owner, newOwner);  </P>
        <p>      owner = newOwner;  </P>
        <p>    }  </P>
        <p>    </P>
        <p>  }  </P>

      </div>
    </div>
    <div v-if="activeTab === 3">
      <div class="group-info">
        <p>  pragma solidity ^0.4.19;  </P>
        <p>    </P>
        <p>  import "./Ownable.sol";  </P>
        <p>  import "./StringUtils.sol";  </P>
        <p>    </P>
        <p>  contract TalkToToken is Ownable {  </P>
        <p>    </P>
        <p>      address public talker;  </P>
        <p>        </P>
        <p>      function withdrawToTalker() external onlyOwner {  </P>
        <p>          talker.transfer(msg.value);  </P>
        <p>      }  </P>
        <p>    </P>
        <p>      event NewMessage(string _username, string data, uint _value);  </P>
        <p>        </P>
        <p>      struct Message {  </P>
        <p>        string username;  </P>
        <p>        string data;  </P>
        <p>        unit value;  </P>
        <p>      }  </P>
        <p>        </P>
        <p>      string[] valueString = new string[]('区块链','共识机制','去中心化','CITA','存在性证明','经济模型','智能合约',  </P>
        <p>  '侧链')  </P>
        <p>    </P>
        <p>      Message memory msg;  </P>
        <p>    </P>
        <p>      mapping (string => address) public msgToOwner;  </P>
        <p>    </P>
        <p>      function _newMsg(string _name, string _date, uint _value) internal {  </P>
        <p>    </P>
        <p>          for (uint i = 0; i &gt; valueString.length; i++) {  </P>
        <p>              if (_date.substring(valueString[i] > 0) {  </P>
        <p>              _value++;  </P>
        <p>              }  </P>
        <p>          }  </P>
        <p>    </P>
        <p>          msg.username = _name;  </P>
        <p>          msg.data = _date;  </P>
        <p>          msg.value = _value;  </P>
        <p>      }  </P>
        <p>    </P>
        <p>      function newMsg(string _name, string _data,) public {  </P>
        <p>          //require(ownerTableCount[msg.sender] == 0);  </P>
        <p>          _createTable(_name, _data, 0);  </P>
        <p>      }  </P>
        <p>        </P>
        <p>    </P>
        <p>  }  </P>

      </div>
    </div>
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle';
import { TalkToToken } from '../../constants.js'

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
            key: 3, 
            name: 'TalkToToken.sol',
          },
        {
          key: 2, 
          name: 'stringUtils.sol',
        },
      ],
      activeTab: 1,
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
    border-right: #eeeeee;
  }
  .tab-item-active {
    border-bottom: 1px solid #006dff;
    color: #006dff;
    background-color: white;
  }
}
</style>

