import React from 'react'
import { useAuth } from '../context/Authprovider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Logout() {
      const [authUser, setAuthUser] = useAuth();
      const handleLogout =() => {
        try {
    setAuthUser(null);
            localStorage.removeItem("Users")
            toast.success('Logout  Successfully ');
        } catch (error) {
                  toast.error("Error: " + error.message);
            
        }
        
      }
      
   return (
    <div>
        <Link to="/">
      <button      onClick={handleLogout}
       className="px-4 py-2 rounded-sm bg-red-500 text-white cursor-pointer ">Logout</button>
       </Link>
    </div>
  )
}

export default Logout
