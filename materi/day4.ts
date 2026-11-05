// ==================================== ARRAY ===========================
/*
Array --> cara untuk menyimpan beberapa nilai dalam satu variabel
*/

const angka1: number[] = [1, 2, 3, 4, 5];

console.log(angka1[4]);
console.log(angka1[angka1.length - 1]);

// .push


// .pop


// unshift


// untuk mencari di browsing:  mdn array


// ==================================== ARRAY Build in Methods ===========================


// additional information: letter of letter --> contoh artinya setiap letter di dalam letter, tampilkan letter tersebut

// for each
//cara 1
angka1.forEach((value) => {
    console.log(value);
});
//cara 2
angka1.forEach(function (value) {
    console.log(value);
});


//filter
const angka2 = angka1.filter((value) => {
    return value > 0;
});
console.log(angka2);


// ==================================== Function ===========================
// cara memudahkan pengulangan kode, contoh console.log


// membangun fungsi berdasarkan fitur yang ingin dibangun


// Function Hoisting


// Function Scope


// Multiple function parameter


// ==================================== Function Programming Concept ===========================



// ==================================== Nested Function ===========================



// ==================================== Arrow Function vs Function Expression  ===========================



// ==================================== Arrow Function Limitation  ===========================



