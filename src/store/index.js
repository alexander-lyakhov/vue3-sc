import { createStore } from 'vuex'
import api from '@/api/index.js'

const reg = /.*;sort=([a-z,A-Z,0-9,-]*).+/i

export default createStore({
  state: {
    resultCount: {},
    sortings: [],
    facets: [],
    products: []
  },

  mutations: {
    SET_DATA(state, data) {
      data.sortings.forEach(item => {
        item.sort = item.link.replace(reg, '$1')
      })

      Object.keys(state).forEach(key => {
        state[key] = data[key]
      })

      console.log('SET_PRODUCTS', {...state.sortings})
    }
  },

  actions: {
    async GET_PRODUCTS({ commit }, urlParams) {
      const { data } = await api.getProducts(urlParams)
      commit('SET_DATA', data)
    }
  },
})
