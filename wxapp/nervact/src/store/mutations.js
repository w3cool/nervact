/* eslint-disable */
import {
  SAVE_USER_INFO,
  SAVE_WALLET,
  SAVE_TRENS,
  SAVE_FRIENDS,
  SAVE_INGROUP,
  SAVE_OUTGROUP,
  SAVE_CONTRANCTS,
  SAVE_MONEY,
  SAVE_TOKENS,
  SAVE_ADDRESS,
} from './mutation-types';

export default {
  [SAVE_USER_INFO](state, v) {
    state.userInfo = v;
  },
  [SAVE_WALLET](state, v) {
    state.wallet = v;
  },
  [SAVE_TRENS](state, v) {
    state.trends = v;
  },
  [SAVE_FRIENDS](state, v) {
    state.friends = v;
  },
  [SAVE_INGROUP](state, v) {
    state.inGroup = v;
  },
  [SAVE_OUTGROUP](state, v) {
    state.outGroup = v;
  },
  [SAVE_CONTRANCTS](state, v) {
    state.contracts = v;
  },
  [SAVE_MONEY](state, v) {
    state.money = v;
  },
  [SAVE_TOKENS](state, v) {
    state.tokens = v;
  },
  [SAVE_ADDRESS](state, v) {
    state.address = v;
  },
};
