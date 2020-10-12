import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      token: localStorage.getItem('token') || '',
      user: "",
      loggedIn: "",
      errors: "",
      loading:"",
      success: "",
      userboard: ''
  },
  mutations:{
    Auth_request (state) {
      state.loading = 'loading...'
    },
    user (state, user) {
      state.userboard = user
    },
    Auth_success (state, message) {
        state.success =  message.user + ', ' + message.msg
    },
    Auth_error (state, message) {
      state.errors =  message
  }
  }, 
  actions:{
    // login
    login({commit}, inputs) {
      return new Promise ((resolve, reject) => {
        // validation
        if (!inputs.email || !inputs.password) {
          throw new Error('Wrong email or password')
        }
        commit('Auth_request')
        axios.post('/user/login', {email: inputs.email, password: inputs.password}).then(res => {
          const token = res.data.data.token
          const  user = res.data.data.username
          localStorage.setItem('token', token)
          // axios.defaults.headers.common['Authorization'] = token
          commit('Auth_success', {user, msg: 'logged in successfully'})

          resolve(res)
        }).catch(err => {
          commit('Auth_error', err.response.data.error)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    signup({commit}, inputs) {
      return new Promise ((resolve, reject) => {
        // validation
        if (!inputs.email || !inputs.password || !inputs.username) {
          throw new Error('Wrong Email or Password or Username')
        }
        commit('Auth_request')
        axios.post('/user/signup', {email: inputs.email, username: inputs.username, password: inputs.password}).then(res => {
          const token = res.data.token
          const  user = res.data.username
          localStorage.setItem('token', token)
          // // axios.defaults.headers.common['Authorization'] = token
          commit('Auth_success', {user, msg: 'logged in successfully'})
          console.log(res)
          resolve(res)
        }).catch(err => {
          console.log(err)
          commit('Auth_error', err.response.data.error)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    }
  },
  getters:{}
})
