const readline = require("readline")

const interface = readline.createInterface({input: process.stdin});
const line = interface[Symbol.asyncIterator]()

async function main() {

    const n = Number((await line.next()).value)

    let out = [];
    for(let i = 0; i < n; i++) {
        const vol = Number((await line.next()).value);
        out.push(Math.floor(vol / 100));
    }
    console.log(out.join("\n"));
    interface.close()
}

main();