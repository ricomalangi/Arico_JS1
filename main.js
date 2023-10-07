// contoh program if else
let umur = 21;
if(umur < 3){
    console.log('Anda mendapatkan tiket gratis nonton film A')
} else {
    console.log('Anda dikenakan biaya untuk nonton film A')
}

// contoh program nested if
let isDaftarWisuda = true;
let isBayarWisuda = false;
let pesan = '';
if(isDaftarWisuda){
    pesan += 'Anda sudah daftar wisuda '
    if(isBayarWisuda){
        pesan += 'dan Anda sudah bayar wisuda '
    } else{
        pesan += 'tapi Anda belum bayar wisuda '
    }
} else {
    pesan += 'Anda belum daftar wisuda '
}
console.log(pesan)

// switch case
let menu = 1
switch (menu) {
    case 1:
        console.log('Halaman Home Page')
        break;
    case 2:
        console.log('Halaman About Us')
        break;
    case 2:
        console.log('Halaman Contact')
        break;
    default:
        console.log('Halaman tidak ditemukan')
        break;
}

// for statement
for (let index = 1; index < 10; index+=2) {
    console.log(index)    
}

// while
let temperature = 20
while (temperature < 30) {
    console.log(`Temperature is ${temperature}C`)
    temperature++
}

// do while
let number = 5;
let faktorial = 1;
let i = 1;

do {
  faktorial *= i;
  i++;
} while (i <= number);

console.log(`Faktorial dari ${number} adalah: ${faktorial}`);

// function
let bilangan = 10
function cekBilangan(bilangan){
    if(bilangan % 2 == 0 ){
        return `${bilangan} adalah genap`
    } else {
        return `${bilangan} adalah ganjil`
    }
}
console.log(cekBilangan(bilangan))