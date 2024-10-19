// Control flow dengan perulangan
console.log(`Hello World!`);
console.log(`Hello World!`);
console.log(`Hello World!`);
console.log(`Hello World!`);
console.log(`Hello World!`);

// dengan perulangan control flow
for (let index = 0; index <= 5; index++) {
    console.log(`Halo Dunia`);
}

// dengan perkondisian
let angka = prompt('Masukkan angka :');
if ( angka % 2 == 0 ) { 
    console.log(`adalah bilangan GENAP`);
 } else { 
    console.log(`adalah bilangan GANJIL`);
};

// if dengan unary
const bilangan = 10 % 2 === 0 ? "adalah Bilangan GENAP" : "adalah Bilangan GANJIL";
console.log(bilangan);

