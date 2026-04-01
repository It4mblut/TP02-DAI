//viene desde matematica.js (Ej2)
import {pi, arrayNumeros, sumar, restar, multiplicar, dividir} from "./modules/matematica.js"

console.log(sumar(3,8))
console.log(restar(10,pi))
console.log(multiplicar(4,10))
console.log(dividir(30,5))


//C: \Users\devandroid\Desktop\TP2\TP02 - DAI\scr\EJ02.js: 2
//import { pi, arrayNumeros, sumar, restar, multiplicar, dividir } from "./modules/matematica.js"
//^^^^^^
//
  //  SyntaxError: Cannot use import statement outside a module
    //at wrapSafe(node: internal / modules / cjs / loader: 1735: 18)
    //at Module._compile(node: internal / modules / cjs / loader: 1778: 20)
    //at Object..js(node: internal / modules / cjs / loader: 1936: 10)
    //at Module.load(node: internal / modules / cjs / loader: 1525: 32)
    //at Module._load(node: internal / modules / cjs / loader: 1327: 12)
    //at TracingChannel.traceSync(node: diagnostics_channel: 328: 14)
    //at wrapModuleLoad(node: internal / modules / cjs / loader: 245: 24)
    //at Module.executeUserEntryPoint[as runMain](node: internal/modules/run_main: 154: 5)
    //at node: internal / main / run_main_module: 33: 47
//
//Node.js v24.13.1
//NO FUNCA AL INTENTAR EJECUTARLO, REVISAR!