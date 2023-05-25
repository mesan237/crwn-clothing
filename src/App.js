import { 
  Route,
  Routes, 
  createBrowserRouter,
  RouterProvider,
  Outlet
 } from 'react-router-dom'
 import React from 'react';

import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';
import Hats from './pages/Hats/hats.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/SignIn-and-signUp/SignIn-and-signUp.component';
import { auth } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth';

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

class Root extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({currentUser : user})
      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <Routes className="App">
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/sign" element={<SignInAndSignUp/>} />
          <Route path="/shop/hats" element={<Hats/>} />
        </Route>
      </Routes>
    )
  }
}

const router = createBrowserRouter([
  {path: "*", Component: Root},
  ]
) 

export default App;
