import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated && (
        <li>
          <p className='text-brown-600 font-bold'>
            Welcome <span className='text-red-600 font-bold font-sans'>{user.name}</span>
             {/* <img src={user.picture} alt={user.name} /> */}
          </p>
        </li>
      )}
      {isAuthenticated ? (
        <li>
          <button className='bg-pink-400 px-3 py-2 rounded' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <button className='bg-pink-400 px-3 py-2 rounded' onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </li>
      )}
    </div>
  );
}

export default Login;
