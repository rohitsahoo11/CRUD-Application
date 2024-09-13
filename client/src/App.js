import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css';

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: 'Home page'
    },
    {
      path: '/add',
      element: 'Add user page'
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
