import { Link } from 'react-router-dom';

function InicioPage(){

    return(
        <body>
            <header className='text-center p'>
                <h1 className='text-2xl m-20'>Bienvenidos al sistema</h1>
                <Link to='/login' className='texl-xl bg-white text-red-800 border-rose-700 p-4 rounded-md shadow-emerald-200'>INICIAR SESIÓN</Link>
            </header>
        </body>
    );
}

export default InicioPage;
