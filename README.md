# h-select

远程搜索下拉框

## 安装

> npm install h-select --dev-save

## 引入
```js
improt HSelect from 'h-select'
Vue.use(HSelect)
```
## 使用方式
```HTML
<h-select 
  :model="value" 
  action="/api/options1" 
  @change="onChange">
</h-select>
```
## 属性

- model 输入框中的值
- action 下拉选项列表的异步请求地址
- placeholder 占位符

## 事件
- change 选中值发生变化时触发，回调参数为目前的选中值