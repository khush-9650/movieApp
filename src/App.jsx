import { apiKey } from "./constants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, SingleMovieDetails, Error, Root } from "./Pages";
import { loader as MovieLoader } from "./Pages/Home";
import { loader as SingleMovieLoader } from "./Pages/SingleMovieDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route
        path="/detail/:imdbId"
        element={<SingleMovieDetails />}
        loader={SingleMovieLoader}
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
