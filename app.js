/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Script app,jd telah terhubung!");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

const NAMA_KEDAI = "Kopi PSTI UPI";
let nama_kasir = "Kak Eko";
let shift_kerja = "Sore";

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

nama_kasir = "Kak Kiki";
console.log("Nama Kasir : " + nama_kasir);

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

alert("Selamat Datang di Kedai Kopi PSTI Kampus UPI!");
let nama_pelanggan = prompt("Halo! Masukkan nama anda untuk memulai: ");
if (nama_pelanggan) {
    alert("Halo, " + nama_pelanggan + "! Kopi PSTI siap menemani.");
    console.log("Pelanggan Kopi PSTI : " + nama_pelanggan);
} else {
    alert("Anda tidak memasukkan nama, anda akan dipanggil Pelanggan Setia!");
    nama_pelanggan = "Pelanggan Setia";
    console.log("Pelanggan Setia " + nama_pelanggan);
}

// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().

let poin_kopi = 19;
let poin_makanan = 49;
let poin_merchandise = 35;

let total_poin = poin_kopi + poin_makanan + poin_merchandise;

console.log("=== Poin " + nama_pelanggan +  "===");
console.log("Poin Kopi : " + poin_kopi);
console.log("Poin Makanan : " + poin_makanan);
console.log("Poin Merchandise : " + poin_merchandise);

console.log("Jumlah poin anda adalah " + total_poin);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

let TierMember = "";
let Benefit = ""; 

if(total_poin >= 100) {
    TierMember = "Platinum";
    Benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (total_poin >= 70) {
    TierMember = "Gold";
    Benefit = "Diskon 10% di setiap transaksi";
} else if (total_poin >= 40) {
    TierMember = "Silver";
    Benefit = "Diskon 5% untuk menu minuman";
} else {
    TierMember = "Bronze";
    Benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}

console.log("Tier Member anda adalah : " + TierMember + " Benefit : " + Benefit);
alert(
    "Total Poin " + nama_pelanggan + ":\n" +
    "Jumlah Poin : " + total_poin + ":\n" +
    "Tier Member : " + TierMember + " Benefit : " + Benefit
)


// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function hitungTotalPoin(p1, p2, p3){
    let jumlah = p1 + p2 + p3;
    return jumlah / 3;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function tentukanTierMember(poin){
    if (TierMember >= 100) return "Platinum";
    if (TierMember >= 70) return "Gold";
    if (TierMember >= 40) return "Silver";
    return "Bronze";
}

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

let poin_pelanggan_B = hitungTotalPoin(45, 20, 15); 
let tiermember_pelanggan_B = tentukanTierMember(poin_pelanggan_B); 

let poin_pelanggan_C = hitungTotalPoin(9, 19, 26);
let tiermember_pelanggan_C = tentukanTierMember(poin_pelanggan_C);

console.log("=== Data Pelanggan B ===");
console.log("Jumlah poin anda " + poin_pelanggan_B);
console.log("Tier Member anda " + tiermember_pelanggan_B);

console.log("=== Data Pelanggan C ===");
console.log("Jumlah poin anda " + poin_pelanggan_C);
console.log("Tier Member anda " + tiermember_pelanggan_C);

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let menuRekomendasi = [
    "Caramel Macchiato",
    "Kopi Susu Gula Aren", 
    "Vanilla Matcha Latte",
    "Tiramisu Cheese Cake", 
    "Croissant Cream Choco"
];
console.log("=== Menu Rekomendasi " + NAMA_KEDAI + "===")

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

for(let i = 0; i < menuRekomendasi.length; i++){
    console.log ((i+1) + ". " + menuRekomendasi[i]);
}

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

console.log("Total menu : " + menuRekomendasi.length);
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");