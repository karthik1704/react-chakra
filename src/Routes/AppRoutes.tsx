import { ReactElement } from 'react'

import { Routes, Route } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import AuthLayout from '../Layout/AuthLayout'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'

import PageNotFound from '../Pages/PageNotFound/PageNotFound'
import About from '../Pages/About/About'

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
