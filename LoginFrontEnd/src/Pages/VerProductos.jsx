import { useEffect, useState } from 'react';
import { MostrarProductos } from '../api/auth'; 
import { Link } from 'react-router-dom';

function MostrarProductosPage() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await MostrarProductos();
                setProductos(res.data); 
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Lista de Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {productos.map((producto) => (
                    <div key={producto.id} className="bg-white shadow-lg rounded-lg overflow-hidden shadow-md hover:shadow-slate-950">
                        <div className="px-6 py-4 ">
                            <h2 className="font-bold text-xl mb-2">Nombre: {producto.nombre}</h2>
                            <p className="text-gray-700 mb-4">{producto.descripcion}</p>
                            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Código: {producto.codigo}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <Link to='/' className="bg-green-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-end">Cerrar Sesion</Link>
            </div>
        </div>
    );
}

export default MostrarProductosPage;
