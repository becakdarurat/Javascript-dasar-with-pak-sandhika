let jmlhAngkot = 10;
let angkotBeroperasi = 6;
let lembur = [8 , 10 , 5];
let noAngkot = 1;
while (noAngkot <= jmlhAngkot) {
    let rusak = noAngkot > angkotBeroperasi != lembur ? `Angkot No. ${noAngkot} sedang tidak beroperasi.` : `Angkot No. ${noAngkot} beroperasi dengan baik.`;
    if (noAngkot == lembur[0] || noAngkot == lembur[1] || noAngkot == lembur[2]){
        rusak =  `Angkot No. ${noAngkot} sedang lembur`;
    }
  console.log(rusak);
  noAngkot++;
}
