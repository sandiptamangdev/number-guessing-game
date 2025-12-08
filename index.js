// can't use for loop as it is synchronous and rl.question is asynchronous.

import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("");
console.log("====== Welcome ======");
console.log("");
console.log("The number is between 1 - 100.");
console.log("You have 10 attempts to guess the number.");
console.log("");

const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

function checkNumber(num) {

    if (num === randomNum) {
        console.log(`You won the correct number is ${num}.`);
        // rl.close();
        return true;
    } else if (num > randomNum) {
        console.log(`Choose lower number then ${num}.`);
    } else {
        console.log(`Choose higher number then ${num}.`);
    }
    console.log("");
    return false;
}

rl.question('Choose first number: ', (num1) => {
    const a = parseFloat(num1);
    if(checkNumber(a)) {
        rl.close();
        return;
    }

    rl.question("Choose second number: ", (num2) => {
        const b = parseFloat(num2);
            if(checkNumber(b)) {
                rl.close();
                return;
            }

        rl.question("Choose third number: ", (num3) => {
            const c = parseFloat(num3);
                if(checkNumber(c)) {
                    rl.close();
                    return;
                }

            rl.question("Choose fouth number: ", (num4) => {
                const d = parseFloat(num4);
                    if(checkNumber(d)) {
                        rl.close();
                        return;
                    }

                rl.question("Choose fifth number: ", (num5) => {
                    const e = parseFloat(num5);
                        if(checkNumber(e)) {
                            rl.close();
                            return;
                        }

                    rl.question("Choose sixth number: ", (num6) => {
                        const f = parseFloat(num6);
                            if(checkNumber(f)) {
                                rl.close();
                                return;
                            }

                        rl.question("Choose seventh number: ", (num7) => {
                            const g = parseFloat(num7);
                                if(checkNumber(g)) {
                                    rl.close();
                                    return;
                                }

                            rl.question("Choose eighth number: ", (num8) => {
                                const h = parseFloat(num8);
                                    if(checkNumber(h)) {
                                        rl.close();
                                        return;
                                    }
                            
                                rl.question("Choose ninth number: ", (num9) => {
                                    const i = parseFloat(num9);
                                        if(checkNumber(i)) {
                                            rl.close();
                                            return;
                                        }

                                    rl.question("Choose tenth number: ", (num10) => {
                                        const j = parseFloat(num10);
                                            if(checkNumber(j)) {
                                                rl.close();
                                                return;
                                            }

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


// rl.question('Choose first number: ', (answer) => {
//     const a = parseFloat(answer);
//     checkNumber(a);
// });

// A loop that runs 10 times

// rl.question('Choose number: ', (answer) => {
//     // This callback is executed *later* when the user responds.
//     const a = parseFloat(answer);
//     checkNumber(a);
// });


// function askQuestion() {
//     // for(let i = 10; i <= 0; i--){
//         rl.question('Choose first number: ', (answer) => {
//             const a = parseFloat(answer);
//             checkNumber(a);
//         });
//     // }
// }

// askQuestion()
