import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

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
    async getAPOD({ commit, dispatch }) {
      let dates = [
        "2019-01-01", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-05", "2019-01-06", "2019-01-07", "2019-01-08", "2019-01-09", "2019-01-10", "2019-01-11", "2019-01-12", "2019-01-13", "2019-01-14", "2019-01-15", "2019-01-16", "2019-01-17", "2019-01-18", "2019-01-19", "2019-01-19", "2019-01-20", "2019-01-21", "2019-01-22", "2019-01-23", "2019-01-24", "2019-01-25", "2019-01-26", "2019-01-27", "2019-01-28", "2019-01-29", "2019-01-30", "2019-01-31",
      ]
      let date = await dates[Math.floor(Math.random() * Math.floor(dates.length))].toString()
      nasaApi.get('apod?api_key=T1Ldw33bcXfNyXUQunjWheAGVVKr0YuWY1CUnqCZ&date=' + date).then(res => {
        commit("setAPOD", res.data)
      }).catch(err => res.status(400).send(err))
    },
    async getAPODBySearch({ commit, dispatch }, searchDate) {
      debugger
      nasaApi.get('apod?api_key=T1Ldw33bcXfNyXUQunjWheAGVVKr0YuWY1CUnqCZ&date=' + searchDate).then(res => {
        commit("setAPOD", res.data)
      }).catch(err => res.status(400).send(err))
    }
  }
})
