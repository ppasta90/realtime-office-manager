const LoginForm = () => {
    return (
        <form action="" className="flex flex-col items-center justify-center gap-4">
            <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="username" placeholder="Username" />
            <input className="border-2 border-gray-300 rounded-md p-2" type="password" name="password" placeholder="Password" />
            <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Login</button>
        </form>
    )
}

export default LoginForm;