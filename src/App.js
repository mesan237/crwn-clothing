import { 
  Route,
  Routes, 
  createBrowserRouter,
  RouterProvider,
  Link
 } from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/shopPage.component';

const router = createBrowserRouter([
  {path: "*", Component: Root},
  {path: "/", Component: HomePage, },
  ]
) 

function App() {
  return <RouterProvider router= {router} />
}

function Root() {
  return (
    <Routes className="App">
      <Route path="/shop" element={<ShopPage/>} />
    </Routes>
  );
}

export default App;
