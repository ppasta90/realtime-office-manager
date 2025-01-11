import './App.css'
import FloorPlan from "./components/FloorPlan.tsx";
import Auth from './pages/Auth.tsx';
import { UserProvider, useUser } from './context/UserContext.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = () => {
  const { user, setUser } = useUser();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {user ? (
        <div className="flex flex-col items-center justify-center gap-4 h-screen">
          <button onClick={handleLogout}>Logout</button>
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
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
