import React from 'react'
import {FaShopify, FaShoppingCart} from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useStateContext } from '../Context/StateContextGlobal'

const Navbar = () => {
    const {search, setsearch, state: {cart}} = useStateContext();
//   console.log(cart);

  return (
    <nav className=' flex items-center justify-between bg-gray-100 shadow px-5 py-2 my-5 rounded'>
        <Link to={'/'}>
            <div className=" flex items-center gap-2 cursor-pointer">
                <FaShopify className=' text-4xl text-danger'/>
                <h1 className=' uppercase text-xl text-header tracking-wider font-semibold'>mms-shop</h1>
            </div>
        </Link>
        <div className=" flex items-center gap-3">
            <Link to={'/cart'}>
                <div className=" flex items-center gap-2 bg-header text-white rounded px-5 py-2 cursor-pointer">
                    <FaShoppingCart className=''/> 
                    <small>{cart.length}</small>
                </div>
            </Link>
            <div className=" flex items-center gap-1 border-2 rounded px-3 py-2">
                <BiSearch className=' text-xl' />
                <input type="text" value={search} onChange={e => setsearch(e.target.value)} className=' outline-none bg-transparent' placeholder='Search...'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar