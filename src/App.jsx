
import './App.css'
import Navbar2 from "./component/navbar/Navbar2"
import Features2 from "./component/Features2/Features2"
import Home from "./component/Hero/Home"

import Testimonial2 from "./component/Testimonial2/Testimonial2"

import Contact from "./component/Contact/Contact"
import Footer2 from "./component/Footer2/Footer"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './component/Login_page/Login'
import Signup from './component/Signup_page/Signup'
import Not_Found from './Extra_Layouts/Not_Found'
import Newsletter from './component/Newsletter/Newsletter'
import FTop from './component/Features_top/FTop'
import Hero from './component/Hero1/Hero'





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar2 />
              <Home />
              <FTop />
              <Features2 />
              <Testimonial2 />
              <Newsletter />
              <Contact />
              <Footer2 />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Not_Found" element={<Not_Found />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
