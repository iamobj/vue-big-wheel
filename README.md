# vue-big-wheel

**vue-big-wheel**是一款基于Vue2.x封装的转盘抽奖组件，支持多种配置选项，灵活适用各种场景，且不依赖任何框架，非常小，开箱即用

移动端、PC端页面都能使用

## 版本说明

npm最新的包是1.x版本，1.x版本完全不兼容0.x，使用0.x版本的注意1.x不兼容0.x，1.x版本代码新增配置奖品图片且使用eslint规范代码且代码逻辑更清晰，比0.x配置更简化且更灵活。

1.x版本为了让指针更好的自定义就没带转盘指针，转盘指针需要自行放置，1.x只渲染转盘

[传送到0.x版本](https://github.com/iamobj/vue-big-wheel/tree/0.x)

## 安装

```
npm i vue-big-wheel -S
```

## 使用

在代码中引用，然后使用，参考[demo代码](https://github.com/iamobj/vue-big-wheel/blob/1.x/src/App.vue)
demo引用是直接引用本地组件`import BigWheel from '@/components/BigWheel'`

你们安装依赖后引用是`import BigWheel from 'vue-big-wheel'`

## API

### Props

| 参数          | 说明                                                         | 类型   | 默认值                 |
| ------------- | ------------------------------------------------------------ | ------ | ---------------------- |
| width         | 转盘的宽度                                                   | String | 无默认值，必填         |
| height        | 转盘的高度                                                   | String | 无默认值，必填         |
| prizeList     | 奖品列表                                                     | Array  | -                      |
| prizeBgColors | 每个奖品扇形的背景色，扇形循环数组填充<br />建议和奖品列表同奇偶，如奖品数组长度是奇数，则背景色长度也要是奇数 | Array  | ['#F47F45', '#FFA468'] |
| borderColor   | 每一块扇形的外边框颜色                                       | String | #ff9800                |
| turnsNumber   | 转动的圈数                                                   | Number | 5                      |
| turnsTime     | 转动持续时间                                                 | Number | 5（单位是秒）          |

### Slots

| 名称 | 说明                                               |
| ---- | -------------------------------------------------- |
| item | 自定义每个奖品区域显示，参数为每个奖品信息{ item } |

### Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| over   | 转盘停止转动后的回调函数 | 中奖的奖品信息 |

### 方法

通过ref拿到组件实例并调用实例方法`this.$refs.bigWheel.rotate(index)`

| 方法名 | 说明         | 参数                              | 返回值 |
| ------ | ------------ | --------------------------------- | ------ |
| rotate | 转盘转动方法 | index：中奖奖品在奖品列表中的下标 | -      |



## Demo

demo是做的手机端页面，电脑查看请用手机模式查看

[https://wheel.assetss.cn/v1](https://wheel.assetss.cn/v1/)

手机扫描下面二维码查看

![](https://wheel.assetss.cn/images/qcode_v1.png)

再贴张效果图镇楼:joy:

![](https://raw.githubusercontent.com/iamobj/graph-bed/master/1/screencapture-wheel-assetss-cn-v1-2020-05-28-11_07_54.png)

## 最后

有问题或者需求等欢迎提[Issues](https://github.com/iamobj/vue-big-wheel/issues)，走过路过，点个Star再走呗

![](https://wheel.assetss.cn/images/20180216747654_SHTqLE.jpg)