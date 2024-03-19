import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Login from './Componants/Login/Login';
import Register from './Componants/Register/Register';
import NotFound from './Componants/NotFound/NotFound';

import Home from './Componants/Home/Home';
import Cutomize from './Componants/Cutomize/Cutomize';
import Categories from './Componants/Categories/Categories';
import Layout from './Componants/Layout/Layout'
import Forget from './Componants/Forget/Forget';
import Verify from './Componants/Verify/Verify';
import { useState } from 'react';


function App() {
  let [userData , setUserDate] = useState(null)
  function saveData(data) {
    setUserDate(data)
  }

  const routers = createBrowserRouter([
    {path: '/' , element:<Layout saveData={saveData}/> , children:[
      {index : true , element :<Home saveData={saveData}/>},
      {path:'customize', element:<Cutomize saveData={saveData}/>},
      {path:'categories', element:<Categories saveData={saveData}/>},

    ]
  },
    {path:'login', element:<Login saveData={saveData}/>},
    {path:'register', element:<Register/> },
    {path:'forget', element:<Forget/> },
    {path:'verify', element:<Verify/> },
    {path:'*', element:<NotFound/>}
  
  ]);
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
  ;
}

export default App;
