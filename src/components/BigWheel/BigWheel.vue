<!-- 幸运大转盘 -->
<template>
  <div class="__big-wheel" ref="bigWheel" :style="{width, height}">
    <div class="wrap" :style="{transform: rotateAngle, transition: rotateTransition}">
      <canvas id="canvas" ref="canvas">浏览器版本过低</canvas>
      <div class="prize-wrap">
        <div
          class="item"
          v-for="(item,index) in prizeList"
          :key="index"
          :style="_calcRotateAngle(index)">
          <slot name="item" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigWheel',
  props: {
    prizeList: { // 奖品列表
      type: Array,
      required: true
    },
    width: {
      required: true
    },
    height: {
      required: true
    },
    prizeBgColors: { // 每一块扇形的背景色，循环填充
      type: Array,
      default: () => ['#F47F45', '#FFA468']
    },
    borderColor: { // 每一块扇形的外边框颜色
      type: String,
      default: '#ff9800'
    },
    turnsNumber: { // 转动的圈数
      type: Number,
      default: 5
    },
    turnsTime: { // 转动持续时间（秒）
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      startRotateDegree: 0, // 开始转动的角度
      rotateAngle: 'rotate(30deg)', // 设置指针默认指向的位置,现在是默认指向1个扇形中间，设置为0即指向两个扇形之间的线上
      rotateTransition: ''
    }
  },
  methods: {
    // 初始化canvas
    init() {
      const prizeNum = this.prizeList.length
      const prizeBgColors = this.prizeBgColors
      const borderColor = this.borderColor
      // 绘画
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      const canvasW = this.$refs.canvas.width = this.$refs.bigWheel.clientWidth // 画板的高度
      const canvasH = this.$refs.canvas.height = this.$refs.bigWheel.clientHeight // 画板的宽度

      // translate方法重新映射画布上的 (0,0) 位置
      ctx.translate(0, canvasH)

      // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
      ctx.rotate(-90 * Math.PI / 180)

      // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小
      const outRadius = canvasW / 2 - 1
      
      const innerRadius = 0 // 圆环的内圆的半径

      const baseAngle = Math.PI * 2 / prizeNum // 每个奖项所占角度数

      ctx.clearRect(0, 0, canvasW, canvasH) // 去掉背景默认色

      ctx.strokeStyle = borderColor // 设置画图线的颜色

      let prizeBgColorsIndex = -1
      for (let index = 0; index < prizeNum; index++) {
        const angle = index * baseAngle
        
        // 设置每个扇形区域的背景色，循环填充
        prizeBgColorsIndex++
        ctx.fillStyle = prizeBgColors[prizeBgColorsIndex]
        if (prizeBgColorsIndex === prizeBgColors.length - 1) {
          prizeBgColorsIndex = -1
        }

        ctx.beginPath() // 开始绘制
        // 标准圆弧：arc(x,y,radius,startAngle,endAngle,anticlockwise)
        ctx.arc(canvasW * 0.5, canvasH * 0.5, outRadius, angle, angle + baseAngle, false)
        ctx.arc(canvasW * 0.5, canvasH * 0.5, innerRadius, angle + baseAngle, angle, true)
        ctx.stroke()
        ctx.fill()
        ctx.save()
      }
    },
    /**
     * 圆盘转动方法
     * @param {number} index - 中奖的奖品序号
     */
    rotate(index) {
      const turnsTime = this.turnsTime
      const rotateAngle = this.startRotateDegree + this.turnsNumber * 360 + 360 - (180 / this.prizeList.length + 360 / this.prizeList.length * index) - this.startRotateDegree % 360
      this.startRotateDegree = rotateAngle
      this.rotateAngle = `rotate(${rotateAngle}deg)`
      this.rotateTransition = `transform ${turnsTime}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`
      setTimeout(() => {
        this.$emit('over', this.prizeList[index])
      }, turnsTime * 1000 + 500)
    },
    // 根据index计算每一个奖品扇形要旋转的角度样式
    _calcRotateAngle(index) {
      const angle = 360 / this.prizeList.length * index + (180 / this.prizeList.length)
      return {
        transform: `rotate(${angle}deg)`
      }
    },
  },
  mounted() {
    this.init()
  },
}

</script>
<style lang="scss" scoped>
.__big-wheel {
  position: relative;
  display: inline-block;
  .wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    .prize-wrap {
      position: absolute;
      left: 25%;
      top: 0;
      width: 50%;
      height: 50%;
      .item {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform-origin: center bottom;
      }
    }
  }
}
</style>
