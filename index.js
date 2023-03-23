const form = document.getElementById("formKalkulatorBmi");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // memanggil element input form
  const { jenis_kelamin, beratBadan, usia, tinggiBadan } = e.target;

  // menyimpan value dari element input
  const data = {
    jenis_kelamin: jenis_kelamin.value,
    beratBadan: Number(beratBadan.value),
    usia: Number(usia.value),
    tinggiBadan: Number(tinggiBadan.value),
  };

  // menghitung bmi
  var bmi =
    data.beratBadan / (((data.tinggiBadan / 100) * data.tinggiBadan) / 100);

  bmi = bmi.toFixed(1);

  const displayHasilBmi = document.getElementById("displayHasilBmi");

  const elementHasilBmi = makeElementHasilBmi(bmi);

  displayHasilBmi.innerHTML = elementHasilBmi;

  location.href = "#displayHasilBmi";
});

function makeElementHasilBmi(bmi) {
  var hasilKet, hasilKualitas, kualitasBmi, saranBmi;

  if (bmi < 18.5) {
    hasilKualitas = "Berat Badan Kurang";
    hasilKet = "Anda kekurangan berat badan";
    kualitasBmi = "Hasil BMI &lt; 18.5";
    saranBmi = `Anda berada dalam kategori kekurangan berat badan.<br>
    Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.`;
  } else if (bmi < 25) {
    hasilKualitas = "Normal";
    hasilKet = "Anda memiliki berat badan ideal.<br>Good job!";
    kualitasBmi = "Hasil BMI diantara 18.5 dan 24.9";
    saranBmi = `Anda berada dalam kategori berat badan yang normal.<br>
    Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.`;
  } else if (bmi < 30) {
    hasilKualitas = "Berat Badan Lebih";
    hasilKet = "Anda memiliki berat badan berlebih";
    kualitasBmi = "Hasil BMI diantara 25 dan 29.9";
    saranBmi = `Anda berada dalam kategori overweight atau berat badan berlebih.<br>
    Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.
    Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.`;
  } else {
    hasilKualitas = "Obestias";
    hasilKet = "Anda berada dalam kategori obesitas";
    kualitasBmi = "Hasil BMI lebih dari 25";
    saranBmi = `Anda berada dalam kategori obesitas.<br>
    Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.
    Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.`;
  }

  const elementHasilBmi = `
  <div class="container2">
          <h2>HASIL</h2>
          <div class="" style="display: flex; gap: 2rem; flex-wrap: wrap">
            <div class="col" style="flex: 1; text-align: center">
              <div class="hasil">
                <p id="p1">${hasilKualitas}</p>
                <h2>${bmi}</h2>
                <p>${hasilKet}</p>
                <a href="#" class="unduhHasilBMI">Download Hasil BMI</a>
              </div>
              <div class="APK">
                <h3>Download Aplikasi</h3>
                <div class="listApk">
                  <a href="#"
                    ><img
                      src="https://static.rsmurniteguh.app/sites/Images/Content/google-play.png"
                      alt=""
                  /></a>
                  <a href="#"
                    ><img
                      src="https://static.rsmurniteguh.app/sites/Images/Content/app-store.png"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
            <div class="col keterangan" style="flex: 1">
              <p>${kualitasBmi}</p>
              <p>
                ${saranBmi}
              </p>
              <div class="konsultasi">
                <a
                  href="https://play.google.com/store/apps/details?id=com.rsmurniteguh.mobileapps.droid"
                  >Konsultasi Ahli Gizi Via Aplikasi</a
                >
                <a
                  href="https://www.rsmurniteguh.com/id/Entity?type=ONLINE_APPOINTMENT&poly=PSBSGK"
                  >Regristrasi Online Ahli Gizi</a
                >
              </div>
              <p>
                BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari
                kesehatan tubuh dan resiko penyakit seseorang. Anda perlu
                konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda
                terkait dengan berat badan Anda.
              </p>
            </div>
          </div>
        </div>
  `;

  return elementHasilBmi;
}
