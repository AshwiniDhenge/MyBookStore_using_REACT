import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginForCourse = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = (event) => {
        event.preventDefault();
        loginWithRedirect();
    };

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
            <div className="bg-white dark:bg-slate-800 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Login Required</h2>
                <p className="mb-4 text-center dark:text-gray-300">Please log in to access this page.</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full  bg-blue-500 text-white py-2 px-4 rounded hover:bg-pink-600">
                            Log In
                        </button>
                    </div>

                    <div className="mb-4">
                        <Link to="/">
                            <button
                                type="button"
                                className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700" >
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForCourse;
