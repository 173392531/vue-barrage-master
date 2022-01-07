# vue-barrage

一款基于vue的弹幕组件

## 在线demo

http://null_639_5368.gitee.io/vue-barrage/#/

## 功能介绍

1.支持弹幕发射的方向：滑动、顶部

2.支持全局弹幕暂停和局部鼠标浮动弹幕暂停

3.支持js弹幕, 解析html标签(该功能会导致一系列安全问题，需做好弹幕关键词过滤。)

4.性能良好，滑动弹幕采用dom按需加载和队列复用的方式，动画采用transform3d 开启css硬件加速。

## 文档

关于组件导入：直接复制 components 里面VBarrage文件夹到自己的项目即可

```
 <!-- 确保父元素是相对定位，弹幕容器是绝对定位 -->
<v-barrage :arr="arr" // 传入的弹幕源数组
           :isPause="isPause" // 控制是否暂停弹幕
           :percent="100" // 弹幕的屏幕占比
</v-barrage>
```
```
// 弹幕对象
{
   content: this.sendContent, // 弹幕内容
   direction: this.direction, // 方向  default | top
   isSelf: true, // 是否是自己发的弹幕
   style: {
           color: 'red' // 弹幕颜色
   },
   isJs: false  // 是否解析html
}
```
## demo源码

https://gitee.com/null_639_5368/vue-barrage/blob/master/src/views/Home.vue