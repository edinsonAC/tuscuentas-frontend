import { TareaEmpresa } from '../tarea-empresa/tarea-empresa';
import { CalendarioFecha } from '../calendario-fecha/calendario-fecha';
import { Proceso } from '../proceso/proceso';
import { EsquemaTarea } from './esquema-tarea';

export class TareaPredeterminada {
    taprId: number;
    taprCalendariotributario: number;
    taprCod: number;
    taprComentarobligatorio: number;
    taprDescripcion: string;
    taprDiahabilsiguiente: number;
    taprDistrital: number;
    taprEditable: number;
    taprEstado: number;
    taprFecharegistro: string;
    taprImpuesto: number;
    taprNacional: number;
    taprNombre: string;
    taprNueva: number;
    taprPidegerente: string;
    taprRecurrente: number;
    taprRegistradopor: string;
    tireId: number;
    tareaEmpresas: TareaEmpresa[];
    calendarioFecha: CalendarioFecha;
    esquemaTarea: EsquemaTarea;
    proceso: Proceso;

}