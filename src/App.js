import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="task/:taskId" element={<TaskPage />} />
      <Route path="profile" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
