import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  timeout: 4000
})


export default new Vuex.Store({
  state: {
    apod: {}
  },
  mutations: {
    setAPOD(state, data) {
      state.apod = data
    }
  },
  actions: {
    async getAPODBySearch({ commit, dispatch }, searchDate) {
      nasaApi.get('apod?api_key=T1Ldw33bcXfNyXUQunjWheAGVVKr0YuWY1CUnqCZ&date=' + searchDate).then(res => {
        commit("setAPOD", res.data)
      }).catch(err => res.status(400).send(err))
    }
  }
})
