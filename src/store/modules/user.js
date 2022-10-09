import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { getToken, setToken, setTimeStamp } from '@/utils/auth'
// import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    // name: '',
    // avatar: '',
    userInfo: {}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  setUserInfo(state, result) {
    state.userInfo = result
  },
  removeUserInfo(state) {
    state.userInfo = {}
  },
  removeToken(state) {
    state.token = null
  }
}

const actions = {
  // user login
  async login(context, data) {
    const result = await login(data)
    context.commit('SET_TOKEN', result)
    // context.commit('setToken', result)
    setToken(result)
    setTimeStamp()
  },

  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password: password }).then(response => {
  //       const { data } = response
  //       commit('SET_TOKEN', data.token)
  //       setToken(data.token)
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // get user
  async getUserInfo(context) {
    const result = await getUserInfo()
    const baseInfo = await getUserDetailById(result.userId)
    const baseResult = { ...result, ...baseInfo }
    context.commit('setUserInfo', baseResult)
    // console.log(result)
    // moni模拟数据
    // const userData = `{"success":true,"code":10000,"data":{"userId":"604f764971f93f3ac8f365c2","mobile":"13800000002","username":"大良造李成良","roles":{"menus":["employees","settings","permissions","social_securitys","approvals","attendances","salarys","departments"],"points":["aa"],"apis":[]},"companyId":"1","company":"传智播客"},"message":"获取资料成功"}`
    // userData2 = `{"success":true,"code":10000,"data":{"staffPhoto":"http://q6cu3t6jv.bkt.clouddn.com/1063705989926227968?t=1616204161907","id":"604f764971f93f3ac8f365c3","mobile":"13800000003","username":"孙财","password":"e10adc3949ba59abbe56e057f20f883e","timeOfEntry":"2018-11-04","workNumber":"111","correctionTime":"2018-11-20","departmentName":"市场部","roleIds":["604e2b25488be61b90b6877b"],"companyId":"1","companyName":"传智播客"},"message":"获取用户基本信息成功"}`
    // console.log(userData)
    return baseResult
  },
  // getInfogetInfo({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     getInfo(state.token).then(response => {
  //       const { data } = response

  //       if (!data) {
  //         return reject('Verification failed, please Login again.')
  //       }

  //       const { name, avatar } = data

  //       commit('SET_NAME', name)
  //       commit('SET_AVATAR', avatar)
  //       resolve(data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // user logout
  logout(context) {
    // context.commit('removeToken')
    context.commit('removeToken')
    context.commit('removeUserInfo')
    // context.commit('removeInfo')
  },
  // logout({ commit, state }) {
  //   // context.commit('removeToken')
  //   removeToken()
  //   resetRouter()
  //   commit('RESET_STATE')
  //   // context.commit('removeInfo')
  // },
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token).then(() => {
  //       removeToken() // must remove  token  first
  //       resetRouter()
  //       commit('RESET_STATE')
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      // removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

