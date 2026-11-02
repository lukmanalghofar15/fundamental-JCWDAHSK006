//versi Js
const pesan = "Test";

//versi Ts
const pesan1: string = "Test";


// ================================== String Built In Method ====================================

const name: string = "BudiB World";
const name2: string = "Ucok";

console.log(name.toLowerCase());  //mau dijadiin huruf kecil semua
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.concat(" ").concat(name2));
console.log(name + " " + name2);
console.log(name.slice(0 , 3));
console.log(name.split(""));
console.log(name.split(" "));
console.log(name.split(''));


// ==================================== Template Literals / Template String =========================
const welcome: string = "Welcome";
const name3: string = "Dora";

console.log(welcome + " " + name3);

console.log(`${welcome} ${name3} kalimat yang ingin dibuat`);


// ==================================== Number Built in Method =========================
const angka: string = "1000";

console.log(angka);

console.log(Number(angka));
console.log(parseInt(angka));


// ==================================== String Conversion =========================
const angka2: number = 2000;

console.log(angka2);

console.log(String(angka2));
console.log(angka2.toString());


// ==================================== Boolean Conversion =========================
console.log(Boolean(300));
console.log(Boolean(-300));
console.log(Boolean(0));
console.log(Boolean(0.45));
console.log(Boolean("budi"));
console.log(Boolean(""));
console.log(Boolean());
console.log(Boolean(" "));


// ==================================== Date =========================

const now = new Date();

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getMinutes());
console.log(now.getHours());


// ==================================== Basic Operator =========================
/* 

+ --> Penjumlahan
- --> Pengurangan
* --> Perkalian
/ --> Pembagian
% --> Modulo (Sisa Bagi)
** --> Pangkat

*/

console.log(1 + 2);
console.log(1 - 2);
console.log(2 * 2);
console.log(6 / 2);
console.log(2 % 2);
console.log(3 % 2);
console.log(3 ** 2);


// ==================================== Modify in Place =========================

let n: number = 7;
let p: number = 7;


n += 2; // n = n + 2
p %= 2; // p = p % 2

console.log(n);
console.log(p);


// ==================================== Increment & Decrement =========================

let counter: number = 1;

//increment
counter++;
console.log(counter);
counter++;
console.log(counter);

//decrement
counter--;
console.log(counter);
counter--;
console.log(counter);


// ==================================== Comparison Operator =========================

/*

== --> (Value saja)
=== --> (Value & Type Data)
<
>
<=
>=

*/

// console.log(2 == "2");  --> pengecekan valuenya saja, hasilnya: true
// console.log(2 === "2");  --> pengecekan value dan tipe datanya, hasilnya: false

console.log(2 > 1);
console.log(2 < 1);
console.log(4 >= 4);
console.log(4 > 4);
console.log(2 <= 2);
console.log(2 < 2);


// ==================================== Math =========================

console.log(Math.ceil(4.2));  // membulatkan ke atas
console.log(Math.floor(4.2)); // membulatkan ke bawah
console.log(Math.round(4.6)); // membulatkan angka ke bilanga bulat terdekat
console.log(Math.round(4.2)); // membulatkan angka ke bilanga bulat terdekat

console.log(Math.max(0.1, 1, 2, 3, 10, 1000, 5000, 23)); // mencari angka yang paling besar
console.log(Math.min(0.1, 1, 2, 3, 10, 1000, 5000, 23)); // mencari angka yang paling kecil

console.log(Math.abs(-0.1)); // menghilangkan tanda negatif

console.log(Math.random()); // menghasilkan angka random/acak antara 0 sampai 1

/*

LATIHAN: MEMBUAT ANGKA ACAK DALAM RANGE SPESIFIK

*/

