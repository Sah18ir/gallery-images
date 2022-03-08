import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        productList: null,
    },
    mutations: {
        setProductList(state, newData) {
            state.productList - newData
        }
    },
    actions: {
        getProductListFromServer({ commit, dispatch }, page) {
            axios.get(`products?page=${page}`).then(res => {
                commit("setProductList", res)
                dispatch("func")
            })
        },
        func() {

        }
    },
    getters: {
        getProductList(state) {
            return state.productList;
        }
    },
    modules: {}
})