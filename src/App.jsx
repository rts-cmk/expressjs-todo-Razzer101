import { createBrowserRouter, RouterProvider } from "react-router"
import Details from "./pages/Details"
import Todos from "./pages/todos"

function App() {
  const browserRouter = createBrowserRouter([{
      path: "/",
      element: <Todos/>,
    },{
      path: "/details/:id",
      element: <Details/>,
    }])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
