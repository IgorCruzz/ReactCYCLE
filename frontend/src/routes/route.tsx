import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Route } from 'react-router-dom'
import Layout from '../pages/_layout/default'

type Props = { component: FunctionComponent } & RouteComponentProps

const RouteWrapper : FunctionComponent<Props> = ({
  component: Component,
  ...rest
}: {
  component: any,

}) => {
  return (
    <Route {...rest} render={ props => <Layout> <Component {...props} /> </Layout> } />
  )
}

export default RouteWrapper
