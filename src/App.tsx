import './App.css'
import FloorPlan from "./components/FloorPlan.tsx";

function App() {

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-3xl">Real Time Office Manager</h1>
      <FloorPlan/>
    </div>
  )
}

export default App
