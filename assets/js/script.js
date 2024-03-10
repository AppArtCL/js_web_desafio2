function cambiaBorde() {
    if (document.querySelector(".gato-req-1").style.borderStyle != "none") {
        document.querySelector(".gato-req-1").style.borderStyle = "none"
    } else {
        document.querySelector(".gato-req-1").style.borderStyle = "solid"
    }
}

function cuentaStickers() {
    q1 = Number(document.querySelector(".cantidad-1").value);
    q2 = Number(document.querySelector(".cantidad-2").value);
    q3 = Number(document.querySelector(".cantidad-3").value);
    qTotal = 0;
    qTotal = q1 + q2 + q3 || 0;
    if (qTotal > 10) {
        document.querySelector(".parrafo-stickers").innerHTML =
            "Llevas demasiados stickers.";
    } else {
        if (qTotal < 2) {
            document.querySelector(".parrafo-stickers").innerHTML =
                "Llevas " + qTotal + " sticker.";
        } else {
            document.querySelector(".parrafo-stickers").innerHTML =
                "Llevas " + qTotal + " stickers.";
        }
    }
}

function verificaPassword() {
    pass = document.querySelector("#pass-1").value + document.querySelector("#pass-2").value +document.querySelector("#pass-3").value
    if (pass == "911") {
        document.querySelector(".parrafo-password").innerHTML = "Password 1 correcto."
    } else if (pass == "714" ) {
        document.querySelector(".parrafo-password").innerHTML = "Password 2 correcto."
    } else {
        document.querySelector(".parrafo-password").innerHTML = "Password incorrecto."
    }
}