import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from './pages/home'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import NoMatch from './pages/nomatch'

export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/ui/buttons" component={Buttons}/>
                                    <Route path="/ui/modals" component={Modals}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}