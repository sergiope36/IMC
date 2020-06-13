document.getElementById("imc").addEventListener("click", checkImc )
function checkImc(weight, height) {
    var weight = prompt('¿Cual es tu peso? Ejemplo: 80kg');
    while (isNaN(weight) || weight =="") {
        weight = prompt('Por favor introduce un número');
    }

    var height = prompt('¿Cual es tu altura? Ejemplo: 1.70');
    height=height.replace(",", ".");
    while (isNaN(height) || height =="") {
        height = prompt('Por favor introduce un número');
    }

    var imc = weight/(height*height);
    var imcRounded = Math.round(imc *10)/10;
   
    switch (true) {
        case (imcRounded < 18.5):
            alert(`Tu imc es: ${imcRounded}. Tienes un peso insuficiente`);
            break;
        case (imcRounded >= 18.5 && imcRounded <= 24.9):
            alert(`Tu imc es: ${imcRounded}. Tienes un peso normal`);     
            break;
        case (imcRounded >=25 && imcRounded <= 26.9):
            alert(`Tu imc es: ${imcRounded}. Tienes sobrepeso Grado I`);
            break;
        case (imcRounded >=27 && imcRounded <= 29.9):
            alert(`Tu imc es: ${imcRounded}. Tienes sobrepeso Grado II`);
            break;
        case (imcRounded >= 30 && imcRounded <= 34.9):
            alert(`Tu imc es: ${imcRounded}. Tienes Obesidad Grado I`);
            break;
        case (imcRounded >=35 && imcRounded <= 39.9):
            alert(`Tu imc es: ${imcRounded}. Tienes Obesidad Grado II`);
            break;
        case (imcRounded >=40 && imcRounded < 49.9):
            alert(`Tu imc es: ${imcRounded}. Tienes Obesidad morbida`);
            break;
        case (imcRounded >=49.9):
            alert(`Tu imc es: ${imcRounded}. Tienes Obesidad extrema`);
            break;
    }
}