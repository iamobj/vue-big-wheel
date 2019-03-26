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
        :strMaxLength = '5'
        :strLineLength = '3'
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "7",
        "8",
        "画字画字画字",
        "8",
        "7",
        "8",
      ],
      colors: ["#F47F45", "#FFA468"],
      targetIndex: 0
    };
  },
  mounted() {},
  methods: {
    onOver() {
      console.log(this.listData[this.targetIndex])
    },
    go(event) {
      console.log('TCL: go -> event', event)
      setTimeout(() => {
        this.targetIndex = 3
        this.$refs.luckyWheel.rotateFunc(this.targetIndex)
      }, 200);
    },
    drawRouletteWheel() {
      var canvas = document.getElementById("wheelcanvas");
      if (canvas.getContext) {
        //根据奖品个数计算圆周角度
        var arc = Math.PI / (turnplate.restaraunts.length / 2);
        var ctx = canvas.getContext("2d");
        var r = 245; //半径
        //在给定矩形内清空一个矩形
        ctx.clearRect(0, 0, r * 2, r * 2);
        //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
        ctx.strokeStyle = "#FFBE04";
        //font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = "16px Microsoft YaHei";
        for (var i = 0; i < turnplate.restaraunts.length; i++) {
          var angle = turnplate.startAngle + i * arc;
          ctx.fillStyle = turnplate.colors[i % 2];
          ctx.beginPath();
          //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
          ctx.arc(r, r, turnplate.outsideRadius, angle, angle + arc, false);
          ctx.arc(r, r, turnplate.insideRadius, angle + arc, angle, true);
          ctx.stroke();
          ctx.fill();
          //锁画布(为了保存之前的画布状态)
          ctx.save();

          //----绘制奖品开始----
          ctx.fillStyle = "#525252";
          var text = turnplate.restaraunts[i];
          var line_height = 24;
          //translate方法重新映射画布上的 (0,0) 位置
          ctx.translate(
            r + Math.cos(angle + arc / 2) * turnplate.textRadius,
            r + Math.sin(angle + arc / 2) * turnplate.textRadius
          );

          //rotate方法旋转当前的绘图
          ctx.rotate(angle + arc / 2 + Math.PI / 2);

          /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
          if (text.indexOf("M") > 0) {
            //流量包
            var texts = text.split("M");
            for (var j = 0; j < texts.length; j++) {
              if (j == 0) {
                ctx.fillText(
                  texts[j] + "M",
                  -ctx.measureText(texts[j] + "M").width / 2,
                  j * line_height
                );
              } else {
                ctx.fillText(
                  texts[j],
                  -ctx.measureText(texts[j]).width / 2,
                  j * line_height
                );
              }
            }
          } else if (text.indexOf("减") != -1) {
            //奖品名称长度超过一定范围
            var texts = text.split("减");
            for (var j = 0; j < texts.length; j++) {
              ctx.font =
                j == 0 ? "bold 20px Microsoft YaHei" : "16px Microsoft YaHei";
              if (j == 0) {
                ctx.fillText(
                  texts[j],
                  -ctx.measureText(texts[j]).width / 2,
                  j * line_height
                );
              } else {
                ctx.fillText(
                  "减" + texts[j],
                  -ctx.measureText("减" + texts[j]).width / 2,
                  j * line_height
                );
              }
            }
          } else {
            //在画布上绘制填色的文本。文本的默认颜色是黑色
            //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
          }
          //把当前画布返回（调整）到上一个save()状态之前
          ctx.restore();
          //----绘制奖品结束----
        }
      }
    }
  },
  components: {
    vueBigWheel
  }
};
</script>
<style  lang='scss'>
#demo {
  width: 100vw;
  height: 100vh;
  background: rgb(97, 168, 168);
  .box {
    // width: 300px;
    // height: 300px;
    overflow: hidden;
    .btn { // 使用自定义类 不能用scope
      // width: 2rem;
      // top: 1px;
    }
  }
}
</style>
