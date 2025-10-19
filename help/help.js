window.onload = function () {
 let accessOn = localStorage.getItem("accessOn")
    if (accessOn) {
        document.body.style.fontFamily = "serif"
    }
}