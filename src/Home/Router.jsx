import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Man from './Man/Man';
import Nav from '../component/Nav';
import Woment from '../woment/Woment';
import Goft from '../component/goft/Goft';
import Child from './child/Child';
import Footer from '../component/footer/Footer'
import Cart from '../cart/Cart';
import Login from '../login/Login';
export default function Router() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        {/* <Route path='/' element={<Footer></Footer>}></Route>
        <Route path='/Home' element={<Footer></Footer>}></Route> */}
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Man' element={<Man></Man>}></Route>
        <Route path='/Woment' element={<Woment></Woment>}></Route>
        <Route path='/Goft' element={<Goft></Goft>}></Route>
        <Route path='/Child' element={<Child></Child>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  )
}
