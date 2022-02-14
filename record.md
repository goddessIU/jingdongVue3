# 首页制作
## BEM
```html
<div class="docker">
    <span class="docker_item docker_item--active">
      <div class="iconfont">&#xe696;</div>
      <div class="docker_title">首页</div>
    </span>
</div>
```
BEM模式的体现
<!-- 未完成 -->

## style文件夹
base.scss  用来存放基础的样式
iconfont.css 阿里图标的css
index.scss 将上面二者这些全局使用的引入，在导入到main.js入口文件，避免入口文件引入过多scss
mixins.scss  一些css的公共处理，将一些css合成一个公共功能，再导出，如单行文字省略号
viriables.scss 一些特殊css处理，如字体颜色，等使用时导出，作为变量

这些做法，就是为了统一管理，减少工作量，例如改变字体颜色，可以实现统一的改变

## 字体小于10px
```css
    transform: scale(0.5 0.5);
    font-size: 0.2rem;
```

使用scale

## 加载图片避免图片下方内容抖动
```css
.wrapper {
    height: 0;
    overflow: hidden;//似乎用处不大
    padding-bottom: 38%;//图片高： 宽
    width: 100%;//似乎也是可有可无
}
```
```html
<div class="wrapper">
    <img>
</div>
```
因为图片需要加载，所以要为其占位，否则下方内容会抖动。heigth: 0让wrapper这个div没有高度，即只是占位，不影响img。padding 与 margin用%计算时，都是按照父元素宽度算。所以width： 100%让wrapper和父元素一个宽度。padding-bottom为图片宽高比，为图片预留了一个高度

## margin负值
https://zhuanlan.zhihu.com/p/25892372

