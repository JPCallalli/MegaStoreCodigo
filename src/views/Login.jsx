import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const ERRORS = {
        // mensajeErrorFirebase: "mensaje que quiero mostrar"
        "auth/user-not-found": "El usuario no existe",
        "auth/wrong-password": "La contraseña es incorrecta",
        "auth/invalid-email": "El correo es invalido",
        "auth/missing-password": "La contraseña esta vacia",
        "auth/invalid-credential": "credenciales inválidas, verifique sus datos",
        "auth/network-request-failed": "Error de red, verifique su conexion a internet"
    }

    const notify = (msg) => toast(msg)

    const startLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                email, 
                password
            );
            console.log(userCredential);
        } catch (error) {
            console.log("ERROR",error.code);
            notify(ERRORS[error.code]);
            throw error
        }
    };
    
    const handleLogin = async () => {
        await toast.promise(startLogin(), {
            pending: "Validando datos...",
            success: "Login Exitoso! 👍",
            error: "Error al Validar, pruebe de nuevo 🤯"
        });

        setTimeout(() => {
            navigate('/products')
        },3000)
        
    }

  return (
    <Container>
      <div className="lg:w-2/6 md:w-1/2 bg-blue-400 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-8 md:mt-10 mx-auto">
        <h2 className="text-dark text-lg font-medium title-font mb-5">
          Ingresa con tus datos
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-dark-400">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white-600 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ej. name@gmail.com"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-dark-400">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white-600 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ej. 21fcsfd3f@"
          />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={handleLogin}
        >
          Ingresar
        </button>
        <p className="text-xs mt-3">
          *La contraseña debe ser de al menos 6 caracteres.
        </p>
      </div>
      {/* Toast */}
      <ToastContainer />
    </Container>
  );
}
