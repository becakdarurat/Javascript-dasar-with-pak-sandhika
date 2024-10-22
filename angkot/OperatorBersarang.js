let s = ``;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        s += '*';
    }
    s += `\n`;
}

let b = ``;
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        b += '*';
    }
    b += `\n`;
}
console.log(s);
console.log(b);
