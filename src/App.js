import { 
  Route,
  Routes, 
  createBrowserRouter,
  RouterProvider,
  Link
 } from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage.component';

const HatsPage = () => {
  return(
    <div>
      <h1>HatsPage</h1>
      <button > Direct </button>
    </div>
  )
}

const router = createBrowserRouter([
  {path: "*", Component: Root},
  {path: "/", Component: HomePage, },
  {path: "/shop/hats", Component: HatsPage,},
  ]
) 

function App() {
  return <RouterProvider router= {router} />

}

function Root() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
