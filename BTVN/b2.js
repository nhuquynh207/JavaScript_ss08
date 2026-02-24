const playerNames = [
    "Messi",
    "Ronaldo ",
    "Neymar",
    "De Bruyner",
    "Kante",
    "Van Dijk",
    "Alisson"
];


const getUpperNames = (newList) => {
    return newList.map(players => players.toUpperCase());
}

let newArray = getUpperNames(playerNames);
console.log(newArray);
