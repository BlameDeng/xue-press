import * as React from 'react'

import CodeBox from '../components/codebox/CodeBox'

const componentName = 'ButtonPage'

class ButtonPage extends React.Component {
  public static displayName = componentName

  public render() {
    return (
      <div>
        <section>
          <h1>Button 按钮</h1>
          <p className="text">点击以开始即时操作。</p>
        </section>
        <section>
          <h2>何时使用</h2>
          <p className="text">响应用户点击行为，触发相应业务逻辑。</p>
        </section>
        <section>
          <h2>代码示例</h2>
        </section>
        <div className="example">
          <div className="container">效果展示区</div>
          <CodeBox
            title="按钮类型"
            description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
          >
            {'折叠代码区'}
          </CodeBox>
        </div>
        <div className="example">
          <div className="container">效果展示区</div>
          <CodeBox
            title="按钮类型"
            description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
          >
            {'折叠代码区'}
          </CodeBox>
        </div>
        <div className="example">
          <div className="container">效果展示区</div>
          <CodeBox
            title="按钮类型"
            description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
          >
            {'折叠代码区'}
          </CodeBox>
        </div>
        <div className="example">
          <div className="container">效果展示区</div>
          <CodeBox
            title="按钮类型"
            description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
          >
            {'折叠代码区'}
          </CodeBox>
        </div>
        <section>
          <h2>API</h2>
        </section>
        <table className="api-table">
          <thead>
            <tr>
              <th>参数</th>
              <th className="des">说明</th>
              <th className="type">类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>icon</td>
              <td className="des">内嵌 Icon 图标的 name 属性</td>
              <td className="type">string</td>
              <td>——</td>
            </tr>
            <tr>
              <td>position</td>
              <td className="des">内嵌 Icon 图标的位置</td>
              <td className="type">'left' | 'right'</td>
              <td>'left'</td>
            </tr>
          </tbody>
        </table>
        <section>
          <h2>Method</h2>
        </section>
        <table className="method-table">
          <thead>
            <tr>
              <th>名称</th>
              <th className="des">描述</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>focus()</td>
              <td className="des">获取焦点</td>
              <td className="params">——</td>
            </tr>
            <tr>
              <td>blur()</td>
              <td className="des">移除焦点</td>
              <td className="params">——</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ButtonPage
