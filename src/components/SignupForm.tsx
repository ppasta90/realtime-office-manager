import { useUser } from '../context/UserContext.tsx';

const SignupForm = () => {
    const { setUser } = useUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
            
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const responseData = await response.json();
            setUser(responseData.user);
            localStorage.setItem('user', JSON.stringify(responseData.user));
        } catch (error) {
            console.error('Error:', error);
            alert('Signup failed. Please try again.');
        }
    }
    return (
        <form className="flex flex-col items-center justify-center gap-4" action="" onSubmit={handleSubmit}>
            <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="name" placeholder="Name" />
            <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="lastName" placeholder="Last Name" />
            <select className="border-2 border-gray-300 rounded-md p-2" name="specialization" id="specialization">
                <option value="dermatologist">Dermatologist</option>
                <option value="physiotherapist">Physiotherapist</option>
                <option value="psychologist">Psychologist</option>
            </select>
            <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="username" placeholder="Username" />
            <input className="border-2 border-gray-300 rounded-md p-2" type="email" name="email" placeholder="Email" />
            <input className="border-2 border-gray-300 rounded-md p-2" type="password" name="password" placeholder="Password" />
            <input className="border-2 border-gray-300 rounded-md p-2" type="password" name="confirmPassword" placeholder="Confirm Password" />
            <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Signup</button>
        </form>
    )
}

export default SignupForm;