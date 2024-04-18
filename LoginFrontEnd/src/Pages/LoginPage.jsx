import {useForm} from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function Loginpage() {
    const{register, handleSubmit, formState:{errors}} = useForm();
    const {sigin, isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if (isAuthenticated) navigate("/VerProductos");
    }, [isAuthenticated])
    const onSubmit= handleSubmit((data) => {
        sigin(data);
    });

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8 text-black">Iniciar Sesión</h1>
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <div className="mb-4">
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        {...register("username", { required: true })}
                        placeholder="Nombre de usuario"
                    />
                    {errors.username && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
                </div>
                <div className="mb-4">
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Contraseña"
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Iniciar sesión</button>
            </form>
           
        </main>
    );
}

export default Loginpage;
