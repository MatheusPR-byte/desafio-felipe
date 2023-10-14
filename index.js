let pokemons = [
    ["Charmander", -1],
    ["Charizard", 8400]
]
 

for (let i = 0; i < pokemons.length; i++) {
    let name = pokemons[i][0]
    let xp = pokemons[i][1]
    let xpLevel = ""

    if (xp < 0) {
        xpLevel = "não reconhecido."
    } else if (xp <= 1000) {
        xpLevel = "Ferro"
    } else if (xp <= 2000) {
        xpLevel = "Bronze"
    } else if (xp <= 5000) {
        xpLevel = "Prata"
    } else if (xp <= 7000) {
        xpLevel = "Ouro"
    } else if (xp <= 8000) {
        xpLevel = "Platina"
    } else if (xp <= 9000) {
        xpLevel = "Ascendente"
    } else if (xp <= 10000) {
        xpLevel = "Imortal"
    } else if (xp >= 10001) {
        xpLevel = "Radiante"
    }

    console.log("O Herói de nome " + name + " está no nível " + xpLevel)
}