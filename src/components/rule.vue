<style lang="less" scoped>
  .zzc{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .7);
    .content{
      width: 260px;
      margin: 100px auto;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      .title{
        color: #fff;
        font-size: 15px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #ff1200;
      }
      .boxMain{
        margin: 20px 15px;
        .list{
          width: 100%;
          margin: 0 0 10px 0;
          display: flex;
          .rank{
            color: #fff;
            font-size: 9px;
            width: 14px;
            height: 14px;
            line-height: 14px;
            text-align: center;
            margin: 0 10px 0 0;
            border-radius: 7px;
            background: #ff1200;
          }
          .text{
            flex: 1;
            color: #000;
            font-size: 13px;
            line-height: 15px;
          }
        }
      }
    }
    .close{
      width: 34px;
      height: 34px;
      margin: 40px auto 0;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url("../../static/images/close.png"); 
    }
  }
</style>

<template>
  <div class="zzc">
    <div class="content fadeInDown animated">
      <div class="box">
        <div class="title">
          <span>{{ title }}</span>
        </div>
        <div class="boxMain">
          <div class="list" v-for="(item, index) in list" :key="item">
            <div class="rank">{{ index + 1 }}</div>
            <div class="text">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="close fadeInDown animated" @click="closeFunc"></div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: [Object, Array],
      default: ''
    },
    title: {
      type: String,
      default: '活动规则'
    }
  },
  methods: {
    closeFunc () {
      this.$emit('ruleChange')
    }
  }
}
</script>

