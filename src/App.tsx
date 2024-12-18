import './App.css'
import FloorPlan from "./components/FloorPlan.tsx";
import Auth from './pages/Auth.tsx';
import { UserProvider, useUser } from './context/UserContext.tsx';

const AppContent = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {user ? (
        <div className="flex flex-col items-center justify-center gap-4 h-screen">
          <h1 className="font-bold text-3xl">Real Time Office Manager</h1>
          <FloorPlan />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
