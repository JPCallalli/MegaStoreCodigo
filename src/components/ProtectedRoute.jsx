import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const {user} = useContext(AuthContext);

  console.log("ProtectedRoute", user)
  
  if(user){
    // si estoy logeado, me devolvera el JSX(html, componente) que este dentro de protectedRoute
    return children;
  }else{
    // si no estoy logeado, me devolvera un mensaje de error
    return <Navigate to="/login" />;  
  }
  return (
    <div>
      ProtectedRoute
    </div>
  )
}
