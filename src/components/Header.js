import React from 'react'
import { Link} from "react-router-dom";
import Basket from './Basket'



const  Header = () => {
  return (
    <div className='bg-blue-400 h-28 flex'>
        <div className="flex justify-between items-center max-w-xs py-4">
            <img alt='logo' src="https://i.imgur.com/MHDAm7C.png" />
        </div>
      <div className='flex text-xl'>
        <ul className='flex items-center justify-center'>
          <li className='mx-4 font-semibold'>
            <Link to="/">Home</Link>
          </li>
          <li className='mx-4 font-semibold'>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      
      <Basket/>
    </div>

  )
}

export default Header