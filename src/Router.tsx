import { createBrowserRouter } from "react-router";
import { Home } from "./components/pages/Home";
import About from "./components/pages/About";
import AppLayout from "./components/menue/AppLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
          { path:'home', element: <Home /> },
          { path: 'about', element: <About /> },
        ],
      },
  ]);
  