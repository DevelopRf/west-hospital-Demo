import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import Detail from "./pages/Detail"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":doctorId" element={<Detail />} />


            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App