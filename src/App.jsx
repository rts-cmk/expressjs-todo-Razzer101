import { createBrowserRouter, RouterProvider } from "react-router"
import Details from "./pages/Details"
import Todos from "./pages/todos"
import Delete from "./pages/Delete"
import Put from "./pages/Put"

function App() {
  const browserRouter = createBrowserRouter([{
      path: "/",
      element: <Todos/>,
    },{
      path: "/details",
      element: <Details/>,
    },{
      path: "/delete",
      element: <Delete/>,
    },{
      path: "/put",
      element: <Put/>,
    }])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
