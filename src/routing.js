import React from 'react'
import { Route, Switch } from 'react-router'
import GithubData from './components/github-data/github'
import GithubUserDetails from './components/github-data/github_Details/github-User-details'
import TempComponent from './components/temprature/temp'


function RoutingComponent() {
      return (
            <div>
                  <Switch>
                        <Route exact path="/" component={TempComponent}></Route>
                        <Route exact path="/weather" component={TempComponent}></Route>
                        <Route exact path="/github" component={GithubData}></Route>
                        <Route exact path="/user/:name" component={GithubUserDetails}></Route>
                  </Switch>
            </div>
      )
}

export default RoutingComponent
