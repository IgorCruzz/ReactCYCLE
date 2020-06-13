import React, { FunctionComponent } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import Layout from '../pages/_layout/default'

const RouteWrapper : FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}: {
  component?: any
}) => {
  return (
    <Route {...rest} render={ props => <Layout> <Component {...props} /> </Layout> } />
  )
}

export default RouteWrapper
