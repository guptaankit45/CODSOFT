import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About-us',
      link: '/about-us',
    },
    {
      title: 'All Books',
      link: '/all-books',
    },
    {
      title: 'Cart',
      link: '/cart',
    },
    {
      title: 'Profile',
      link: '/profile',
    },
  ];

  const [MobileNav, setMobileNav] = useState('hidden');

  return (
    <>
      <nav className='z-50 relative bg-zinc-800 text-white px-8 py-4 flex items-center justify-between'>
        <Link to='/' className='flex items-center'>
          <img
            className='h-10 me-4 rounded-md bg-slate-500'
            src="./src/img/booklogo.jpg"
            alt="logo"
          />
          <h1 className='text-2xl font-semibold'>Bookstore</h1>
        </Link>
        <div className='nav-links-bookstore block md:flex items-center gap-5'>
          <div className='hidden md:flex gap-5'>
            {links.map((item, i) => (
              <Link
                to={item.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
              >
                {item.title}{" "}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex gap-5'>
            <Link
              to="/LogIn"
              className='px-4 py-1 border-blue-500 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300'
            >
              LogIn
            </Link>
            <Link
              to="/SignUp"
              className='px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300'
            >
              SignUp
            </Link>
          </div>
          <button
            className='block md:hidden text-white text-2xl hover:text-zinc-400'
            onClick={() => setMobileNav(MobileNav === 'hidden' ? 'block' : 'hidden')}
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div className={`${MobileNav} z-40 absolute top-0 left-0 w-full bg-zinc-800 h-screen flex flex-col items-center justify-center`}>
        {links.map((item, i) => (
          <Link
            to={item.link}
            className={` ${MobileNav} text-white mb-4 text-3xl font-semibold hover:text-blue-500 transition-all duration-300`}
            key={i}
            onClick={() => setMobileNav(MobileNav === 'hidden' ? 'block' : 'hidden')}

          >
            {item.title}{" "}
          </Link>
        ))}
        <Link
          to="/LogIn"
          className={`${MobileNav} px-8 py-2 text-3xl font-semibold mb-8 text-white border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
        >
          LogIn
        </Link>
        <Link
          to="/SignUp"
          className={`${MobileNav} px-8 py-2 text-3xl font-semibold mb-8 bg-blue-500 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300`}
        >
          SignUp
        </Link>
      </div>
    </>
  );
};

export default Navbar;
