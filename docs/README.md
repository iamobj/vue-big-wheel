# **vue-big-wheel**

## **介绍**
### **vue-big-wheel是什么**

------

vue-big-wheel是基于vue2封装的转盘抽奖组件，使用的是canvas来完成的，支持多种配置选项，且不依赖任何框架，非常小，开箱即用

### **作者自语**

------

某天接到一个需求，要做个大转盘抽奖的页面，于是乎，拿到需求后，网上找了一圈看看有没有现成的组件，发现没有（可能是我找的方式不对），于是乎在快速开发完任务后，就计划着自己撸一个，以后肯定用得上，顺便学习下发npm包，这是我第一次写组件并发布到npm上:smiley:，组件有写的不完美的地方，欢迎各路好友提bug，提建议，希望把这个组件做的更完美，大家有什么需求也可以去[github](https://github.com/iamobj/vue-big-wheel)提issues，想了解编写这个组件到发布的历程请[点击这里](https://iamc.cc/index.php/2019/03/27/520/)

## **安装 / 使用**

在项目根目录下执行如下命令安装：

```
npm i vue-big-wheel -S
```

接下来在代码中引入，就和平常使用组件一样

```vue
<template>
	<div id="demo">
		<div class="box">
			<vue-big-wheel>
			</vue-big-wheel>
		</div>
	</div>
</template>
<script>
import vueBigWheel from 'vue-big-wheel'
export default {
  components: {
    vueBigWheel
  }
}
</script>
<style lang="scss">
  #demo {
    .box {
      width: 200px;
      height: 200px;
    }
  }
</style>
```

注：因为大转盘是个圆，组件内部并没有定死高宽，所以需要再套一个正方形的div，这个div多大，转盘就多大。

### **demo**

------

关于组件的选项和事件，下面会一个个介绍，这里先放一个demo，大家先看看效果，因为做的是手机端的，所以用手机端扫描二维码体验好一点（用了rem适应，电脑端打开比较大 :grimacing:）

demo代码[点这里](https://github.com/iamobj/vue-big-wheel/blob/master/src/App.vue)

网址：[https://wheel.assetss.cn/](https://wheel.assetss.cn/)

![](https://github.com/iamobj/graph-bed/blob/master/1/2019_03_27_1637467593.png?raw=true)



## **选项（有默认值的选项都可以不传值）**

### **prizeList-奖品列表**

------

- 类型：Array (必须是对象数组，建议数组长度要是偶数，奇数渲染出来不好看)
- 作用：显示在转盘上的奖品

```javascript
<vue-big-wheel
	:prizeList = "listData"
>
</vue-big-wheel>
/**************/
data() {
  return {
    listData: [
      {title: "iphone6s"},
      {title: "GTX2080Ti"}
    ]
  }
}

```

### **strKey-奖品名称对应的key**

------



- 类型：String
- 作用：显示奖品名称

```javascript
<vue-big-wheel
	:prizeList = 'listData'
	strKey = 'title'
>
</vue-big-wheel>
/**************/
data() {
  return {
    listData: [
      {title: "iphone6s"},
      {title: "GTX2080Ti"}
    ]
  }
}
```



### **colors-奖品区块对应的填充色**

------

- 类型：Array (颜色值字符串数组-支持RGB，HSL，RGBA，HSLA以及HEX色值，如果要传就必需传两个，不能多也不能少)
- 默认值：["#F47F45", "#FFA468"]
- 作用：每个奖品区的背景填充色，两个颜色轮换填充

```javascript
<vue-big-wheel
	:colors = "colors"
>
</vue-big-wheel>
/**************/
data() {
  return {
    colors: ['red', 'blue']
  }
}
```

### **transitionDuration-旋转动画时间**

------



- 类型：Number （单位s）
- 默认值：8
- 作用：点击开始抽奖旋转动画时间

```javascript
<vue-big-wheel
	:transitionDuration = "6"
>
</vue-big-wheel>
```

### **fontColor-奖品字体颜色**

------



- 类型：String （支持RGB，HSL，RGBA，HSLA以及HEX色值）
- 默认值：'#7D2A00'
- 作用：奖品名称的字体颜色

```javascript
<vue-big-wheel
	fontColor = "red"
>
</vue-big-wheel>
```

### **fontSize-奖品文字字体大小**

------



- 类型：String
- 默认值：'18px'
- 作用：控制奖品文字字体大小
- 注意：单位写px，不要写rem或者其它，如果套的父级那个div是自适应大小的，整个画板会跟着放大缩小，字和图形都跟着被放大缩小，所以不需要rem单位且canvas在移动端真机上rem单位无效，谷歌浏览器倒是正常

```javascript
<vue-big-wheel
	fontSize = "16px"
>
</vue-big-wheel>
```

### **fontFamily-奖品文字字体**

------



- 类型：String
- 默认值：'Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif'
- 作用：设置奖品文字字体（基本够用，不需要改）

### **strMaxLength-奖品文字总长度限制**

------

- 类型：Number
- 默认值：0 （0表示不限制）
- 作用：控制文字总长度限制，比如奖品名字是"香港一日游"要限制字数不能超过3个，传3，则显示出来的是"香港..."

```javascript
<vue-big-wheel
	:strMaxLength = "3"
>
</vue-big-wheel>
```

### **strLineLength-多行奖品文字第一行文字长度**

------



- 类型：Number
- 默认值：0（0表示不限制）
- 作用：文字较多，需要两行展示时，这个值是控制第一行文字长度

### **goBtnImg-开始按钮图片地址**

------



- 类型：String
- 默认值：内置的一张图片（就是demo页里的按钮图片）
- 作用：设置开始按钮图片

### **goClassName-开始按钮自定义的类名**

------



- 类型：String
- 作用：自定义开始按钮类名，可在页面通过自定义类名控制样式（注意，页面样式不可加scoped，样式加了这个，这个页面的样式就只控制这个页面的，我称它局部样式，局部样式是不能控制引入组件内部的样式）

```javascript
<vue-big-wheel
	goClassName = 'btn'
>
</vue-big-wheel>
/*****************/
// <style  lang='scss' scoped> 不要在style标签上加scoped属性
<style  lang='scss'>
  .btn {
    width: 100px;
  }
</style>
```

## **方法**

### **rotateFunc-转盘旋转**

------



- 参数：
  - {Number} targetIndex 目标奖品在prizeList数组中的下标

- 作用：调用该方法，传入目标下标，转盘就开始旋转

```javascript
<vue-big-wheel
	ref = "bigWheel"
>
</vue-big-wheel>
/*****************/
getData() {
  // 通过请求接口返回中奖数据 得知中奖奖品在奖品数组中的下标是2 然后调用rotateFunc方法，转盘开始旋转
  this.$refs.bigWheel.rotateFunc(2)
}
```

## **事件**

### **go-click 点击开始按钮触发**

------

- 触发时机：点击开始按钮触发

```javascript
<vue-big-wheel
	@go-click = "go"
>
</vue-big-wheel>
/*****************/
go() {
  // 想要在点击按钮执行一些什么，就写在这里
}
```

### **on-over 停止转动时触发**

------

- 触发时机：转盘转完，停止转动时触发

```javascript
<vue-big-wheel
	@on-over = "onOver"
>
</vue-big-wheel>
/*****************/
onOver() {
  // 想要在转盘转完后执行一些什么，就写在这里，比如转完后弹出奖品
  alert('恭喜您获得。。。')
}
```

