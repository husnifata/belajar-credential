// Impor library yang diperlukan
const express = require("express");
require("dotenv").config(); // Ini akan memuat variabel dari file .env

// Inisialisasi aplikasi
const app = express();

// Ambil PORT dari environment. Railway akan menyediakan ini secara otomatis.
// Jika tidak ada, gunakan port 3000 untuk lokal.
const PORT = process.env.PORT || 3000;

// --- INI BAGIAN PENTING ---
// Kita akan mengambil kredensial dari environment variables
const DB_PASSWORD = process.env.DB_PASSWORD || "Password DB tidak disetel!";
const API_KEY = process.env.API_KEY || "API Key tidak ditemukan!";
const JWT_SECRET = process.env.JWT_SECRET || "JWT Secret belum ada!";

// Buat halaman utama untuk menampilkan kredensial (HANYA UNTUK DEMO)
app.get("/", (req, res) => {
  res.send(`
    <h1>Praktik Pengelolaan Kredensial</h1>
    <p>Ini adalah nilai yang dibaca oleh server:</p>
    <ul>
      <li><b>Password Database:</b> ${DB_PASSWORD}</li>
      <li><b>API Key Service:</b> ${API_KEY}</li>
      <li><b>JWT Secret:</b> ${JWT_SECRET}</li>
    </ul>
    <p><i>Catatan: Menampilkan kredensial seperti ini di halaman web adalah praktik yang 
    <b>sangat tidak aman</b>. Ini hanya untuk tujuan demonstrasi agar kita bisa melihat nilainya.</i></p>
  `);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server demo berjalan di http://localhost:${PORT}`);
});
