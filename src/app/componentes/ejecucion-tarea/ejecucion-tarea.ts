import { Usuario } from '../usuario/usuario';
import { CheckList } from './checklist';
import { Paso } from './paso';

export class EjecucionTarea {
    ejtaId: number;
    acprId: string;
    acteId: string;
    ejtaCodejecucion: string;
    ejtaDescripcion: string;
    ejtaDias: string;
    ejtaDiashabiles: string;
    ejtaDiasprorroga: string;
    ejtaEstado: string;
    ejtaEstadoprorroga: number;
    ejtaFechafinal: string;
    ejtaFechafinalizada: string;
    ejtaFechainicial: string;
    ejtaFecharegistro: string;
    ejtaHabil: number;
    ejtaLeido: number;
    ejtaOrden: string;
    ejtaRegistradopor: string;
    taemId: string;
    usuaId: Usuario;
    checklist: CheckList[];
    pasos:Paso[];
}