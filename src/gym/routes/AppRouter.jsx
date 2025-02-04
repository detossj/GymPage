import { Routes, Route,Navigate } from 'react-router-dom'
import { NavBar } from '../../ui/components/NavBar'
import { ContactPage } from '../pages/ContactPage'
import { PlansPage } from '../pages/PlansPage'
import { StartPage } from '../pages/StartPage'
import { UsPage } from '../pages/UsPage'




export const AppRouter = () => {
  return (
    <>
        <NavBar/>

        
        <Routes>
          <Route path='/start' element={ <StartPage/> }/>
          <Route path='/us' element={ <UsPage/> }/>
          <Route path='/plans' element={ <PlansPage/> }/>
          <Route path='/contact' element={ <ContactPage/> }/>
          <Route path='/' element={ <Navigate to='/start'/> }/>
        </Routes>


    
    </>
  )
}
