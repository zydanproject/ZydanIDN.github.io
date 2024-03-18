class Siswa {
  constructor(nama, kelas, absen, nis) {
    this.nama = nama;
    this.kelas = kelas;
    this.absen = absen;
    this.nis = nis;
  }
}

const siswa = new Siswa("Muhammad Sultan Zidan", "XI-F5", 22, 9070);

const outputElement = document.getElementById("output");
outputElement.innerHTML += "<p>Data Siswa</p>";
outputElement.innerHTML += `<p>Nama   : ${siswa.nama}</p>`;
outputElement.innerHTML += `<p>NIS    : ${siswa.nis}</p>`;
outputElement.innerHTML += `<p>Kelas  : ${siswa.kelas}</p>`;
outputElement.innerHTML += `<p>Absen  : ${siswa.absen}</p>`;
