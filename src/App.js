import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feature from "./pages/Feature";
import Service from "./pages/Service";
import TokenSale from "./pages/TokenSale";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="feature" element={<Feature />} />
      <Route path="service" element={<Service />} />
      <Route path="tokensale" element={<TokenSale />} />

      {/* <Route path="*" element={< />} /> */}
      {/* ... etc. */}
    </Route>
  )
);
function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
