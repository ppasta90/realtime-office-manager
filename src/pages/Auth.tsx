import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    
    return (
        <div className="flex w-full h-screen">
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                {isLogin ? <LoginForm /> : <SignupForm />}
                <p>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button 
                        onClick={() => setIsLogin(!isLogin)} 
                        className="text-blue-500 hover:text-blue-700"
                        aria-label={isLogin ? "Switch to signup" : "Switch to login"}
                    >
                        {isLogin ? 'Signup' : 'Login'}
                    </button>
                </p>
            </div>
            <div className="w-1/2 bg-gray-100 h-full flex flex-col justify-center items-center gap-4">
                <h1 className="text-4xl font-bold">Office manager</h1>
                <p className="text-lg">Manage your office with ease</p>
            </div>
        </div>
    );
};

export default Auth;