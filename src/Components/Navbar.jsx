

import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/course'>Course</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50  ${sticky ? 'sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out' : ""}`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}

              <Login />
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">book<span className='text-pink-500'>Store</span> | 📚</a>
        </div>
        <div className="navbar-end space-x-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
              {isAuthenticated && (
                <li>
                  <p className='text-brown-600 font-bold'>Welcome <span className='text-red-600 font-bold font-sans'>{user.name}</span></p>
                </li>
              )}
              {isAuthenticated ? (
                <li>
                  <button className='bg-pink-400 px-3 py-2 rounded' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                </li>
              ) : (
                <li>
                  <button className='bg-pink-400 px-3 py-2 rounded' onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
            </ul>
          </div>
          {/* <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input type="text" className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </label>
          </div> */}
          <div className='ml-4 '>
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" />
            <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM7.05,18.36a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,7.05,18.36ZM18.36,17a1,1,0,0,0-1.41,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Zm-.7-10a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71a1,1,0,0,0-1.41,1.41ZM12,7A5,5,0,1,0,17,12,5,5,0,0,0,12,7Zm0,8A3,3,0,1,1,15,12,3,3,0,0,1,12,15Z" />
            </svg>
            <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <path d="M21.64,13.28a1,1,0,0,0-1.14-.77,7,7,0,0,1-1.51.17,7,7,0,0,1-7-7,6.65,6.65,0,0,1,.17-1.51A1,1,0,0,0,11.37,2.36,9,9,0,1,0,21.64,13.28ZM12,20A7,7,0,0,1,8,6.07,9,9,0,0,0,17.93,16,7,7,0,0,1,12,20Z" />
            </svg>
          </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
