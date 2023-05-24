import { 
  Route,
  Routes, 
  createBrowserRouter,
  RouterProvider,
  Outlet
 } from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';
import Hats from './pages/Hats/hats.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './pages/SignIn-and-signUp/SignIn-and-signUp.component';

const router = createBrowserRouter([
  {path: "*", Component: Root},
  ]
) 

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

function Root() {
  return (
    <Routes className="App">
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/sign" element={<SignInAndSignUp/>} />
        <Route path="/shop/hats" element={<Hats/>} />
      </Route>
    </Routes>
  );
}

export default App;
