import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classes } from 'src/utils'
import './style'

interface IFooterProps {
  className?: string
  style?: React.CSSProperties
}

const componentName = 'Footer'

class Footer extends React.Component<IFooterProps> {
  public static displayName = componentName

  public static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  public render() {
    const cn = componentName
    const { className, style, children } = this.props
    return (
      <footer className={classes(cn, '', [className])} style={style}>
        {children}
      </footer>
    )
  }
}

export default Footer
