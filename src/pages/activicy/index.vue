<style scoped lang="less">
</style>

<template>
  <div class="page">
    <div @click="routeTest">路由测试</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {
    routeTest () {
      this.$router.push('/pages/index/main')
    }
  },
  onLoad (options) {
    console.log(options)
  },
  onShow () {}
}
</script>

<style>
page {
  width: 100%;
  background: #f5f5f5;
}
</style>
