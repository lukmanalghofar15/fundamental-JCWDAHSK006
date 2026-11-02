console.log("Hello World");

// komen 1 (short)

/*

komen 2 (long)

*/

// ini komen 3 --> command slash (cmd + /)


// ini
// komen
// panjang
// cmd plus slash


// ================================= Variabel ==========================

// storage / penampungan data
// var, (let, const)

var person = "Budi";
console.log(person);

// bisa ubah storage (karakteristik let)
let person2 = "Siti";
person2 = "Anwar";
console.log(person2);

const person3 = "Lukman";
// person3 = "Orang";  --> Error / tidak bisa
console.log(person3);

// var memperbolehkan variabel dengan nama yang sama, sedangkan let dan const tiidak memperbolehkan



// ============================== Variable Naming ==========================
/*
- must contain only letter, digit, or symbol "$" and "_"
- the first character must not digit
- case sensitive
*/

const companyName = "Purwadhika" //camel case (Js best practices)
const CompanyName = "Purwadhika" //pascal case
const company_name = "Purwadhika" //snake case


// =============================== Data Types =================================
// primitive data : string, number, boolean, null, and undefined
// non-primitive data : object & array

//string --> "" '' ``
console.log("World");
console.log('World');
console.log(`World`);

//numbers --> 1 2 3 4 100 500 10000 40000 -10 2.5
console.log(1);
console.log(2);
console.log(100);

//boolean --> true & false
console.log(true);
console.log(false);

// null --> menandakan value itu masih kosong dan belum terisi
let nama = null;

// undefined --> Js tidak tahu isinya, ngasih tau tidak bakal diisi
let nama2 = undefined;

// quokka launch
// Mac: commmand + k + q
//Win: ctrl k + q