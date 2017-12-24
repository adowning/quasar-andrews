import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let state = {
    layoutNeeded: true,
    isLoginPage: false,
    mobileMode: false,
    menuCollapse: true,
    currentChannel: null,
    isPrivate: false,
    posts: []
}

let mutations = {
    SET_CURRENT_CHANNEL(state, channel) {
        state.currentChannel = channel
    },
    SET_PRIVATE(state, isPrivate) {
        state.isPrivate = isPrivate
    },
    setLayoutNeeded(state, value) {
        state.layoutNeeded = value
    },
    setIsLoginPage(state, value) {
        state.isLoginPage = value
    },
    setMobileMode(state, value) {
        state.mobileMode = value
    },
    setMenuCollapse(state, value) {
        state.menuCollapse = value
    },
    setPosts(state, posts) {
        state.posts = posts
    }
}

const actions = {
    setCurrentChannel({ commit }, channel) {
        commit('SET_CURRENT_CHANNEL', channel)
    },
    setPrivate({ commit }, isPrivate) {
        commit('SET_PRIVATE', isPrivate)
    }
}

let getters = {
    getLayoutNeeded() {
        return state.layoutNeeded
    },
    getIsLoginPage() {
        return state.isLoginPage
    },
    getMobileMode() {
        return state.mobileMode
    },
    getMenuCollapse() {
        return state.menuCollapse
    },
    getPosts() {
        return state.posts
    },
    currentChannel: state => state.currentChannel,
    isPrivate: state => state.isPrivate
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})