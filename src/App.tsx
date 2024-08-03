import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  ));

const App = () => {
  return <RouterProvider router={router} />
};

export default App;



// Next Lesson Use State 
// https://www.youtube.com/watch?v=LDB4uaJ87e0&t=1644s

// React Router
// https://youtu.be/LDB4uaJ87e0?t=4757