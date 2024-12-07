import './App.css'
import FloorPlan from "./components/FloorPlan.tsx";
import Auth from './pages/Auth.tsx';

function App() {

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Auth />
      {/* <h1 className="font-bold text-3xl">Real Time Office Manager</h1>
      <FloorPlan/> */}
    </div>
  )
}

export default App
