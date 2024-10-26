// Function Expression di Javascript
function jumlahDuaBilangan (a,b) {
    let total = 0;
    a += b;
    total = a;
    console.log(total);
    return total;
}
jumlahDuaBilangan(100,20);

// Menjumlahkan volume 2 kubus
function volume(a,b) {
    if(a === 1) {
        return 1;
    } else {
        return a * volume(a - 1);
    }
}

console.log(volume(8));
