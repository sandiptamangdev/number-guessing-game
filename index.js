const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("");
console.log("====== Welcome ======");
console.log("");
console.log("The number is between 1 - 100.");
console.log("You have 10 attempts to guess the number.");
console.log("");

const randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

function checkNumber(num) {
    if (num > randomNum) {
        console.log(`Choose lower number then ${num}.`);
    } else if (num === randomNum) {
        console.log(`You won the correct number is ${num}.`);
        return;
    } else {
        console.log(`Choose higher number then ${num}.`);
    }
    console.log("");
}


rl.question('Choose first number: ', (num1) => {
    const a = parseFloat(num1);
    checkNumber(a);

    rl.question("Choose second number: ", (num2) => {
        const b = parseFloat(num2);
        checkNumber(b);

        rl.question("Choose third number: ", (num3) => {
            const c = parseFloat(num3);
            checkNumber(c);

            rl.question("Choose fouth number: ", (num4) => {
                const d = parseFloat(num4);
                checkNumber(d);

                rl.question("Choose fifth number: ", (num5) => {
                    const e = parseFloat(num5);
                    checkNumber(e);

                    rl.question("Choose sixth number: ", (num6) => {
                        const f = parseFloat(num6);
                        checkNumber(f);

                        rl.question("Choose seventh number: ", (num7) => {
                            const g = parseFloat(num7);
                            checkNumber(g);

                            rl.question("Choose eighth number: ", (num8) => {
                                const h = parseFloat(num8);
                                checkNumber(h);
                            
                                rl.question("Choose ninth number: ", (num9) => {
                                    const i = parseFloat(num9);
                                    checkNumber(i);

                                    rl.question("Choose tenth number: ", (num10) => {
                                        const j = parseFloat(num10);
                                        checkNumber(j);

                                        console.log("Bro your luck is bad i gave you 10 attempt");

                                        rl.close();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    })
});