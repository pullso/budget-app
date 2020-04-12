import Vue from 'vue';

const budgetStore = {
  namespaced: true,
  state: {
    totalBalance: 0,
    list: {
      1: {
        type: 'INCOME',
        value: 10000,
        comment: 'Разработка сайта',
        id: 1
      },
      2: {
        type: 'OUTCOME',
        value: -2500,
        comment: 'Услуги дизайнера ',
        id: 2
      },
      3: {
        type: 'INCOME',
        value: 30000,
        comment: 'Создание приложения',
        id: 3
      }
    }
  },
  getters: {
    list: state => state.list,
    totalBalance(state) {
      return Object.values(state.list).reduce(
        (acc, item) => acc + (item.type === 'INCOME' ? 1 : -1) * Math.abs(item.value),
        state.totalBalance
      );
    }
  },
  mutations: {
    ADD_OPERATION(state, operation) {
      Vue.set(state.list, operation.id, operation);
    },
    DELETE_OPERATION(state, id) {
      Vue.delete(state.list, id);
    }
  },
  actions: {
    addNewOperation({ commit }, operations) {
      const newOperation = { ...operations, id: String(Math.random()) };
      commit('ADD_OPERATION', newOperation);
    },
    deleteOperation({ commit }, id) {
      commit('DELETE_OPERATION', id);
    }
  }
};
export default budgetStore;
