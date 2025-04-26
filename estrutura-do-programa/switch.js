
switch (/* prompt("Qual é o tempo?") */ "Chuva") {
  case "Chuva":
    console.log("Lembre-se de trazer um guarda-chuva.");
    break;
  case "Sol":
    console.log("Vestir-se levemente.");
  case "Nublado":
    console.log("Sair de casa.");
    break;
  default:
    console.log("Tempo desconhecido!");
    break;
}