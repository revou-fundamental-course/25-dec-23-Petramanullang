function calculateArea() {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
    const area = 0.5 * base * height;
    const areaFormula = "Luas = 1/2 x Alas x Tinggi";
    const areaCalculation = `Luas = 1/2 x ${base} x ${height}`;

    document.getElementById("areaFormula").innerText = areaFormula;
    document.getElementById("areaCalculation").innerText = areaCalculation;
    document.getElementById("areaResult").innerText = formatResult(area);

    document.getElementById("areaOutput").classList.remove("hidden");
  } else {
    Swal.fire({
      icon: "warning",
      text: "Alas dan Tingginya di masukin dulu dong!",
    });
  }
}

function calculatePerimeter() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);

  if (
    !isNaN(sideA) &&
    !isNaN(sideB) &&
    !isNaN(sideC) &&
    sideA > 0 &&
    sideB > 0 &&
    sideC > 0
  ) {
    const perimeter = sideA + sideB + sideC;
    const perimeterFormula = "Keliling = Sisi A + Sisi B + Sisi C";
    const perimeterCalculation = `Keliling = ${sideA} + ${sideB} + ${sideC}`;

    document.getElementById("perimeterFormula").innerText = perimeterFormula;
    document.getElementById("perimeterCalculation").innerText =
      perimeterCalculation;
    document.getElementById("perimeterResult").innerText =
      formatResult(perimeter);

    document.getElementById("perimeterOutput").classList.remove("hidden");
  } else {
    Swal.fire({
      icon: "warning",
      text: "Sisi-sisinya di masukin dulu dong!",
    });
  }
}

function formatResult(value) {
  const formattedValue = value.toFixed(2);
  return formattedValue.endsWith(".00") ? parseInt(value) : formattedValue;
}

function switchCalculator() {
  const kalkulatorLuas = document.getElementById("kalkulatorLuas");
  const kalkulatorKeliling = document.getElementById("kalkulatorKeliling");

  kalkulatorLuas.classList.toggle("hidden");
  kalkulatorKeliling.classList.toggle("hidden");
}

function resetCalculator() {
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
  document.getElementById("sideA").value = "";
  document.getElementById("sideB").value = "";
  document.getElementById("sideC").value = "";

  document.getElementById("areaOutput").classList.add("hidden");
  document.getElementById("perimeterOutput").classList.add("hidden");
}
