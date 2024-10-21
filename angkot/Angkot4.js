let jmlhAngkot = 10;
let angkotBeroperasi = 6;
let lembur = 8;
let noAngkot = 1;
while (noAngkot <= jmlhAngkot) {
    let rusak = noAngkot > angkotBeroperasi != lembur ? `Angkot No. ${noAngkot} sedang tidak beroperasi.` : `Angkot No. ${noAngkot} beroperasi dengan baik.`;
    if (noAngkot == lembur){
        rusak =  `Angkot No. ${lembur} sedang lembur`;
    }
  console.log(rusak);
  noAngkot++;
}
