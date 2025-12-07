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

rl.question('Choose first number: ', (num1) => {
    const a = parseFloat(num1);
    if (a > randomNum) {
        console.log(`Choose lower number then ${a}.`);
    } else if (a === randomNum) {
        console.log(`You won the correct number is ${a}.`);
        rl.close()
        return;
    } else {
        console.log(`Choose higher number then ${a}.`);
    }
    console.log("");

    rl.question("Choose second number: ", (num2) => {
        const b = parseFloat(num2);
        if (b > randomNum) {
            console.log(`Choose lower number then ${b}.`);
        } else if (b === randomNum) {
            console.log(`You won the correct number is ${b}.`);
            rl.close()
            return;
        } else {
            console.log(`Choose higher number then ${b}.`);
        }
        console.log("");

        rl.question("Choose third number: ", (num3) => {
            const c = parseFloat(num3);
            if (c > randomNum) {
                console.log(`Choose lower number then ${c}.`);
            } else if (c === randomNum) {
                console.log(`You won the correct number is ${c}.`);
                rl.close()
                return;
            } else {
                console.log(`Choose higher number then ${c}.`);
            }
            console.log("");

            rl.question("Choose fouth number: ", (num4) => {
                const d = parseFloat(num4);
                if (d > randomNum) {
                    console.log(`Choose lower number then ${d}.`);
                } else if (d === randomNum) {
                    console.log(`You won the correct number is ${d}.`);
                    rl.close()
                    return;
                } else {
                    console.log(`Choose higher number then ${d}.`);
                }
                console.log("");

                rl.question("Choose fifth number: ", (num5) => {
                    const e = parseFloat(num5);
                    if (e > randomNum) {
                        console.log(`Choose lower number then ${e}.`);
                    } else if (e === randomNum) {
                        console.log(`You won the correct number is ${e}.`);
                        rl.close()
                        return;
                    } else {
                        console.log(`Choose higher number then ${e}.`);
                    }
                    console.log("");

                    rl.question("Choose sixth number: ", (num6) => {
                        const f = parseFloat(num6);
                        if (f > randomNum) {
                            console.log(`Choose lower number then ${f}.`);
                        } else if (f === randomNum) {
                            console.log(`You won the correct number is ${f}.`);
                            rl.close()
                            return;
                        } else {
                            console.log(`Choose higher number then ${f}.`);
                        }
                        console.log("");

                        rl.question("Choose seventh number: ", (num7) => {
                            const g = parseFloat(num7);
                            if (g > randomNum) {
                                console.log(`Choose lower number then ${g}.`);
                            } else if (g === randomNum) {
                                console.log(`You won the correct number is ${g}.`);
                                rl.close()
                                return;
                            } else {
                                console.log(`Choose higher number then ${g}.`);
                            }
                            console.log("");

                            rl.question("Choose eighth number: ", (num8) => {
                                const h = parseFloat(num8);
                                if (h > randomNum) {
                                    console.log(`Choose lower number then ${h}.`);
                                } else if (h === randomNum) {
                                    console.log(`You won the correct number is ${h}.`);
                                    rl.close()
                                    return;
                                } else {
                                    console.log(`Choose higher number then ${h}.`);
                                }
                                console.log("");
                            
                                rl.question("Choose ninth number: ", (num9) => {
                                    const i = parseFloat(num9);
                                    if (i > randomNum) {
                                        console.log(`Choose lower number then ${i}.`);
                                    } else if (i === randomNum) {
                                        console.log(`You won the correct number is ${i}.`);
                                        rl.close()
                                        return;
                                    } else {
                                        console.log(`Choose higher number then ${i}.`);
                                    }
                                    console.log("");

                                    rl.question("Choose tenth number: ", (num10) => {
                                        const j = parseFloat(num10);
                                        if (j > randomNum) {
                                            console.log(`Choose lower number then ${j}.`);
                                        } else if (j === randomNum) {
                                            console.log(`You won the correct number is ${j}.`);
                                            rl.close()
                                            return;
                                        } else {
                                            console.log(`Choose higher number then ${j}.`);
                                        }
                                        console.log("");

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


//refactor in progress;

// function checkNumber(num) {
//     if (num > randomNum) {
//         console.log(`Choose lower number then ${num}.`);
//     } else if (num === randomNum) {
//         console.log(`You won the correct number is ${num}.`);
//         gameOver = true;
//         rl.close()
//         return;
//     } else {
//         console.log(`Choose higher number then ${num}.`);
//     }
//     console.log("");
// }

// function askQuestion() {
//     for(let i = 0; i <= 10; i++) {
//         rl.question('Choose first number: ', (answer) => {
//             const a = parseFloat(answer);
//             checkNumber(a);
//         });
//     }
// }

// askQuestion()