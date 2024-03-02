
// Función para generar un número aleatorio de 12 dígitos
function generateRandomNumber() {
    let randomNumber = "";
    for (let    i = 0; i < 12; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
}

// Función para generar y mostrar un nuevo código de barras
function generateNewBarcode() {
    let randomBarcodeNumber = generateRandomNumber();
    JsBarcode("#barcode", randomBarcodeNumber, {
        format: "EAN13",
        displayValue: true
    });
}

// Generar y mostrar un código de barras al cargar la página
generateNewBarcode();

// Agregar evento de clic al botón para generar un nuevo código de barras
document.getElementById("generateButton").addEventListener("click", function() {
    generateNewBarcode();
});

