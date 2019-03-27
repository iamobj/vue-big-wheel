<!-- demo测试专用的页面 -->
<template>
  <div id="demo">
    <div class="box">
      <vue-big-wheel
        ref="luckyWheel"
        :prizeList = 'listData'
        :colors = 'colors'
        fontColor = 'red'
        goClassName = 'btn'
        :strMaxLength = '14'
        :strLineLength = '6'
        strKey='name'
        @go-click = "go"
        @on-over = "onOver"
      >
      </vue-big-wheel>
    </div>
  </div>
</template>

<script>
import vueBigWheel from "@/components/vue-big-wheel/index";
export default {
  data() {
    return {
      listData: [
        {name: "iphone 6s", val: 1},
        {name: "马来西亚一周游", val: 2},
        {name: "谢谢参与", val: 0},
        {name: "满10减5购物券", val: 3},
        {name: "谢谢参与", val: 0},
        {name: "全球限量定制版GTX2080Ti显卡", val: 8},
        {name: "10元话费充值券", val: 4},
        {name: "谢谢参与", val: 0},
      ],
      colors: ["#F47F45", "#FFA468"],
      targetIndex: 0
    };
  },
  mounted() {},
  methods: {
    onOver() {
      alert(this.listData[this.targetIndex].name)
    },
    go(event) {
      console.log("TCL: go -> event", event)
      // 模拟请求 200ms
      setTimeout(() => {
        // 随机
        this.targetIndex = Math.floor(Math.random() * this.listData.length)
				console.log("TCL: go -> this.targetIndex", this.targetIndex)
        this.$refs.luckyWheel.rotateFunc(this.targetIndex)
      }, 200);
    },

  },
  components: {
    vueBigWheel
  }
};
</script>
<style  lang='scss'>
#demo {
  width: 100vw;
  min-height: 100vh;
  background-image: url('./assets/img/wheel_bg.jpg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  overflow: hidden;
  .box {
    box-sizing: border-box;
    width: 3.42rem;
    height: 3.42rem;
    margin: 1.7rem auto 0;
    padding: .22rem;
    background-image: url('./assets/img/disk_bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    overflow: hidden;
    .btn { // 使用自定义类 不能用scope
      width: 1.12rem;
    }
  }
}
</style>
