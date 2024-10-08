const readline = require("readline")

const interface = readline.createInterface({input: process.stdin});
const line = interface[Symbol.asyncIterator]();

async function main() {
    const n = Number((await line.next()).value);
    const a = (await line.next()).value.split(" ").slice(0, n).map(n => Number(n));

    function divisor(num) {
        let max = 1;
        for(let i = 2; i < num; i++) {
            if((num % i) == 0 && i > max) max = i;
        }
        return max;
    }

    let out = [];

    for(let num of a) {
        let ultimo = num;
        let suma = num;
        do {
            ultimo = divisor(ultimo);
            suma += ultimo;
        } while(ultimo !== 1);
        out.push(suma);
    }

    console.log(out.join("\n"))

    interface.close();
}

main();