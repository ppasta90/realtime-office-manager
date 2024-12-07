import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="flex w-full h-screen ">
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                {isLogin ? <LoginForm /> : <SignupForm />}
                <p>Already have an account? <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500">
                    {isLogin ? 'Signup' : 'Login'}
                </button></p>
            </div>
            <div className="w-1/2 bg-gray-100 h-full flex flex-col justify-center items-center">
                <h2>Welcome to the Office</h2>
            </div>
        </div>
    )
}

export default Auth;