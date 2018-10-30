import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    Breadcrumb: '用户统计',
    tableTitle: 'yhtj', // 导航name
    tableData: {
      yhtj: [],
      hz: [],
      crj: [],
      jg: []
    }
  },
  mutations: {
    changeBreadcrumb (state, e) {
      switch (e) {
        case 'yhtj': state.Breadcrumb = '用户统计'
          break
        case 'hz': state.Breadcrumb = '户政'
          break
        case 'crj': state.Breadcrumb = '出入境'
          break
        case 'jg': state.Breadcrumb = '交管'
          break
      }
      //   state.Breadcrumb = e
    },
    changeTableTitle (state, String) {
      state.tableTitle = String
      console.log(state.tableTitle)
    },
    changeTableData (state, Array) {
      state.tableData[state.tableTitle] = Array
    }
  }
})