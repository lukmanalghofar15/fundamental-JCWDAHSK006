// ==================================== Soal 1 ============================
const angka1: number = 15;

if (angka1 % 2 === 0) {
    console.log("genap");
} else {
    console.log("ganjil");
}



// ==================================== Soal 2 ============================
const angka2: number = 7;
let angkaPrima: boolean = true;

if (angka2 <= 1) {
  angkaPrima = false;
} else {
  for (let i = 2; i < angka2; i++) {
    if (angka2 % i === 0) {
      angkaPrima = false;
      break;
    }
  }
}

if (angkaPrima) {
  console.log(angka2);
} else {
  console.log(angka2);
}










// ==================================== Soal 3 ============================
const angka3: number = 3;
let N: number = 0;

for (let i = 1; i <= angka3; i++) {
  N += i;
}

console.log(N);













// ==================================== Soal 4 ============================


const angka4: number = 3;
let angkaFaktorial: number = 1;

for (let i = angka4; i >= 1; i--){
  angkaFaktorial *= i;
}

console.log(angkaFaktorial);






// ==================================== Soal 5 ============================

//angka fibonacci = 0,1,1,2,3,5,8,13,21,34

const angka5: number = 7;
let angkaFibonacci: number = 0;

if (angka5 === 0) {
  angkaFibonacci = 0;
} else if (angka5 === 1) {
  angkaFibonacci = 1;
} else {
  let a: number = 0;
  let b: number = 1;

  for (let i = 2; i <= angka5; i++) {
    angkaFibonacci = a + b;
    a = b;
    b = angkaFibonacci;
  }
}
console.log(angkaFibonacci);