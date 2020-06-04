import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // move machine state and inventory into separate vuex modules //
    machineName: "Bender",
    lastServiced: new Date(),
    machineCondition: "workig",
    inventory: [
      {
        productName: "Yay Chips",
        supply: 10
      },
      {
        productName: "Chips of Cookies",
        supply: 15
      },
      {
        productName: "Bag of Bretzels",
        supply: 3
      },
      {
        productName: "Corn Crisps",
        supply: 11
      },
      {
        productName: "Triangle Chips",
        supply: 2
      },
      {
        productName: "Cheese Dust",
        supply: 0
      }
    ]
  },
  getters: {
    serviceDateTime(state) {
      const date = state.lastServiced.toLocaleString("default", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      const time = state.lastServiced.toLocaleString("default", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      });
      return {
        date,
        time
      };
    },
    isMachineWorking(state) {
      return state.machineCondition === "working";
    },
    isSupplyLow(state) {
      return state.inventory.filter(item => item.supply <= 5);
    }
  },
  actions: {
    serviceMachine({ commit }) {
      commit("updateServiceDateTime", new Date());
    }
  },
  mutations: {
    updateServiceDateTime(state, payload) {
      state.lastServiced = payload;
    }
  }
});
