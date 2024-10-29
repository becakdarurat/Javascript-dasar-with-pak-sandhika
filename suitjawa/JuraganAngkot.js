// Juragan angkot
let penumpang = [];
let maxPenumpang = 10;

let tambahPenumpang = (namaPenumpang, penumpang) => {

     // Cek apakah jumlah penumpang sudah mencapai maksimal
    if (penumpang.length >= maxPenumpang) {
        console.log("Angkot sudah penuh");
        return penumpang;
    }

    // Jika angkot kosong
    if (penumpang.length === 0) {
        // Tambah penumpang diawal array
        penumpang.push(namaPenumpang);
    } else {
        // Cek apakah penumpang sudah ada
        let adaPenumpang = penumpang.includes(namaPenumpang);
        if (adaPenumpang) {
          console.log(`Penumpang ${namaPenumpang} sudah ada`);
        } else {
          penumpang.push(namaPenumpang);
        }
      }
      return penumpang;
};