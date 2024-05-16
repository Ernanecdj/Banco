import { Conta } from './classes/conta';
import { ContaCorrente } from './classes/contaCorrente';
import { ContaPoupanca } from './classes/contaPoupança';
import { Titular } from './classes/titular';

export class App {
    constructor() {
//         const titular1 = new Titular(
//         'Fulano',
//         '123.456.789-00',
//         'M', 
//         new Date('1990-01-02'), 
//         'Rua dos Anjos'
//         );


//         const conta1 = new Conta('001', '123456', titular1)
//         conta1.mostrarSaldo();
//         conta1.depositar(100);
//         conta1.mostrarSaldo();
//         conta1.sacar(50);
//         conta1.mostrarSaldo();

//         console.log('------------------------------------------------')

//         console.log(conta1);

//         console.log('------------------------------------------------')

//         titular1.mostrarIdade();

    const titular = new Titular(
        "Sergio",
        "111.111.111-11",
        new Date("1985-11-25"),
        "M"
    );

        const cp = new ContaPoupanca("1111", "2222", titular, 2);

        cp.depositar(1000);
        console.log(cp);    
    }
}

new App();