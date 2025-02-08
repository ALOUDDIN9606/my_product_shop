import {} from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);
  
  return accessToken ? <Outlet /> : <Navigate replace to={"/signin"} />;
}

export default Auth