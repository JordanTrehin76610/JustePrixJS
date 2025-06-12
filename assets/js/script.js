let limite = 100
let objectif = Math.floor(Math.random() * limite) + 1;
let joueur = -1
let nbEssaie = 0

alert(`Bienvenue au JustePrix, veuillez deviner le prix que je pense entre 1 et ${limite}`)

while (joueur !== objectif) {
    joueur = +prompt("Veuillez entrer le nombre que vous pensez être bon")
    if (joueur > objectif) {
        alert("C'est moins !")
    } else if (joueur < objectif) {
        alert("C'est plus !")
    }
    nbEssaie++
}

if (nbEssaie === 1) {
    alert(`Wouah du premier coup ! C'était bien ${objectif} le prix que je pensais !`)
} else {
    alert(`Félicitation, vous avez devinez le prix de ${objectif} en ${nbEssaie} essaies.`)
}

if (window.confirm("Voulez vous refaire une partie ?")) {
    window.location.reload(true);
} else {
    alert("Au revoir")
}