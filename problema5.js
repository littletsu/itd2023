const readline = require("readline")

const interface = readline.createInterface({input: process.stdin});
const line = interface[Symbol.asyncIterator]();

async function main() {
    const [n, k] = (await line.next()).value.split(" ").map(n => Number(n));
    const t = (await line.next()).value.split(" ").slice(0, n).map(n => Number(n));

    let out = [];

    // let total = t.reduce((a, b) => a+b, 0);
    // let max = total
    
    // let suma = 0;
    // let i = 0;
    // let restante = 0;
    // while(i < 9) {
    //     suma = 0;
    //     for(let tiempo of t) {
    //         if((suma + tiempo) >= max) {
    //             break;
    //         }
    //         suma += tiempo;
    //     }
    //     console.log(max, suma, restante)
    //     restante = total - suma;
    //     max = suma;
    //     i++;
    // }

    function esFactible(maxTime) {
        let tejedoresNecesarios = 1;
        let tiempoActual = 0;
        for (let i = 0; i < n; i++) {
            if (tiempoActual + t[i] > maxTime) {
                tejedoresNecesarios++;
                tiempoActual = t[i];
                if (tejedoresNecesarios > k) {
                    return false;
                }
            } else {
                tiempoActual += t[i];
            }
        }
        return true;
    }
    function tejedores(t) {
        let minTime = Math.max(...t);
        let maxTime = t.reduce((a, b) => a + b, 0);
        let resultado = maxTime;
        while (minTime <= maxTime) {
            let midTime = Math.floor((minTime + maxTime) / 2);


            if (esFactible(midTime)) {
                resultado = midTime;
                maxTime = midTime - 1;
            } else {
                minTime = midTime + 1;
            }
        }
        return resultado;
    }
    let resultado = tejedores(t);

    out.push(resultado)

    console.log(out.join("\n"))
    interface.close();
}

main();