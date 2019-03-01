import * as React from 'react'
import { Menu, SubMenu, MenuItem } from 'xue-react'
import { RouteComponentProps } from 'react-router-dom'
import { classes } from 'src/utils'

import { Consumer } from '../../Context'

interface IRouteOption {
  path: string
  content: string | React.ReactNode
  page?: any
  className?: string
  style?: React.CSSProperties
  itemGroup?: boolean
  showArrow?: boolean
  children?: IRouteOption[]
}

interface INavBarProps extends RouteComponentProps {
  routes: IRouteOption[]
}

const componentName = 'NavBar'

class NavBar extends React.Component<INavBarProps> {
  public static displayName = componentName

  public handleSelectedChange = (key: string) => {
    this.props.history.push(key)
  }

  public renderChildren = (routes: IRouteOption[]) => {
    return (
      <Menu
        onSelectedChange={this.handleSelectedChange}
        style={{ borderRight: 'none', width: '280px' }}
      >
        {routes.map(route => this.renderSubMenuOrMenuItem(route))}
      </Menu>
    )
  }

  public renderSubMenuOrMenuItem = (route: IRouteOption) => {
    if (route.children && route.children.length) {
      return (
        <SubMenu
          key={route.path}
          title={route.content}
          itemGroup={!!route.itemGroup}
          showArrow={!!route.showArrow}
          className={route.className}
          style={route.className}
        >
          {route.children.map(childRoute =>
            this.renderSubMenuOrMenuItem(childRoute)
          )}
        </SubMenu>
      )
    } else {
      return (
        <MenuItem
          key={route.path}
          className={route.className}
          style={route.className}
        >
          {route.content}
        </MenuItem>
      )
    }
  }

  public render() {
    const cn = componentName
    return (
      <aside
        className={classes(cn, '')}
        style={{
          borderRight: '1px solid rgba(0,0,0,0.15)',
          marginTop: '20px',
          flexShrink: 0
        }}
      >
        <Consumer>{routes => this.renderChildren(routes)}</Consumer>
      </aside>
    )
  }
}

export default NavBar
