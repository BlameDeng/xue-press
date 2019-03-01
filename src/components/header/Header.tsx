import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classes } from 'src/utils'
import './style'

interface IHeaderProps {
  className?: string
  style?: React.CSSProperties
}

const componentName = 'Header'

class Header extends React.Component<IHeaderProps> {
  public static displayName = componentName

  public static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  public render() {
    const cn = componentName
    const { className, style, children } = this.props
    return (
      <header className={classes(cn, '', [className])} style={style}>
        {children}
      </header>
    )
  }
}

export default Header
