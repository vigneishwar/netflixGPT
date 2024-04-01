import { Browse } from "./components/Browse";
import Login from "./components/Login";
import { RouterProvider, createBrowserRouter} from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />
  }
]);