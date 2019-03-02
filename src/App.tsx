import * as React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Icon } from 'xue-react'

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
            <Header>
              <div
                style={{
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Header 内容自行替换</span>
                <div style={{ paddingRight: '20px' }}>
                  <Icon
                    name="github"
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                    size={24}
                    onClick={() =>
                      window.open(
                        'https://github.com/BlameDeng/xue-press',
                        '_blank'
                      )
                    }
                  />
                  <Icon
                    name="snow"
                    style={{ cursor: 'pointer' }}
                    size={24}
                    onClick={() =>
                      window.open(
                        'https://github.com/BlameDeng/xue-react',
                        '_blank'
                      )
                    }
                  />
                </div>
              </div>
            </Header>
            <Main>
              <Route path="/" component={NavBar} />
              <div style={{ padding: '20px', flexGrow: 1 }}>
                {this.renderRoute(routes)}
              </div>
            </Main>
            <Footer>Footer 内容自行替换</Footer>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
