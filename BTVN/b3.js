const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

const filterPlayersByPosition = (position, list) => {
    return list.filter(player => player.includes(position));
}

let newArray = filterPlayersByPosition("Forward",players);
console.log(newArray);
