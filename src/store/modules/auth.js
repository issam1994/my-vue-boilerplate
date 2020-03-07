import router from '../../router'
import axios from 'axios'

const state = {
    token: null
}

const getters = {
    isAuthenticated: ({ token }) => token ? true : false
}

const mutations = {
    saveToken(state, token) {
        state.token = token
        localStorage.setItem('token', token)
    },
    destroyToken() {
        localStorage.removeItem('token');
        state.token = null;
    },
    navigateTo(state, path) {
        router.push(path)
    }
}

const actions = {
    async register({ commit }, payload) {
        try {
            let { token } = (await axios.post('/auth/register', payload)).data
            commit("saveToken", token)
            commit("navigateTo", '/profile')
        } catch (e) {
            console.log("error in register()", e)
        }
    },
    async login({ commit }, payload) {
        try {
            let { token } = (await axios.post('/auth/login', payload)).data
            commit("saveToken", token)
            commit("navigateTo", '/profile')
        } catch (e) {
            console.log("error in login()", e)
        }
    },
    tryAutoLogin({ commit }) {
        let token = localStorage.getItem('token')
        if (!token) {
            return
        } else {
            commit('saveToken', token)
        }
    },
    logOut({ commit }) {
        commit('destroyToken')
        commit('navigateTo', '/login')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}