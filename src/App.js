import { 
  Route,
  Routes, 
  createBrowserRouter,
  RouterProvider,
  Outlet,
  redirect,
  Navigate
 } from 'react-router-dom'
 import React, { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { onSnapshot } from 'firebase/firestore';
 import { onAuthStateChanged } from 'firebase/auth';

import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';
import Hats from './pages/Hats/hats.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/SignIn-and-signUp/SignIn-and-signUp.component';
import { auth, createProfileUserDocument} from './firebase/firebase.utils';
import { setcurrentuser } from './redux/user/userSlice';

function App() {
  return <RouterProvider router= {router} />
}

function Layout() {
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}



const Root = () => { 
  const currentuser = useSelector(state => state.users.currentUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
  
    const unsubscribeFromAuth = () =>  {onAuthStateChanged(auth, async(userAuth) => {
      if(userAuth){
        const userRef = await createProfileUserDocument(userAuth)

        onSnapshot(userRef, (doc) => {
          dispatch(setcurrentuser({
              id: doc.id,
              ...doc.data()
            }))
        })
        
        console.log('before', userAuth)
      }else {
        dispatch(setcurrentuser(userAuth))
      }

    })}

    return() => {
      console.log(currentuser)
      unsubscribeFromAuth()
    }
  }, [])
  
  return (
    <Routes className="App">
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/sign" element={!currentuser? <SignInAndSignUp/> : <Navigate to='/' />} />
        <Route path="/shop/hats" element={<Hats/>} />
      </Route>
    </Routes>
  )
}

const router = createBrowserRouter([
  {path: "*", Component: Root},
  ]
) 

export default App;
