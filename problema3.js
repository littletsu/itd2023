const readline = require("readline")

const interface = readline.createInterface({input: process.stdin});
const line = interface[Symbol.asyncIterator]();

async function main() {
    const n = Number((await line.next()).value);
    let out = [];

    for(let i = 0; i < n; i++) {
        const an = Number((await line.next()).value);
        const a = (await line.next()).value.split(" ").slice(0, an).map(n => Number(n));

        let anterior = 0;
        let suma = 0;

        for(let num of a) {
            if(num > anterior) {
                anterior = num;
                continue
            }
            suma++;
        }

        out.push(suma)
    }

    console.log(out.join("\n"))
    interface.close();
}

main();