<template>
  <div>
    <el-select v-model="model" filterable remote reserve-keyword :placeholder="placeholder" :remote-method="remoteMethod" :loading="loading"
      @change="onChange">
      <el-option v-for="item in options" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      model: {
        type: String,
        required: true,
      },
      action: {//选项值异步请求地址
        type: String,
        default: '',
      }
    },

    data() {
      return {
        options: [],
        list: [],
        loading: false
      }
    },

    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(async () => {
            this.loading = false;
            let res = await axios.get(`${this.action}/${query}`);
            this.options = res.data;
          }, 300);
        } else {
          this.options = [];
        }
      },

      onChange() {
        this.$emit('change', this.model)
      }
    }
  }
</script>