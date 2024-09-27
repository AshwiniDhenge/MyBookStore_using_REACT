
// import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginForCourse from './LoginForCourse';
// import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

//   return isAuthenticated ? children : <Navigate to="/login" />;
return isAuthenticated ? children : <LoginForCourse />;
};

export default PrivateRoute;
