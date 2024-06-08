import { ITitular } from "./titular.interfce";


export interface IConta {
    agencia: string;
    numero: string;
    titular: ITitular;
    saldo: number;

    sacar(valor: number): void
    depositar(valor: number):void
    mostrarSaldo(): void
}