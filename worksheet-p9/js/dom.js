import { daftarProyek } from "./app.js";

const container = document.querySelector("#daftar-film-body");

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
function renderDaftarFilm(daftar) {
  container.textContent = "";

  daftar.forEach((film) => {
    container.append(buatBarisFilm(film));
  });
}

renderDaftarFilm(daftarProyek);
