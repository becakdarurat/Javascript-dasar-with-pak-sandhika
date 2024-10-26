// Hitung Volume
let a = 8;
let b = 3;
let volumeA;
let volumeB;
let total;

volumeA = a * a * a;
volumeB = b * b * b;

total = volumeA + volumeB;
console.log(total);

// dengan function 
function tambahData(a,b){
    let total = 0;
    a *= b;

    total = a;
    return total;
}

// Dengan function
function jumlahVolumeDuaKubus(a,b) {

    return a * a * a + b * b * b;
}

console.log(jumlahVolumeDuaKubus(8,3));


console.log(tambahData(8,3));
console.log(tambahData(3,3));
console.log(tambahData(volumeA,volumeB));

