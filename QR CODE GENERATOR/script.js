const qrInput = document.getElementById("qr-input")
const qrBtn = document.getElementById("qr-btn")
const qrImg = document.getElementById("qr-img")

qrBtn.addEventListener("click", () => {
    const inputValue = qrInput.value
    if(!inputValue){
        alert("The Input Cannot Be Empty.")
        return
    }
    else {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        qrImg.alt = `QR Code For ${inputValue}`
    }
})