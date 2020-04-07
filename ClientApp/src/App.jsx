import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import AddHole from './pages/AddHole'
import Search from './pages/Search'
import SignUp from './pages/Signup'
// import HoleDetails from './pages/Holedetails'

import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/add" component={AddHole} />
          {/* <Route exact path="/hole/:holeId" component={HoleDetails} /> */}
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
