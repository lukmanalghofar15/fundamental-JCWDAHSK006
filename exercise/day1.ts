// ===================================== NOMOR 1 ===============================================
/*
Write a code to find area of rectangle.
*/

const panjang: number = 5;
const lebar: number = 3;

const luasRectangle: number = panjang * lebar;
console.log(luasRectangle);


// ===================================== NOMOR 2 ===============================================
/*
Write a code to find perimeter of rectangle.
*/

const keliling: number = 2 * (panjang + lebar);
console.log(keliling);


// ===================================== NOMOR 3 ===============================================
/*
Write a code to find diameter, circumference and area of a circle.
*/

const radius: number = 5;

const diameter: number = 2 * radius;
const circumference: number = 2 * (Math.PI) * radius;
const luasLingkaran: number = (Math.PI) * (radius**2);

console.log(`diameter = ${diameter}, circumference = ${circumference}, area = ${luasLingkaran}`);


// ===================================== NOMOR 4 ===============================================
/*
Write a code to find angles of triangle if two angles are given.
*/
const sudutA: number = 80;
const sudutB: number = 65;

const sudutC: number = 180 - (sudutA + sudutB);
console.log(sudutC);


// ===================================== NOMOR 5 ===============================================
/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
*/
const totalHari: number = 400;

const tahun: number = Math.floor(totalHari / 365);
let sisaHari: number = totalHari % 365;

const bulan: number = Math.floor(sisaHari / 30);
sisaHari = sisaHari % 30;

console.log(`${totalHari} days -> ${tahun} year, ${bulan} month, ${sisaHari} days`);


// ===================================== NOMOR 6 ===============================================
/*
Write a code to get difference between dates in days.
*/
const tanggal1: Date = new Date("2022-01-20");
const tanggal2: Date = new Date("2022-01-22");

// Menghitung selisih waktu dalam milidetik (jumlah detik)
const selisihWaktu: number = Math.abs(tanggal2.getTime() - tanggal1.getTime());

// Mengonversi milidetik ke hari (1 hari = 24 jam * 60 menit * 60 detik * 1000 milidetik)
const selisihHari: number = Math.ceil(selisihWaktu / (1000 * 3600 * 24));

console.log(selisihHari);