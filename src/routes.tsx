import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { ErrorPage } from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <div>TELA INICIAL</div> }],
  },
  // {
  //   path: "/",
  //   element: <AppLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/analysis",
  //       element: <Analysis />,
  //     },
  //     {
  //       path: "/settings",
  //       element: <Settings />,
  //     },
  //   ],
  // },
]);
