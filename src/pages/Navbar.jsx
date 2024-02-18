import React, {useState,useEffect} from 'react';
import MenuDrop from './MenuDrop.jsx';
import "./styles/MediasQueries.css"


const Navbar = () => {
  const numero = 1
  console.log(numero);
    useEffect(() => {
      const handleScroll = () => {
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
        <ul  class="navbar-list flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:text-sm md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-7 ">
            <li class="flex">
                <a href="#" class="block text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 " aria-current="page">Home</a>
            </li>
            <li>
                <a href="#nosotros" class="block p- text-gray-700 border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white  dark:hover:text-white lg:dark:hover:bg-transparent border-none">Nosotros</a>
            </li>
            <li>
                <a href="#servicios" class="block p- text-gray-700 border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white  dark:hover:text-white lg:dark:hover:bg-transparent border-none">Servicios</a>
            </li>
            <li>
                <a href="#contacto" class="block p- text-gray-700 border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white  dark:hover:text-white lg:dark:hover:bg-transparent border-none">Contacto</a>
            </li>
            <li>
                <a href="#Materiales" class="block p- text-gray-700 border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white  dark:hover:text-white lg:dark:hover:bg-transparent border-none">Materiales</a>
            </li>
          <li class="flex">
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full  text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700  md:dark:hover:bg-transparent">Polarizados <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg></button>
                <MenuDrop/>
            </li>
        </ul>
        </>
    );
  };
export default Navbar

