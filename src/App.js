/*
 * @Author: Siwen
 * @Date: 2019-09-16 10:47:29
 * @LastEditors: Siwen
 * @LastEditTime: 2019-09-27 15:39:27
 * @Description: 
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routers from './router'
import Login from './views/Login/Login'
import stores from './icestore'
function App() {
  const user = stores.useStore('user')
  const { userInfo } = user
  console.log(userInfo)
  return (
    <>
      <Router>
        <Switch>
          {Routers.map((item, index) => {
            return <Route path={item.path} key={index} exact render={(props) =>
              (!item.meta.auth || userInfo.login ? <item.component {...props} /> : <Login {...props} /> )
            }></Route>
          })}
        </Switch>
      </Router>
    </>
  )
}

export default App