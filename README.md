# Xue-press

## 一个基于 [Xue-react](https://github.com/BlameDeng/xue-react) 的 React 组件库文档模板（风格类似 ant-design）

![](https://img.shields.io/badge/license-MIT-000000.svg)

## 使用

### 克隆项目到本地

```
$ git clone git@github.com:BlameDeng/xue-press.git
```

### 安装依赖

```
$ npm install
$ yarn
```

### 本地开发

```
$ npm start
$ yarn start
```

### 构建打包

```
$ npm build
$ yarn build
```

### 开发说明

#### 路由配置

XuePress 的路由导航使用了 [Xue-react](https://github.com/BlameDeng/xue-react) 的 Menu 组件。通过修改 App 组件的 routes 状态来修改路由，其相关属性配置可参考接口及注释说明。需要注意的是，当子元素定义了 children 属性时，该元素将被渲染为 SubMenu 组件，否则将被渲染为 MenuItem 组件。
示例：

```javascript
      {
        path: '/install',
        content: 'Install',
        page: InstallPage
      }
```

此数据结构将被渲染为：

```html
<MenuItem key="/install">Install</MenuItem>
```

点击此组件路由将跳转至 '/install'，对应页面为 InstallPage 组件。

```js
          {
            path: '/data',
            content: '数据',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/table',
                content: 'Table',
                page: TablePage
              }
            ]
          }
```

这个数据结构将被渲染为：

```html
<SubMenu key="/data" title="数据" itemGroup={true} showArrow={false}>
  <MenuItem key="/table">Table</MenuItem>
</SubMenu>
```

#### 页面配置

一个完整的示例模板为：

```html
<div className="example">
  <div className="container">效果展示区</div>
  <CodeBox
    title="按钮类型"
    description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
  >
    {'折叠代码区'}
  </CodeBox>
</div>
```

在 container 中写入效果展示代码（组件），在折叠代码区写入需要展示的代码（自行使用代码高亮插件）。

保持 ButtonPage.tsx 中的 JSX 结构即可使用与示例一致的样式，只需要根据组件的不同而修改文本描述即可。

Header、Main、Footer 组件均可自定义类名及样式。Header、Footer 内容均可自定义。

### 完整效果可预览 [Xue-react文档](https://blamedeng.github.io/xue-react)。

### 如果这个项目对你有帮助，请不要吝惜你的 Star。
