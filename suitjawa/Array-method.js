// Array Method
let buah = [`Mangga`, `Banana`, `Pisang`, `Tomat`];
buah.splice(4, 0, `Durian`, `Anggur`);
console.log(buah.join(`-`));

let buahan = [`Mangga`, `Banana`, `Pisang`, `Tomat`];
let buahan1 = buahan.slice(1,3);
console.log(buahan1.join(`-`));
console.log(buahan.join(`-`));


// For each
let angka = [1,2,3,4,5,6,7,8,9,10];
angka.forEach(e => console.log(e));

// Nama nama mahasiswa
let namanama = [`galih`, `eko`, `sofyan`, `joko`];
namanama.forEach((e , i) => {
    console.log(`Mahasiswa ke-${i+1} adalah : ${e}`);
});

// Map 
let peta = [1,2,3,4,5,6,7,8,9,10];
let angkakali = peta.map(e => e * 2);
console.log(angkakali.join(`-`));

// Mengurutkan angka
let urutAngka = [1,2,10,5,20,3,6,8,4];
urutAngka.sort((a,b) => a-b);
console.log(urutAngka.join(`-`));

// Filter
let angkaFilter = [1,2,10,5,20,7,3,6,8,4];
let angkaseven = angkaFilter.find(x =>  x > 7);
console.log(angkaseven);



