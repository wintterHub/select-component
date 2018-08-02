<template>
  <div>
    <el-select v-model="vModel" multiple filterable remote reserve-keyword placeholder="placeholder" :remote-method="remoteMethod"
      :loading="loading">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: '请输入关键词',
        required: true,
      },
      vModel: {
        type: String,
        required: true,
      },
      action: {//选项值异步请求地址
        type: String,
        required: true,
      }
    },
    data() {
      return {
        options: [],
        list: [],
        loading: false
      }
    },
    mounted() {

    },
    methods: {
      async remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = await axios(`${this.action}`, { value: vModel }).data.data;
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
  }
</script>