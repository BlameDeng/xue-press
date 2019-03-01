import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classes } from 'src/utils'
import { Icon, Popover, Unfold } from 'xue-react'

import './style'

interface ICodeProps {
  title: string
  description: string
  defaultVisible?: boolean // 代码默认是否展开
}

interface ICodeState {
  codeVisible: boolean
}

class CodeBox extends React.Component<ICodeProps, ICodeState> {
  public static displayName = 'CodeBox'

  public static defaultProps = {
    defaultVisible: false
  }

  public static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    defaultVisible: PropTypes.bool
  }

  constructor(props: ICodeProps) {
    super(props)
    this.state = {
      codeVisible: props.defaultVisible as boolean
    }
  }

  public toggleVisible = () => {
    this.setState({
      codeVisible: !this.state.codeVisible
    })
  }

  public render() {
    const { title, description, children } = this.props
    const { codeVisible } = this.state
    return (
      <div className="code-example-box">
        <div className="code-title">{title}</div>
        <div
          className={classes('', ['code-description'], {
            'code-visible': codeVisible
          })}
        >
          {description}
          <Popover
            content={
              <div className="pop-content-code-tips">
                {codeVisible ? 'Hide Code' : 'Show Code'}
              </div>
            }
            style={{ backgroundColor: '#000' }}
          >
            <span className="icon-wrapper" onClick={this.toggleVisible}>
              <Icon name="codepen" />
            </span>
          </Popover>
        </div>
        <Unfold vertical={true} visible={codeVisible}>
          <div className="code-example">{children && children}</div>
        </Unfold>
      </div>
    )
  }
}

export default CodeBox
