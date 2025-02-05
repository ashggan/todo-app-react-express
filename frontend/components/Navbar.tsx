import React from "react";

const Navbar = () => {
    return  (
        <>
{/* <!-- navbar goes here --> */}
<nav className="bg-gray-50 shadow-md ">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <div>
          <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <span className="font-bold">My ToDo List</span>
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-1">
        <a href="" className="py-5 px-3">Login</a>
        <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
      </div>
    </div>
  </div>
 
</nav>

 

        </>
    )
}

export default Navbar;