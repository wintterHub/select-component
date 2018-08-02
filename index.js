import hselect from './select.vue'

const Loading = {
  install: function (Vue) {
    Vue.component('h-select', hselect)
  }
}

export default Loading
