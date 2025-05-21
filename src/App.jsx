import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Applayout } from './component/layout/Applayout';
import { CountryDetails } from './component/layout/CountryDetails';

import './App.css'

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Country } from './pages/Country';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';


const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"country",
          element:<Country/>
        },
        {
          //Dynamic route
          path:"country/:id",
          element:<CountryDetails/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
      ]
    }  
]);


const App = () => {

  return <RouterProvider router={router}></RouterProvider>

}

export default App;
