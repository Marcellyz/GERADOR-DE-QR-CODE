//SELEÇÃO DE ELEMENTOS
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img")

 function generateQrCode() {
  //função para resgatar o valor do input
    const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

  //API
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

  // Eventos
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado";
    })
}
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
   if(e.code ==="Enter"){
   generateQrCode()}
})

// Limpar área do QR Code

qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";}
 });
