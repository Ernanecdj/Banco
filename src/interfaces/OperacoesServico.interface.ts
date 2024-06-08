export interface IOperacoesServico {
    aplicarTx(tx: number): number;
    removerTx(servico: object): boolean;
}