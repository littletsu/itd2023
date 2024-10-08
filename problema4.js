const readline = require("readline")

const interface = readline.createInterface({input: process.stdin});
const line = interface[Symbol.asyncIterator]();

async function main() {
    const n = Number((await line.next()).value);
    let out = [];

    for(let i = 0; i < n; i++) {
        const [nj, nu] = (await line.next()).value.split(" ").map(n => Number(n));
        const j = (await line.next()).value.split(" ").slice(0, nj).map(n => Number(n));
        let u = (await line.next()).value.split(" ").slice(0, nu).map(n => Number(n));

        let tallas = {}

        for(let talla of u) {
            tallas[talla] = (tallas[talla] || 0) + 1;
        }

        function consumir(n) {
            let uniforme = tallas[n]
            if(uniforme == undefined || uniforme <= 0) {
                return false;
            }
            tallas[n] -= 1
            return true;
        }

        let suma = 0;
        for(let talla of j) {
            if(!consumir(talla) && !consumir(talla+1)) {
                suma++;
            }
        }

        out.push(suma)
    }

    console.log(out.join("\n"))
    interface.close();
}

main();