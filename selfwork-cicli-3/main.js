let scelta = prompt("Inserisci un numero per selezionare una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

while (true) {
    if (!isNaN(scelta) && scelta !== '') {
        if (scelta === '1') {
            console.log("E' stata selezionata l'acqua");
            break;
        } else if (scelta === '2') {
            console.log("E' stata selezionata coca cola");
            break;
        } else if (scelta === '3') {
            console.log("E' stata selezionata birra");
            break;
        } else {
            scelta = prompt("Scelta non valida. Inserisci un numero per selezionare una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");
        }
    } else {
        scelta = prompt("Puoi inserire solo numeri. Per favore inserisci un numero valido per selezionare una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");
    }
}


// Esercizio Extra
// let scelta = prompt("Inserisci un numero per selezionare una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

// while (true) {
//     if (scelta === '1') {
//         console.log("E' stata selezionata l'acqua");
//         break;
//     } else if (scelta === '2') {
//         console.log("E' stata selezionata coca cola");
//         break;
//     } else if (scelta === '3') {
//         console.log("E' stata selezionata birra");
//         break;
//     } else {
//         scelta = prompt("Scelta non valida. Inserisci un numero per selezionare una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");
//     }
// }

