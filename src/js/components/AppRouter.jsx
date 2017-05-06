import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Viewport from './Viewport'
import Main from './Main'
import Sidebar from './Sidebar'
import NavContainer from '../containers/NavContainer'
import Home from './Home'
import CreateOrderContainer from '../containers/CreateOrderContainer'
import EditOrderContainer from '../containers/EditOrderContainer'
import OpenOrdersContainer from '../containers/OpenOrdersContainer'
import CanceledOrdersContainer from '../containers/CanceledOrdersContainer'
import CompletedOrdersContainer from '../containers/CompletedOrdersContainer'
import AlertManagerContainer from '../containers/AlertManagerContainer'

const AppRouter = () => (
  <Router>
    <Viewport>
      <Sidebar>
        <NavContainer />
      </Sidebar>
      <Main>
        <AlertManagerContainer />
        <Route exact path='/' component={Home} />
        <Route path='/create-order' component={CreateOrderContainer} />
        <Route path='/edit-order/:id' component={EditOrderContainer} />
        <Route path='/open-orders' component={OpenOrdersContainer} />
        <Route path='/canceled-orders' component={CanceledOrdersContainer} />
        <Route path='/completed-orders' component={CompletedOrdersContainer} />
      </Main>
    </Viewport>
  </Router>
)

export default AppRouter
