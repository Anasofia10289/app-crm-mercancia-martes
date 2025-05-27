import Login from '../pages/Login'
import Home from '../Home'
import RutaProtegida from '../components/RutaProtegida'
import GestionEnvios from '../pages/GestionEnvios'
import EditorEnvio from '../pages/EditorEnvio'
export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home/',
        element: <RutaProtegida componente = {<Home/>} />,
        children:[
            {
                path:"envios",
                element:<GestionEnvios/>
            },
            {
                path:"clientes",
                element:<GestionEnvios/>
            },
            {
                path: "editar/:id",
                element: <EditorEnvio/>
            }
        ]
    }
]