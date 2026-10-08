const profil = {
  nama: "Arsya Amalia",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahFilm = 3;

const kalimat = `Nama saya ${profil.nama}, dan saya memiliki koleksi ${jumlahFilm} film.`;

console.log(kalimat);

console.log(profil);
console.log(jumlahFilm);
console.log(profil.nama);

// Fungsi untuk membuat kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi untuk mengubah daftar keahlian menjadi satu baris
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

globalThis.buatPerkenalan = buatPerkenalan;
globalThis.formatKeahlian = formatKeahlian;

const daftarProyek = [
  {
    judul: "Interstellar",
    tahun: 2014,
    rating: 8.6,
    sutradara: "Christopher Nolan",
  },
  {
    judul: "Parasite",
    tahun: 2019,
    rating: 8.6,
    sutradara: "Bong Joon Ho",
  },
  {
    judul: "Spider-Man: No Way Home",
    tahun: 2021,
    rating: 8.2,
    sutradara: "Jacob Kogan",
  },
];

console.table(daftarProyek);
const filmRatingTinggi = daftarProyek.filter((film) => film.rating >= 8.5);

console.table(filmRatingTinggi);
const filmParasite = daftarProyek.find((film) => film.judul === "Parasite");

console.log(filmParasite);
const judulFilm = daftarProyek.map((film) => film.judul);

console.log(judulFilm);
const urut = [...daftarProyek].sort((a, b) => b.rating - a.rating);

console.table(urut);
console.table(daftarProyek);
