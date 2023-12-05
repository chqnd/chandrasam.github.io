let konfirmasi = confirm("Apakah angka-mu ganjil / genap?");

if(konfirmasi == true){
  let angka = parseInt(prompt("Masukkan angka"));
  
  (angka % 2 == 0) ? alert("ini mah Genap") :alert("Kalo ini Ganjil");
}else{
  alert("OK");
}