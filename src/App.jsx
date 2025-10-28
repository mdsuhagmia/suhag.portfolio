import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/root/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Pricing from "./pages/Pricing"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import CustomCursor from "./components/CustomCursor"

let routing = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/skills" element={<Skills/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
))
function App() {

  return (
    <>
      <CustomCursor/>
      <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App
