import { useUser } from '../context/UserContext';

const LoginForm = () => {
    const { setUser } = useUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            
            // Implement your login API call here
            // For now, we'll just simulate a successful login
            setUser({
                name: "Test",
                lastName: "User",
                specialization: "dermatologist",
                username: data.username as string,
                email: "test@example.com"
            });
            
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
                <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="username" placeholder="Username" />
                <input className="border-2 border-gray-300 rounded-md p-2" type="password" name="password" placeholder="Password" />
                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;