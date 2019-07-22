import { EjecucionTarea } from '../ejecucion-tarea/ejecucion-tarea';
import { TipoAlerta } from './tipoAlerta';
import { Usuario } from '../usuario/usuario';

export class Alerta{
    loadId:number;
    acteId:number;
    alteId:number;
    cotaId:number;
    cotuId:number;
    emprId:number;
    loacListado:number;
    loadFecharegistro:string;
    loadObservacion:string;
    loadRegistradopor:string;
    ejecucionTarea:EjecucionTarea;
    tipoLog:TipoAlerta;
    usuario1:Usuario;
    usuario2:Usuario;
}