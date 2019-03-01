import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PropTypes from 'prop-types'

const componentName = 'StartPage'

class StartPage extends React.Component {
  public static displayName = componentName

  public static defaultProps = {}

  public static propTypes = {}

  public render() {
    const cn = componentName
    return <div>StartPage</div>
  }
}

export default StartPage
