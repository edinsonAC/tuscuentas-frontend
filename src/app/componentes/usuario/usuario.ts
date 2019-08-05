import { TipoUsuario } from '../tipo-usuario/tipoUsuario';
import { TipoDocumento } from './tipo-documento';

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
    tipoDocumento: TipoDocumento;
}