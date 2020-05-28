<template>
  <div id="app">
    <div class="big-wheel-box">
      <big-wheel
        width="3rem"
        height="3rem"
        ref="bigWheel"
        :prizeList="prizeList"
        @over="over">
        <template slot="item" slot-scope="{ item }">
          <div class="prize-name">{{item.txt}}</div>
          <img class="prize-img" :src="item.img">
        </template>
      </big-wheel>

      <!-- 开始按钮 -->
      <img class="btn-go" @click="go" :src="require('@/assets/img/go.png')" />
    </div>
  </div>
</template>

<script>
import BigWheel from '@/components/BigWheel'

export default {
  name: 'App',
  data() {
    return {
      prizeList: [
        {
          txt: '土狗',
          img: require('@/assets/img/dog.jpg')
        },
        {
          txt: '边牧',
          img: require('@/assets/img/dog.jpg')
        },
        {
          txt: '哈士奇',
          img: require('@/assets/img/dog-2.jpg')
        },
        {
          txt: '金毛',
          img: require('@/assets/img/dog.jpg')
        },
        {
          txt: '傻狗',
          img: require('@/assets/img/dog.jpg')
        },
        {
          txt: '狗不理包子',
          img: require('@/assets/img/bun.png')
        }
      ],
      valve: false, // 防止连续点击
    }
  },
  methods: {
    // 开始转动
    go() {
      if (this.valve) {
        return
      }
      this.valve = true

      // 模拟随机数，这里可以请求后台获取中将信息
      const index = Math.floor(Math.random() * this.prizeList.length)
      this.winningIndex = index
      
      // 转动转盘
      this.$refs.bigWheel.rotate(index)
    },
    // 转盘转完事件
    over(prizeInfo) {
      alert(`恭喜获得${prizeInfo.txt}`)
      this.valve = false
    }
  },
  components: {
    BigWheel
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  background-image: url('~@/assets/img/wheel_bg.jpg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  .big-wheel-box {
    position: absolute;
    top: 1.7rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0;
    background-image: url('~@/assets/img/disk_bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    padding: .22rem;
    .prize-name {
      position: absolute;
      left: .13rem;
      right: .13rem;
      top: .2rem;
      font-size: .14rem;
      text-align: center;
      color: #7D2A00;
    }
    .prize-img {
      position: absolute;
      top: .58rem;
      left: 50%;
      transform: translateX(-50%);
      width: .3rem;
      height: .3rem;
    }
    .btn-go {
      position: absolute;
      top: 1.19rem;
      left: 50%;
      transform: translateX(-50%);
      width: .8rem;
    }
  }
}
</style>
