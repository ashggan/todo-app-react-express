import './index.css'
import Navbar from '../components/Navbar'
import TasksList from '../components/TasksList'
import { useAuth0 } from '@auth0/auth0-react';
 


function App() {
  const { isAuthenticated } = useAuth0();
 
  return (
    
    <>
     <Navbar />
     {
      isAuthenticated ? 
      (<div className=" container grid grid-cols-2 gap-4 justify-center items-center mx-auto">
        <TasksList />
      </div>):
      (
        <div className="w-full h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-r   text-white px-6">
  <h1 className="text-4xl font-bold mb-4 text-black">Create & Manage Your Tasks Effortlessly</h1>
  <p className="text-lg max-w-lg">
    Stay organized, meet deadlines, and boost productivity with our simple yet powerful task manager.
  </p>
  
</div>

      )
     }
      
    </>
  )
}

export default App
