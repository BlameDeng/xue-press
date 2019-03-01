import * as React from 'react'

interface IRouteOption {
  path: string
  content: string | React.ReactNode
  page?: any
  className?: string
  style?: React.CSSProperties
  itemGroup?: boolean
  showArrow?:boolean
  children?: IRouteOption[]
}

export const { Provider, Consumer } = React.createContext<IRouteOption[]>([])
