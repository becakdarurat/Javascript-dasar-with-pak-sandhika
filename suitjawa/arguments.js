// Variable arguments di function
function tambah() {
  let hasil = 0;
  for (let index = 0; index < arguments.length; index++) {
    hasil += arguments[index];
  }
  return hasil;
}

let coba = tambah(1, 2, 3, 4, 5);
console.log(coba);
