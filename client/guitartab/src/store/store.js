import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state:
    {
        token: null,
        loggedIn: false
    },
    mutations:
    {
        setToken(state, token)
        {
            state.token = token;
            state.loggedIn = token != null;
        }
    }
    ,
    actions: {
        setToken({ commit }, token)
        {
            commit('setToken', token)
        }
    }
})