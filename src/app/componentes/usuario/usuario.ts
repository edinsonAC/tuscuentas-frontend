import { TipoUsuario } from '../tipo-usuario/tipoUsuario';

export class Usuario {
    usuaId: string;
    password: string;
    usuaCorreo: string;
    usuaEstado: string;
    usuaPrimernombre:string;
    usuaPrimerapellido:string;
    usuaFecharegistro: string;
    usuaImgperfil: string;
    usuaUsuario: string;
    tipoUsuario: TipoUsuario;
}