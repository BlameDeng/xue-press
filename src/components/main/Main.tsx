import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classes } from 'src/utils'
import './style'

interface IMainProps {
  className?: string
  style?: React.CSSProperties
}

const componentName = 'Main'

class Main extends React.Component<IMainProps> {
  public static displayName = componentName

  public static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  public render() {
    const cn = componentName
    const { className, style, children } = this.props
    return (
      <main className={classes(cn, '', [className])} style={style}>
        {children}
      </main>
    )
  }
}

export default Main
