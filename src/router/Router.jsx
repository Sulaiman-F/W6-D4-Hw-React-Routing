import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Buttons from "../components/Buttons";
import Sports from "../pages/Sports";
import Football from "../pages/Football";
import Basketball from "../pages/Basketball";
import Tennis from "../pages/Tennis";
import Swimming from "../pages/Swimming";
import Boxing from "../pages/Boxing";
import Golf from "../pages/Golf";
function Layout() {
  return (
    <>
      <Outlet />
      <Buttons />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Sports /> },
      { path: "/sports", element: <Sports /> },
      { path: "/football", element: <Football /> },
      { path: "/basketball", element: <Basketball /> },
      { path: "/tennis", element: <Tennis /> },
      { path: "/swimming", element: <Swimming /> },
      { path: "/boxing", element: <Boxing /> },
      { path: "/golf", element: <Golf /> },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
