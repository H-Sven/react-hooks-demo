import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import stores from '../../icestore'
import './login.scss'

function Login(props) {
  const [ phone , changePhone ] = useState('')
  const [ code , setCode ] = useState('')
  const [ codeMessage , changeCodeMessage ] = useState('获取验证码')
  let time = 0
  let timer = null

  const user = stores.useStore('user')
  const { userInfo, loginApi } = user

  useEffect(() => {
    if (userInfo.login) {
      // props.history.push('/')
    }
    return () => {}
  }, [])

  const loginFunc =() => {
    loginApi({
      login: true,
      nickName: phone,
      userId: code
    })
    props.history.push('/')
  }
  const getCode =() => {
    time = 60
    timer = setInterval(() => {
      time--
      changeCodeMessage(`重新获取${time}`)
      if (time <= 0) {
        clearInterval(timer)
        changeCodeMessage(`获取验证码`)
      }
    }, 1000)
  }

  return (
    <div className="login_view">
    <div className="form_input">
      <div className="ipt_box">
        <div className="img_bg img_bg1"></div>
        <input
          value={ phone }
          onChange={ (e) => changePhone(e.target.value) }
          step="0.0000000001"
          type="number"
          placeholder="请输入手机号码"
          className="form_input1"
          onInput={(e) => {if(e.target.value.length>11)e.target.value=e.target.value.slice(0,11)}}
         />
      </div>
      <div className="ipt_box">
        <div className="img_bg img_bg2"></div>
        <input
          value={ code }
          onChange={ (e) => setCode(e.target.value) }
          step="0.0000000001"
          type="number" 
          placeholder="请输入验证码"
          className="sign_one_input1"
          onInput={(e) => {if(e.target.value.length>6)e.target.value=e.target.value.slice(0,6)}}
        />
        <p id="btnclick" className="codeTime" onClick={() => getCode() }>{codeMessage}</p>
      </div>
    </div>
    <div className="btn_box">
      <div className="btn_login" onClick={() => loginFunc() }>登录</div>
      <Link to="/" className="no_login">暂不登录</Link>
    </div>
  </div>
  )
}

export default Login