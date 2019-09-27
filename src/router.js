import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from './pages/home'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notifications from './pages/ui/notifications'
import Messages from './pages/ui/messages'
import MyTabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import LoginForm from './pages/form/login'
import RegisterForm from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import AdvancedTable from './pages/table/advancedTable'
import City from './pages/city'
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
                                    <Route path="/ui/loadings" component={Loadings}/>
                                    <Route path="/ui/notifications" component={Notifications}/>
                                    <Route path="/ui/messages" component={Messages}/>
                                    <Route path="/ui/tabs" component={MyTabs}/>
                                    <Route path="/ui/gallery" component={Gallery}/>
                                    <Route path="/ui/carousel" component={Carousels}/>
                                    <Route path="/form/login" component={LoginForm}/>
                                    <Route path="/form/reg" component={RegisterForm}/>
                                    <Route path="/table/basic" component={BasicTable}/>
                                    <Route path="/table/high" component={AdvancedTable}/>
                                    <Route path="/city" component={City}/>
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