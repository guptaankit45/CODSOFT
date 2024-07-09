import React from 'react'
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import{Routes ,Route} from "react-router-dom"
import AllBooks from './pages/AllBooks.jsx';
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails.jsx';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route excat path ="/" element={<Home/>} />
          <Route  path ="/all-books" element={<AllBooks/>} />
          <Route  path ="/cart" element={<Cart/>} />
          <Route  path ="/profile" element={<Profile/>} />
          <Route  path ="/SignUp" element={<SignUp/>} />
          <Route  path ="/LogIn" element={<LogIn/>} />
          <Route  path ="/view-book-details-id/:id" element={<ViewBookDetails/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
