/*
 * @Author: Siwen
 * @Date: 2019-09-16 10:47:29
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-18 10:47:09
 * @Description: 
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routers from './router'
import Login from './views/Login/Login'

function App() {
  return (
    <>
      <Router>
        <Switch>
          {Routers.map((item, index) => {
            return <Route path={item.path} key={index} exact render={(porps) => 
              ( !item.meta.auth ? <item.component {...porps} /> : <Login /> )
            }></Route>
          })}
        </Switch>
      </Router>
    </>
  )
}
export default App