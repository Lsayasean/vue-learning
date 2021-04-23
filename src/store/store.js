import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    current: {
        author: "Lanrna",
        desc: "Sleep for its raining outside! "
      },
    allQuotes: [
      {
        author: "Lanrna",
        desc: "Sleep for its raining outside! "
      },
    ]
  },
  mutations: {
    // Synchronous
    // Mutations are used to update state
    setCurrentQuote(state, payload) {
      state.allQuotes.push(payload);
    }

  },
  actions: {
    // Asynchronous
    // Actions are used to commit mutations
    setCurrentJoke(state) {
      const fakeData = 
      {
        author: Vue.faker().name.firstName(),
        desc: Vue.faker().random.words(7)
      }
      console.log(fakeData)
      state.commit("setCurrentQuote", fakeData);
    }
  },
  getters: {
    getCurrentCard: state => state.current,
    getAllQuotes: state => state.allQuotes
  }
})
