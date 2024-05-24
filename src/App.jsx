import {Suspense, useEffect, lazy} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const ContactsPage = lazy(()=> import('./pages/ContactsPage/ContactsPage'))


function App() {


  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage/> } />
          <Route path="/login" element={<LoginPage/> } />
          <Route path="contacts" element={ <ContactsPage/>} />
        </Routes>
      </Suspense>
    </Layout>

  )
}

export default App
