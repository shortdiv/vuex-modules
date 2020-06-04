import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    machine: "hello"
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    inventory: {
      namespaced: true,
      state: {
        supply: [
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
        isSupplyLow(state) {
          return state.supply.filter(item => item.supply <= 5);
        }
      }
    },
    machine: {
      namespaced: true,
      state: {
        machineName: "Bender",
        lastServiced: new Date(),
        machineCondition: "workig"
      },
      actions: {
        serviceMachine({ commit }) {
          debugger;
          commit("updateServiceDate", new Date());
        }
      },
      mutations: {
        updateServiceDate(state, payload) {
          state.lastServiced = payload;
        }
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
        }
      }
    }
  }
});
