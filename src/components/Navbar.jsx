import { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(false);
   return (
      <div className='flex items-center justify-between py-5 font-medium'>
         <img src={assets.logo} alt='' />
         <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className=' flex flex-col items-center gap-1'>
               <p>HOME</p>
               <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
            <NavLink to='/collection' className=' flex flex-col items-center gap-1'>
               <p>COLLECTION</p>
               <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
            <NavLink to='/about' className=' flex flex-col items-center gap-1'>
               <p>ABOUT</p>
               <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
            <NavLink to='/contact' className=' flex flex-col items-center gap-1'>
               <p>CONTACT</p>
               <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
            </NavLink>
         </ul>
         <div className='flex items-center gap-6'>
            <img src={assets.search_icon} alt='' className='w-5 cursor-pointer' />
            <div className='group relative'>
               <img src={assets.profile_icon} alt='' className='w-5 cursor-pointer' />
               <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-500 rounded'>
                     <p className='cursor-pointer hover:text-gray-800'>My Profile</p>
                     <p className='cursor-pointer hover:text-gray-800'>Order</p>
                     <p className='cursor-pointer hover:text-gray-800'>Logout</p>
                  </div>
               </div>
            </div>
            <Link to='cart' className='relative'>
               <img src={assets.cart_icon} alt='' className='w-5 min-w-5' />
               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img onClick={() => setOpenMenu(!openMenu)} src={assets.menu_icon} className='cursor-pointer w-5 sm:hidden' alt='' />
         </div>

         {/* mobile menu */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${openMenu ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
               <div onClick={() => setOpenMenu(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                  <img src={assets.dropdown_icon} alt='' className='h-4 rotate-180 cursor-pointer' />
                  <p className='text-gray-500'>Back</p>
               </div>
               <NavLink className='py-2 pl-6 border text-gray-500' to='/'>
                  Home
               </NavLink>
               <NavLink className='py-2 pl-6 borde text-gray-500' to='/collection'>
                  Collection
               </NavLink>
               <NavLink className='py-2 pl-6 border text-gray-500' to='/about'>
                  About
               </NavLink>
               <NavLink className='py-2 pl-6 border text-gray-500' to='/contact'>
                  Contact
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
