// Sebuah fungsi yang memanggil dirinya sendiri
for (let index = 10; index >= 1; index--) {
    console.log(index);
}

// dengan function
function tampilAngka(n) {
    if(n === 0) return 0;
    console.log(n);
    return tampilAngka(n-1);
}
tampilAngka(10);

// Faktorial dengan function
function Faktorial(n) {
    if (n === 0) return 1;
    return n * Faktorial(n - 1);
}
console.log(Faktorial(5));
