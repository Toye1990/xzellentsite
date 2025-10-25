import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Ourservice from "./pages/servicepage/Ourservice";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Orderpage from "./pages/contact/orderpage";





export const router = createBrowserRouter([
    {path: '/', element: <Homepage/>},
    {path: '/products', element: <Ourservice/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>},
    {path: '/placeorder', element: <Orderpage/>}
])