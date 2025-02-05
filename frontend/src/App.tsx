import './index.css'
import Navbar from '../components/Navbar'
import TasksList from '../components/TasksList'
 


function App() {
  return (
    <>
     <Navbar />
      <div className=" container grid grid-cols-2 gap-4 justify-center items-center mx-auto">
        <TasksList />
      </div>
    </>
  )
}

export default App
