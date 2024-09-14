import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css';
import User from "./components/getUser/User";
import Add from "./components/addUser/Add";

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <User/>
    },
    {
      path: '/add',
      element: <Add/>
    },
    {
      path: '/edit',
      element: 'Update user page'
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
