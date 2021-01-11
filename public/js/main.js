// Exo 1
let multiplicateur = 5
// for (let i = 1; i <= 9; i++) {
//     console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`);
// }

// Exo 2
for (let i = 0; i <= 9; i+=2) {
    console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`);
}


// Exo 3
for (let i = 20; i >= 0; i-=2) {
        console.log(`${i} est pair`);
}

// Exo 4
let classe = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]
let long = []
let petit = []

// for (let i = 0; i < classe.length; i++) {
//     if (classe[i].length >= 5) {
//         long.push(classe[i]);
//     }
// }
// console.log(long)
classe.forEach(el => {
    if (el.length>= 5) {
        long.push(el)
    } else {
        petit.push(el)
    }
});


// Exo 5
let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

let grossesSommes = []
let petitesSommes = []

sommes.forEach(el => {
    if (el > 60) {
        grossesSommes.push(el)
    }
    else {
        petitesSommes.push(el)
    }
});

// for (let i = 0; i < sommes.length; i++) {
//     if (sommes[i]> 60) {
//         grossesSommes.push(sommes[i])
//         sommes.splice(i, 1)
//     }
// }
// console.log(grossesSommes);
// console.log(sommes);