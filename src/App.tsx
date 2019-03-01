import * as React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'

import InstallPage from './pages/InstallPage'
import StartPage from './pages/StartPage'
import ButtonPage from './pages/ButtonPage'
import IconPage from './pages/IconPage'
import TablePage from './pages/TablePage'

import { Provider } from './Context'

import 'src/style/App.css'

interface IRouteOption {
  path: string // 路由路径，唯一标志
  content: string | React.ReactNode // 在导航栏中显示的内容
  page?: any // 路由对应的页面，如果有 children 属性，此属性可不设置
  className?: string // 自定义类名
  style?: React.CSSProperties // 自定义样式
  itemGroup?: boolean // SubMenu 分组模式
  showArrow?: boolean // SubMenu 箭头图标
  children?: IRouteOption[]
}

interface IAppState {
  routes: IRouteOption[]
}

class App extends React.Component<{}, IAppState> {
  public state = {
    routes: [
      {
        path: '/install',
        content: 'Install',
        page: InstallPage
      },
      {
        path: '/start',
        content: 'Start',
        page: StartPage
      },
      {
        path: '/components',
        content: (
          <div
            style={{
              height: '40px',
              fontSize: '14px',
              lineHeight: '40px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.65)'
            }}
          >
            Components
          </div>
        ),
        itemGroup: true,
        showArrow: false,
        children: [
          {
            path: '/common',
            content: '通用',
            itemGroup: true,
            showArrow: false,
            children: [
              {
                path: '/button',
                content: 'Button',
                page: ButtonPage
              },
              {
                path: '/icon',
                content: 'Icon',
                page: IconPage
              }
            ]
          },
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
        ]
      }
    ]
  }

  public renderRoute = (routes: IRouteOption[]): any => {
    return routes.map(route => {
      if (route.children && route.children.length) {
        return this.renderRoute(route.children)
      } else {
        return (
          <Route key={route.path} path={route.path} component={route.page} />
        )
      }
    })
  }

  public render() {
    const { routes } = this.state
    return (
      <Provider value={routes}>
        <Router>
          <div className="App">
            <Header>自定义 Header</Header>
            <Main>
              <Route path="/" component={NavBar} />
              <div style={{ padding: '20px', flexGrow: 1 }}>
                {this.renderRoute(routes)}
              </div>
            </Main>
            <Footer>自定义 Footer</Footer>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
