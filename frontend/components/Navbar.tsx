import LoginButton from '../components/Auth/Login'
import Profile from '../components/Auth/Profile'
import Logout from '../components/Auth/Logout'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
    return  (
        <>
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
                {!isAuthenticated &&<LoginButton /> }
                <Profile />
                {isAuthenticated &&<Logout /> }
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}
export default Navbar;