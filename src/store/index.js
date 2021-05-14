import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(require('vue-faker'));

export default new Vuex.Store({
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
    ],
    calorieItems: [
      {
        id: 1,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%',
      },
      {
        id: 2,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%',
      },
      {
        id: 3,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%',
      },
      {
        id: 4,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%',
      },
    ],
  },
  mutations: {
    // Synchronous
    // Mutations are used to update state
    setCurrentQuote(state, payload) {
      state.allQuotes.push(payload);
    },
    setCalorieCards(state, payload){
      state.calorieItems = payload
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
      state.commit("setCurrentQuote", fakeData);
    },

    deleteOneItem( state , id ){
      const removeCalorie = this.state.calorieItems.filter(item => item.id !== id)
      state.commit('setCalorieCards', removeCalorie )
    }
  },
  getters: {
    getCurrentCard: state => state.current,
    getAllQuotes: state => state.allQuotes,
    getAllCalories: state => state.calorieItems
  }
})
