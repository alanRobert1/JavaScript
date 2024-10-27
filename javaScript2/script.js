// cara membuat object pada javascript
// 1. Object Literasi
let mahasiswa = {
    nama: 'sandhika',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log('Halo ${this.nama}, selamat makan!')
    }
}

let mahasiswa2 = {
    nama: 'galih',
    energi: 8,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log('Halo ${this.nama}, selamat makan!');
    }
}






// 2. Function Declaration
function Mahasiswa(nama, energi) {
    let Mahasiswa = {};
    Mahasiswa.nama = nama;
    Mahasiswa.energi = energi;
    
    Mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log('Halo ${this.nama}, selamat makan!');
    }
    
    Mahasiswa.main = function(jam) {
        this.energi -= jam;
        console.log('Halo ${this.nama}, selamat bermain!');
    }
    
    return Mahasiswa;
}

let sandhika = Mahasiswa('sandhika', 10);
let doddy = Mahasiswa('doddy', 10);






// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi) {
    // let Mahasiswa = {};
    this.nama = nama;
    this.energi = energi;
    
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log('Halo ${this.nama}, selamat makan!');
    }
    
    this.main = function(jam) {
        this.energi -= jam;
        console.log('Halo ${this.nama}, selamat bermain!');
    }
    
    // return Mahasiswa;
}

let Sandhika = new Mahasiswa('sandhika', 10);






// 4. Object.create
