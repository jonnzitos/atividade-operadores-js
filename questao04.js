let idade = 20;
let possuiConvite = false;

if (idade >= 18 && possuiConvite) {
    console.log("Entrada permitida.");
} else {
    console.log("Entrada negada.");
    if (idade < 18) {
        console.log("Motivo: menor de idade.");
    } else {
        console.log("Motivo: não possui convite.");
    }
}
