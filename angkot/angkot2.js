let jmlhAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;
while (noAngkot <= jmlhAngkot) {
    const rusak = noAngkot > angkotBeroperasi ? `Angkot No. ${noAngkot} sedang tidak beroperasi.` : `Angkot No. ${noAngkot} beroperasi dengan baik.`;
  console.log(rusak);
  noAngkot++;
}
