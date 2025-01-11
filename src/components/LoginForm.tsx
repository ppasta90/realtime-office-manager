import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const { setUser } = useUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if (!response.ok) {
                toast.error(responseData.message);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setUser(responseData.user);
            localStorage.setItem('user', JSON.stringify(responseData.user));
            toast.success('Login successful');
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