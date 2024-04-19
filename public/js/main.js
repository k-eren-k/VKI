function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var gender = document.getElementById("gender").value;

  var bmi;
  if (gender === "male") {
    bmi = weight / (height * height);
  } else {
    bmi = 1.3 * (weight / (height * height));
  }

  var resultText = "";

  if (!isNaN(bmi)) {
    resultText = "Vücut Kitle İndeksi (VKİ): " + bmi.toFixed(2) + "<br>";
    resultText += "Durum: ";
    if (bmi < 18.5) {
      resultText += "Zayıf";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultText += "Normal";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      resultText += "Fazla Kilolu";
    } else {
      resultText += "Obez";
    }
  } else {
    resultText = "Lütfen Bilgileri Doldurun!";
  }

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = resultText;
  resultDiv.style.display = "flex";
}
