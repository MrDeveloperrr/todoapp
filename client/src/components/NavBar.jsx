import React from 'react'
import { Link } from 'react-router-dom'

const handLogOut = () =>{ 
  sessionStorage.clear()
}

const NavBar = () => {
  return (
    <>


      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to ="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="data:image/png;base64,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" className="h-8" alt="Your Favorite Todo List" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToDo List</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="http://localhost:5173" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handLogOut}>LogOut</Link>
              </li>
              <li>
                {/* <Link to ="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Task</Link> */}
              </li>
              <li>
                {/* <Link to="http://localhost:3000/tasks" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">View Task</Link> */}
              </li>
              <li>
                {/* <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar