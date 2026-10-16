import { daftarProyek } from "./app.js";

const container = document.querySelector("#daftar-film-body");
const filterRow = document.querySelector("#filter");
const empty = document.querySelector("#empty");

// Membuat satu baris film
function buatBarisFilm(film) {
  const baris = document.createElement("tr");

  const judul = document.createElement("th");
  judul.scope = "row";
  judul.textContent = film.judul;

  const tahun = document.createElement("td");
  tahun.textContent = film.tahun;

  const rating = document.createElement("td");
  rating.textContent = film.rating;

  const sutradara = document.createElement("td");
  sutradara.textContent = film.sutradara;

  baris.append(judul, tahun, rating, sutradara);

  return baris;
}

// Menampilkan daftar film
function renderDaftarFilm(daftar) {
  container.textContent = "";

  empty.hidden = daftar.length !== 0;

  daftar.forEach((film) => {
    container.append(buatBarisFilm(film));
  });
}

// Menampilkan semua film saat halaman dibuka
renderDaftarFilm(daftarProyek);

// Filter kategori film menggunakan event delegation
filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button || !filterRow.contains(button)) return;

  const kategori = button.dataset.category;

  const hasilFilter = daftarProyek.filter(
    (film) => kategori === "all" || film.kategori === kategori,
  );

  renderDaftarFilm(hasilFilter);

  document.querySelectorAll("#filter button").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
});

// Validasi form tambah film
const form = document.querySelector("#tambah-film form");

const fieldForm = [
  {
    input: document.querySelector("#judul-film"),
    valid: (value) => value.trim() !== "",
  },
  {
    input: document.querySelector("#tahun-film"),
    valid: (value) =>
      value.trim() !== "" && Number(value) >= 1900 && Number(value) <= 2026,
  },
  {
    input: document.querySelector("#rating-film"),
    valid: (value) =>
      value.trim() !== "" && Number(value) >= 0 && Number(value) <= 10,
  },
];

const tombolSimpan = form.querySelector('button[type="submit"]');

function validasiField(field) {
  const valid = field.valid(field.input.value);
  const pesan = field.input.parentElement.querySelector(".pesan-galat");

  pesan.hidden = valid;
  field.input.setAttribute("aria-invalid", String(!valid));

  return valid;
}

function validasiForm() {
  const hasil = fieldForm.map(validasiField);

  tombolSimpan.disabled = !hasil.every(Boolean);

  return hasil.every(Boolean);
}

fieldForm.forEach((field) => {
  field.input.addEventListener("input", validasiForm);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validasiForm()) {
    const fieldPertama = fieldForm.find(
      (field) => !field.valid(field.input.value),
    );

    fieldPertama.input.focus();
    return;
  }

  const kategori = document.querySelector("#kategori-film").value;

  if (!kategori) {
    document.querySelector("#kategori-film").focus();
    alert("Silakan pilih kategori film.");
    return;
  }

  const filmBaru = {
    judul: document.querySelector("#judul-film").value.trim(),
    tahun: Number(document.querySelector("#tahun-film").value),
    rating: Number(document.querySelector("#rating-film").value),
    sutradara: "Belum diketahui",
    kategori: kategori,
  };

  daftarProyek.push(filmBaru);

  renderDaftarFilm(daftarProyek);

  document.querySelector('#filter button[data-category="all"]').click();

  form.reset();
  validasiForm();

  alert("Film berhasil ditambahkan!");
});
