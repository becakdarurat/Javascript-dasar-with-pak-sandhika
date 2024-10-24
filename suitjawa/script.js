let tanya = true;
while ( tanya ) {
    // Menangkap Pilihan player 
    let p = prompt(`Pilih : gajah,semut,orang`);
    // Menangkap Pilihan Komputer
    // Membangkitkan bilangan random
    let comp = Math.random();

    if ( comp < 0.34 ) { 
        comp = `gajah`;
    } else if ( comp >= 0.34  && comp < 0.67 ) { 
        comp = `orang`;
    } else {
        comp = `semut`;
    };

    let hasil = ``;
    // Menentukan rules
    if ( p == comp ) { 
        hasil = `SERI`;
    } else if ( p == `gajah` ) { 
        hasil = ( comp == `orang` ) ? `MENANG!` : `KALAH!`;
    } else if ( p == `orang` ) {
        hasil = ( comp == `gajah` ) ? `MENANG!` : `KALAH!`;
    } else {
        hasil = `Memasukkan pilihan yang salah!!`;
    };

    // Tampilkan hasilnya
    alert(`Kamu memilih : ${p} dan komputer memilih : ${comp} \n Maka hasilnya : Kamu ${hasil}`);
    tanya = confirm(`Masih mau Lanjut ?`);
}
alert(`Terimakasih sudah bermain.`);