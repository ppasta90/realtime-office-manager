
const SignupForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
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